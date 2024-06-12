import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemSlice';

export const store = configureStore({
    reducer: {
        item: itemsReducer
    }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;