import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataVisual=createAsyncThunk("VisualSlice/getDataVisual", async()=>{
     const response= await fetch("https://154.56.56.115/api/visual-identities?populate=*");
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