import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectRouter } from 'app/rootReducer'
import classnames from 'classnames'
import styles from './Navbar.module.css'

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
  const router = useSelector(selectRouter)
  const { pathname } = router.location

  return (
    <nav>
      <ul>
        <NavbarButton
          label="Account"
          pathnames={['/', '/account']}
          currentPathname={pathname}
        />
        <NavbarButton
          label="Profile"
          pathnames={['/profile']}
          currentPathname={pathname}
        />
      </ul>
    </nav>
  )
}

export default Navbar
