import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "themes";

interface ThemeState {
  name: "light" | "dark";
  vars: Record<string, string>;
}

const initialState: ThemeState = {
  name: "light",
  vars: lightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    applyLightTheme(state, action: PayloadAction<undefined>) {
      state.name = "light";
      state.vars = lightTheme;
    },
    applyDarkTheme(state, action: PayloadAction<undefined>) {
      state.name = "dark";
      state.vars = darkTheme;
    },
  },
});

export const { applyLightTheme, applyDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
