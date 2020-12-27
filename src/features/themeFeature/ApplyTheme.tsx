import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { selectTheme } from 'app/rootReducer'

interface Props {
  children: React.ReactNode
}

const ApplyTheme = ({ children }: Props) => {
  const theme = useSelector(selectTheme)
  const { name } = theme

  const updateCSSVariables = () => {
    console.log('THEME:', name)
    const varKeys = Object.keys(theme.vars)
    const varVals = Object.values(theme.vars)
    varKeys.forEach((k, index) => {
      document.documentElement.style.setProperty(k, varVals[index])
      console.log(k, ':', varVals[index])
    })
  }

  useEffect(updateCSSVariables, [name])

  return <React.Fragment>{children}</React.Fragment>
}

export default ApplyTheme
