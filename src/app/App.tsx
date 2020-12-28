import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'

import DemoPage from 'pages/DemoPage/DemoPage'
import HomePage from 'pages/HomePage/HomePage'
import AccountPage from 'pages/AccountPage/AccountPage'
import ExchangePage from 'pages/ExchangePage/ExchangePage'
import ProfilePage from 'pages/ProfilePage/ProfilePage'
import DocsPage from 'pages/DocsPage/DocsPage'
import HelpPage from 'pages/HelpPage/HelpPage'

import GlobalConfigLoadingPage from 'features/globalConfig/GlobalConfigLoadingPage'

import { isGlobalConfigLoaded } from 'features/globalConfig/globalConfigSlice'
import { RootState, selectGlobalConfig, selectRouter } from './rootReducer'

import './App.css'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const globalConfig = useSelector(selectGlobalConfig)
  const router = useSelector(selectRouter)
  const { error, version } = globalConfig

  const content = () => {
    if (error) {
      return <div>Error: {error}</div>
    }
    if (!isGlobalConfigLoaded(globalConfig)) {
      return <GlobalConfigLoadingPage />
    }
    return (
      <Switch>
        <Route exact path="/">
          <AccountPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/demo">
          <DemoPage />
        </Route>
        <Route exact path="/account">
          <AccountPage />
        </Route>
        <Route exact path="/exchange">
          <ExchangePage />
        </Route>
        <Route exact path="/docs">
          <DocsPage />
        </Route>
        <Route exact path="/help">
          <HelpPage />
        </Route>
      </Switch>
    )
  }

  return <div className="App">{content()}</div>
}

export default App
