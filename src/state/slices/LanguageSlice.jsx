import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    language: 'ar', // Default languagex
};
const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.language = state.language === 'ar' ? 'en' : 'ar';
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});
export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;