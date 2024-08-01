import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice';
import taskReducer from './slices/taskSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer
  }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true
})

export default store;