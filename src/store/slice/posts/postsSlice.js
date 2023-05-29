import { createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "./postsAPI"

const postsSlice = createSlice({
    name:'posts',
    initialState:{
        isLoading: false,
        data:[],
        isError: false
    },
    reducers:{
        addComment(state, {payload: {postId, body, username}}){
                const idx = state.data.findIndex(post => post.id === postId)

                state.data[idx].comments.push({
                    id: new Date().getTime().toString(),
                    username, body
                })
        },
        addPost(state, {payload}){
            state.data.unshift(payload)
        },
        deletePost(state,{payload}){
            state.data=state.data.filter(post=>post.id!==payload)
        }
    },
    extraReducers:{
        [fetchPosts.pending]: (state) => {
            state.isLoading = true
            state.isError = false
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            state.data.push(...payload)
            state.isLoading = false
            state.isError = false
        },
        [fetchPosts.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        }
    }
} )

export const selectPosts = state => state.posts

export const { addComment,addPost } = postsSlice.actions

export const postsReducer = postsSlice.reducer