import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'

import GlobalConfigLoadingPage from 'features/globalConfig/GlobalConfigLoadingPage'

import { isGlobalConfigLoaded } from 'features/globalConfig/globalConfigSlice'
import { RootState, selectGlobalConfig, selectRouter } from './rootReducer'
import Routes from './Routes'
import './App.scss'

const App = () => {
  const globalConfig = useSelector(selectGlobalConfig)
  const { error, version } = globalConfig

  const content = () => {
    if (error) {
      return <div>Error: {error}</div>
    }
    if (!isGlobalConfigLoaded(globalConfig)) {
      return <GlobalConfigLoadingPage />
    }
    return <Routes />
  }

  return <div className="App">{content()}</div>
}

export default App
