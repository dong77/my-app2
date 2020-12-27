import { selectTheme } from "app/rootReducer";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

const ApplyTheme = ({ children }: Props) => {
  const theme = useSelector(selectTheme);
  const { name } = theme;

  const updateCSSVariables = () => {
    console.log("THEME:", name);
    const varKeys = Object.keys(theme.vars);
    const varVals = Object.values(theme.vars);
    varKeys.forEach((k, index) => {
      document.documentElement.style.setProperty(k, varVals[index]);
      console.log(k, ":", varVals[index]);
    });
  };

  useEffect(updateCSSVariables, [name]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default ApplyTheme;
