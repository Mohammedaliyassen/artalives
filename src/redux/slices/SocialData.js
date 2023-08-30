import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataSocial=createAsyncThunk("SocialSlice/getDataSocial", async()=>{
     const response= await fetch("https://api.artalives.com/api/social-medias?populate=*&sort[0]=id:desc");
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

