import { combineReducers } from '@reduxjs/toolkit'
import globalConfigReducer from 'features/globalConfig/globalConfigSlice'
import currentViewReducer from 'features/currentView/currentViewSlice'

const rootReducer = combineReducers({
  globalConfig: globalConfigReducer,
  currentView: currentViewReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const selectGlobalConfig = (state: RootState) => state.globalConfig
export const selectCurrentView = (state: RootState) => state.currentView.view

export default rootReducer
