import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/LanguageSlice';

const store = configureStore({
    reducer: {
        language: languageReducer,
    },
});

export default store;
