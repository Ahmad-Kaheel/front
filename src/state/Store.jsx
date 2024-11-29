import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';

const store = configureStore({
  reducer: {
    user: userReducer, // تأكد من أن المفتاح "user" متطابق مع الاستخدام في الكود
  },
});

export default store;
