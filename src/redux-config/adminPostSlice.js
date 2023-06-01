import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk("fetchPost",async ()=>{
    const response = await axios.get("http://localhost:3000/admin/getAdminPost");
    return response.data.adminPost;
})

const slice =  createSlice({
    name:"adminPost",
    initialState:{
        allPost:[],
        isLoading:false,
        error:null
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchPost.pending,(state,action)=>{state.isLoading = true})
        .addCase(fetchPost.fulfilled,(state,action)=>{state.allPost = action.payload})
        .addCase(fetchPost.rejected,(state,action)=>{state.isLoading = false 
            state.error = "something went wrong in slice"})
    }
})

export default slice.reducer;