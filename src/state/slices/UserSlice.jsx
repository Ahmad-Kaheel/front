import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, // تخزين بيانات المستخدم
   
  },
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload.userInfo;
  
    },
    logout(state) {
      state.userInfo = null;
      
    },
  },
  
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
