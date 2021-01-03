import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter, RouterState } from 'connected-react-router'
import theme from 'features/themeFeature/themeSlice'
import { createBrowserHistory, History } from 'history'
import { localizeReducer } from 'react-localize-redux'
import globalConfig from 'features/globalConfig/globalConfigSlice'
import demo from 'features/DemoFeature/DemoFeatureSlice'

const createRootReducer = (history: History) => {
  return combineReducers({
    localize: localizeReducer,
    router: connectRouter(history),
    globalConfig,
    theme,
    demo,
  })
}

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>

export const selectGlobalConfig = (state: RootState) => state.globalConfig
export const selectRouter = (state: RootState) => state.router
export const selectTheme = (state: RootState) => state.theme
export const selectDemo = (state: RootState) => state.demo

export default createRootReducer
