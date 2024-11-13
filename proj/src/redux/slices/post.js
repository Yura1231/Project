import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:{
        items:[],
        status:'loading'

    },

    tags:{
      items:[],
      status:'loading'  
    }
}


const PostSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{}
})

export const postsReducer = PostSlice.reducer