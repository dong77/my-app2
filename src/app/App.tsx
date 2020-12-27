import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'
import { RootState, selectGlobalConfig, selectRouter } from './rootReducer'

import GlobalConfigLoadingPage from 'features/globalConfig/GlobalConfigLoadingPage'
import AccountPage from 'features/accountPage/AccountPage'
import ProfilePage from 'features/profilePage/ProfilePage'

import { isGlobalConfigLoaded } from 'features/globalConfig/globalConfigSlice'

import './App.css'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const globalConfig = useSelector(selectGlobalConfig)
  const router = useSelector(selectRouter)
  const { error, version } = globalConfig

  const content = () => {
    if (error) {
      return <div>Error: {error}</div>
    } else if (!isGlobalConfigLoaded(globalConfig)) {
      return <GlobalConfigLoadingPage />
    } else {
      console.log('router:', router)
      return (
        <Switch>
          <Route exact path="/">
            <AccountPage />
          </Route>
          <Route exact path="/account">
            <AccountPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      )
    }
  }

  return <div className="App">{content()}</div>
}

export default App
