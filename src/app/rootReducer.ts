import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter, RouterState } from 'connected-react-router'
import globalConfig from 'features/globalConfig/globalConfigSlice'
import theme from 'features/themeFeature/themeSlice'
import { createBrowserHistory, History } from 'history'

const createRootReducer = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    globalConfig,
    theme,
  })
}

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>

export const selectGlobalConfig = (state: RootState) => state.globalConfig
export const selectRouter = (state: RootState) => state.router
export const selectTheme = (state: RootState) => state.theme


export default createRootReducer
