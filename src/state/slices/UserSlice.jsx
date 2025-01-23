import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, // تأكد من أن الحقل يمكن أن يكون فارغًا افتراضيًا
  },
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload; // قم بتخزين البيانات مباشرة
    },
    logout(state) {
      state.userInfo = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
