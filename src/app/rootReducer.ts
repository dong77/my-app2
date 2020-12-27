import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter, RouterState } from 'connected-react-router'
import globalConfigReducer from 'features/globalConfig/globalConfigSlice'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
  globalConfig: globalConfigReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const selectGlobalConfig = (state: RootState) => state.globalConfig
export const selectRouter = (state: RootState) => state.router

export default rootReducer
