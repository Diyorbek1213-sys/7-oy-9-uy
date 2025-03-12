import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './slices/dataSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})