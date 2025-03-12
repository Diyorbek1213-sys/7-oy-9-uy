import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: null,
    selectedPost: null
}

const dataSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(item => item.id !== action.payload)
        },
        selected: (state, action) => {
            state.selectedPost = action.payload
        },
        close: (state, action) => {
            state.selectedPost = action.payload
        }
    }
})

export default dataSlice.reducer
export const { getPosts, removePost, selected, close } = dataSlice.actions