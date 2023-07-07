import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// reducers
import { themeReducer, tokenReducer } from './index';

export const store = configureStore({
  reducer: { themeReducer, tokenReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
