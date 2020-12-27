import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Exchange,
  Token,
  Tokens,
  GlobalConfig,
  loadExchange,
  loadTokens,
} from 'api/loopringAPI'
import { AppThunk } from 'app/store'

interface CurrentView {
  view: 'account' | 'profile'
}

export type CurrentViewState = CurrentView & {}

const initialState: CurrentViewState = {
  view: 'account',
}

const currentViewSlice = createSlice({
  name: 'currentView',
  initialState,
  reducers: {
    setCurrentView(state, { payload }: PayloadAction<CurrentView>) {
      const { view } = payload
      state.view = view
    },
  },
})

export const { setCurrentView } = currentViewSlice.actions
export default currentViewSlice.reducer
