import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeState = { theme: 'light' } | { theme: 'dark' };

const initialState: ThemeState = {
  theme: 'light',
};

// slice for theme
export const ThemeSlice = createSlice({
  name: 'AppTheme',
  initialState,
  reducers: {
    swapTheme: (state: string, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(swapTheme, (action: PayloadAction<string>) => {
      AsyncStorage.setItem('theme', JSON.stringify(action.payload));
    });
  },
});

// export the actions in the reducer
export const { swapTheme } = ThemeSlice.actions;

// export the reducer
export default ThemeSlice.reducer;
