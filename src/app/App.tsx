import React, { useEffect, ReactChildren, ReactChild } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'

import RelayerConfigLoadingPage from 'features/RelayerConfig/RelayerConfigLoadingPage'

import { isRelayerConfigLoaded } from 'features/RelayerConfig/RelayerConfigSlice'
import { RootState, selectRelayerConfig, selectRouter } from './rootReducer'
import Routes from './Routes'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
