import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducers/todoReducer';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    users: userReducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
