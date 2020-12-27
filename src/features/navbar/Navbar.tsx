import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectRouter } from "app/rootReducer";
import classnames from "classnames";
import styles from "./Navbar.module.css";
import {
  applyLightTheme,
  applyDarkTheme,
} from "features/themeFeature/themeSlice";

interface NavbarButtonProps {
  label: string;
  pathnames: string[];
  currentPathname?: string;
}

const NavbarButton = ({
  label,
  pathnames,
  currentPathname,
}: NavbarButtonProps) => {
  const current = currentPathname || "/";
  return (
    <li
      className={classnames(styles.navBarButton, {
        [styles.active]: pathnames.includes(current),
      })}
    >
      <Link to={pathnames[0]}>{label}</Link>
    </li>
  );
};

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useSelector(selectRouter);
  const { pathname } = router.location;

  return (
    <nav>
      <ul>
        <NavbarButton
          label="Account"
          pathnames={["/", "/account"]}
          currentPathname={pathname}
        />
        <NavbarButton
          label="Profile"
          pathnames={["/profile"]}
          currentPathname={pathname}
        />
      </ul>

      <button onClick={() => dispatch(applyLightTheme())}>Light</button>
      <button onClick={() => dispatch(applyDarkTheme())}>Dark</button>
    </nav>
  );
};

export default Navbar;
