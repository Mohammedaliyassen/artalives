import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataSocial=createAsyncThunk("SocialSlice/getDataSocial", async()=>{
     const response= await fetch("https://154.56.56.115/api/social-medias?populate=*");
     const data =await response.json()
     return data
})
const SocialSlice =createSlice({
    initialState:[],
    name:"SocialSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDataSocial.fulfilled,(state,action)=>{
         return  action.payload
        })
    }

})

export default SocialSlice.reducer