import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter, RouterState } from 'connected-react-router'
import theme from 'features/ThemeFeature/ThemeSlice'
import { createBrowserHistory, History } from 'history'
import { localizeReducer } from 'react-localize-redux'
import RelayerConfig from 'features/RelayerConfig/RelayerConfigSlice'
import demo from 'features/DemoFeature/DemoFeatureSlice'

const createRootReducer = (history: History) => {
  return combineReducers({
    localize: localizeReducer,
    router: connectRouter(history),
    RelayerConfig,
    theme,
    demo,
  })
}

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>

export const selectRelayerConfig = (state: RootState) => state.RelayerConfig
export const selectRouter = (state: RootState) => state.router
export const selectTheme = (state: RootState) => state.theme
export const selectDemo = (state: RootState) => state.demo

export default createRootReducer
