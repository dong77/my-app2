import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState, selectGlobalConfig, selectCurrentView } from './rootReducer'

import GlobalConfigLoadingPage from 'features/globalConfig/GlobalConfigLoadingPage'
import AccountPage from 'features/accountPage/AccountPage'
import ProfilePage from 'features/profilePage/ProfilePage'

import { isGlobalConfigLoaded } from 'features/globalConfig/globalConfigSlice'

import './App.css'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const globalConfig = useSelector(selectGlobalConfig)
  const view = useSelector(selectCurrentView)
  const { error, version } = globalConfig

  const content = () => {
    if (error) {
      return <div>Error: {error}</div>
    } else if (!isGlobalConfigLoaded(globalConfig)) {
      return <GlobalConfigLoadingPage />
    } else if (view === 'account') {
      return <AccountPage />
    } else if (view === 'profile') {
      return <ProfilePage />
    }
  }

  return <div className="App">{content()}</div>
}

export default App
