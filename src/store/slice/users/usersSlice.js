import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        currentUser:null,
        usersData:[],
    },
    reducers:{
        logIn(state, {payload: {login, password}}){
            state.currentUser = state.usersData.find(user => (user.username === login || user.email === login) && user.password === password) || null
        },
        logOut(state){
            state.currentUser = null
        },
        addPost(state, {payload}){
            const userIdx = state.usersData.findIndex(user => user.id === state.currentUser.id)
            state.usersData[userIdx].posts.unshift(payload)
            state.currentUser.posts.unshift(payload)
        },
        deletePost(state,{payload}){
            const userIdx =state.usersData.findIndex(user => user.id === state.currentUser.id)
            state.usersData[userIdx].posts= state.usersData[userIdx].posts.filter(post=>post.id!== payload)
            state.currentUser=state.usersData[userIdx]
        }
    },
    extraReducers:{
        [fetchUsers.pending]: (state) => {
            state.isLoading = true
            state.isError = false
        },
        [fetchUsers.fulfilled]: (state, {payload}) => {
            state.usersData.push(...payload)
            state.isLoading = false
            state.isError = false
        },
        [fetchUsers.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        }
    }
})

export const selectUsers = state => state.users

export const {logIn, logOut} = usersSlice.actions

export const usersReducer = usersSlice.reducer