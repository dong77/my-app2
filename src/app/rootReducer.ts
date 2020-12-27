import { combineReducers } from '@reduxjs/toolkit'
import globalConfigReducer from 'features/globalConfig/globalConfigSlice'

const rootReducer = combineReducers({
  globalConfig: globalConfigReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const selectGlobalConfig = (state: RootState) => state.globalConfig

export default rootReducer
