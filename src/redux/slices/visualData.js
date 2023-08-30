import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataVisual=createAsyncThunk("VisualSlice/getDataVisual", async()=>{
     const response= await fetch("https://api.artalives.com/api/visual-identities?populate=*&sort[0]=id:desc");
     const data =await response.json()
     return data
})
const VisualSlice =createSlice({
    initialState:[],
    name:"VisualSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDataVisual.fulfilled,(state,action)=>{
         return  action.payload
        })
    }

})

export default VisualSlice.reducer

