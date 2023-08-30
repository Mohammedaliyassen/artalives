import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataWeb=createAsyncThunk("WebSlice/getDataWeb", async()=>{
     const response= await fetch("https://api.artalives.com/api/webs?populate=*&sort[0]=id:desc");
     const data =await response.json()
     return data
})
const WebSlice =createSlice({
    initialState:[],
    name:"WebSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDataWeb.fulfilled,(state,action)=>{
         return  action.payload
        })
    }

})

export default WebSlice.reducer

