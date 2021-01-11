import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectRouter } from 'app/rootReducer'
import classnames from 'classnames'
import styles from './Navbar.module.scss'
import {
  applyLightTheme,
  applyDarkTheme,
} from 'features/ThemeFeature/ThemeSlice'
import ConnectButtonLocalized from 'components/ConnectButton/ConnectButton'

interface NavbarButtonProps {
  label: string
  pathnames: string[]
  currentPathname?: string
}

const NavbarButton = ({
  label,
  pathnames,
  currentPathname,
}: NavbarButtonProps) => {
  const current = currentPathname || '/'
  return (
    <li
      className={classnames(styles.navBarButton, {
        [styles.active]: pathnames.includes(current),
      })}
    >
      <Link to={pathnames[0]}>{label}</Link>
    </li>
  )
}

const Navbar = () => {
  const dispatch = useDispatch()
  const router = useSelector(selectRouter)
  const { pathname } = router.location

  return (
    <nav className={'l--has-shadow'}>
      <ul>
        <NavbarButton
          label="Home"
          pathnames={['/']}
          currentPathname={pathname}
        />
        <NavbarButton
          label="Account"
          pathnames={['/account']}
          currentPathname={pathname}
        />
        <NavbarButton
          label="Exchange"
          pathnames={['/exchange']}
          currentPathname={pathname}
        />
        <NavbarButton
          label="DeFi"
          pathnames={['/defi']}
          currentPathname={pathname}
        />
        <NavbarButton
          label="Profile"
          pathnames={['/profile']}
          currentPathname={pathname}
        />
        <NavbarButton
          label="Documentation"
          pathnames={['/docs']}
          currentPathname={pathname}
        />
        <NavbarButton
          label="Help"
          pathnames={['/help']}
          currentPathname={pathname}
        />
        <NavbarButton
          label="Demo"
          pathnames={['/demo']}
          currentPathname={pathname}
        />
      </ul>

      <ConnectButtonLocalized onClick={() => dispatch(applyLightTheme())}>
        Light
      </ConnectButtonLocalized>
      <ConnectButtonLocalized onClick={() => dispatch(applyDarkTheme())}>
        Dark
      </ConnectButtonLocalized>
    </nav>
  )
}

export default Navbar
