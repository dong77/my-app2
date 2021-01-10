import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { lightTheme, darkTheme } from 'themes'

interface ThemeState {
  name: 'light' | 'dark'
  vars: Record<string, string>
}

const initialState: ThemeState = {
  name: 'light',
  vars: lightTheme,
}

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    applyLightTheme(state, action: PayloadAction<undefined>) {
      state.name = 'light'
      state.vars = lightTheme
    },
    applyDarkTheme(state, action: PayloadAction<undefined>) {
      state.name = 'dark'
      state.vars = darkTheme
    },
  },
})

export const { applyLightTheme, applyDarkTheme } = ThemeSlice.actions
export default ThemeSlice.reducer
