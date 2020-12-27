import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from './rootReducer'

import { GlobalConfigLoadingPage } from 'features/globalConfig/GlobalConfigLoadingPage'

import './App.css'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const { version, error, addressToTokenMap, idToTokenMap } = useSelector(
    (state: RootState) => state.globalConfig
  )
  const globalConfigLoaded = version && addressToTokenMap && idToTokenMap

  const content = () => {
    if (error) {
      return <div>Error: {error}</div>
    } else if (!globalConfigLoaded) {
      return <GlobalConfigLoadingPage />
    } else return <div>Version: {version}</div>
  }

  return <div className="App">{content()}</div>
}

export default App
