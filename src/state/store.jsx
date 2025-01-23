import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // تفعيل DevTools فقط في بيئة التطوير
});

export default store;
