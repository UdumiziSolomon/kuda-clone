import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TokenValue = {
  token: string | null;
};

const initialState: TokenValue = {
  token: 'null',
};

export const TokenSlice = createSlice({
  name: 'appToken',
  initialState,
  reducers: {
    addToken: (state: any, action: PayloadAction<string>) => {
      state.token = action.payload;
      AsyncStorage.setItem('appToken', JSON.stringify(action.payload));
    },
    removeToken: (state: any, action: PayloadAction<any>) => {
      state.token = action.payload;
      AsyncStorage.removeItem('appToken');
    },
  },
});

// actions export
export const { addToken, removeToken } = TokenSlice.actions;

// export reducer
export default TokenSlice.reducer;
