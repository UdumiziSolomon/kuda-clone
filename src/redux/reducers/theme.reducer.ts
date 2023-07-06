import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeState = { theme: string };

const initialState: ThemeState = {
  theme: 'light',
};

// slice for theme
export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    swapTheme: (state: ThemeState, action: PayloadAction<string>) => {
      state.theme = action.payload;
      AsyncStorage.setItem('theme', JSON.stringify(action.payload));
    },
  },
});

// export the actions in the reducer
export const { swapTheme } = ThemeSlice.actions;

// export the reducer
export default ThemeSlice.reducer;
