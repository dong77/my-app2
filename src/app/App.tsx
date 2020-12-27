import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from './rootReducer'

import { GlobalConfigLoadingPage } from 'features/globalConfig/GlobalConfigLoadingPage'
import { isGlobalConfigLoaded } from 'features/globalConfig/globalConfigSlice'

import './App.css'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const globalConfig = useSelector((state: RootState) => state.globalConfig)
  const { error, version } = globalConfig

  const content = () => {
    if (error) {
      return <div>Error: {error}</div>
    } else if (!isGlobalConfigLoaded(globalConfig)) {
      return <GlobalConfigLoadingPage />
    } else {
      return <div>Version: {version}</div>
    }
  }

  return <div className="App">{content()}</div>
}

export default App
