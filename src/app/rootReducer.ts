import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter, RouterState } from 'connected-react-router'
import globalConfigReducer from 'features/globalConfig/globalConfigSlice'
import { createBrowserHistory, History } from 'history'

const createRootReducer = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    globalConfig: globalConfigReducer,
  })
}

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>

export const selectGlobalConfig = (state: RootState) => state.globalConfig
export const selectRouter = (state: RootState) => state.router

export default createRootReducer
