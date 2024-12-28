import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    language: "en", 
    mode: "light", 
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setLanguage, setMode } = settingsSlice.actions;
export default settingsSlice.reducer;
