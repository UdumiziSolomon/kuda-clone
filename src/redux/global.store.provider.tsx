import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// reducers
import { themeReducer } from './index';

export const store = configureStore({
  reducer: { themeReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
