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
    console.log('theme:', name)
    const arrayOfVariableKeys = Object.keys(theme.vars)
    const arrayOfVariableValues = Object.values(theme.vars)

    //Loop through each array key and set the CSS Variables
    arrayOfVariableKeys.forEach((cssVariableKey, index) => {
      //Based on our snippet from MDN
      document.documentElement.style.setProperty(
        cssVariableKey,
        arrayOfVariableValues[index]
      )
    })
  }

  useEffect(updateCSSVariables, [name])

  return <React.Fragment>{children}</React.Fragment>
}

export default ApplyTheme
