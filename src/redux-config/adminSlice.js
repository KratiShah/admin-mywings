import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAdmin = createAsyncThunk("fetchAdmin",async ()=>{
    const response =  await axios.get("http://localhost:3000/admin/getAdmin");
    console.log(response.data);
    // return response.data.admin;
})

const slice = createSlice({
    name:"admin1",
    initialState:{
        adminData : null,
        isLodding : false,
        error : null
    },
    
    reducers:{
        setAdmin:(state,action)=>{
            state.adminData = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAdmin.pending,(state,action)=>{
            state.isLodding = true
        }).addCase(fetchAdmin.fulfilled,(state,action)=>{
            state.adminData = action.payload
        }).addCase(fetchAdmin.rejected,(state,action)=>{
            state.isLodding = false
            state.error = "Oops ! something went wrong"
        })
    }
})
export const {setAdmin} = slice.actions;
export default slice.reducer;