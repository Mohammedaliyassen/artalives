import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataLogo=createAsyncThunk("LogoSlice/getDataLogo", async()=>{
     const response= await fetch("http://154.56.56.115/api/logo-designs?populate=*");
     const data =await response.json()
     return data
})
const LogoSlice =createSlice({
    initialState:[],
    name:"LogoSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDataLogo.fulfilled,(state,action)=>{
         return  action.payload
        })
    }

})

export default LogoSlice.reducer