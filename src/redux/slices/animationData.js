import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataAnimations=createAsyncThunk("animationSlice/getDataAnimations", async()=>{
     const response= await fetch("https://api.artalives.com/api/animations?populate=*&sort[0]=id:desc");
     const data =await response.json()
     return data
})
const animationSlice =createSlice({
    initialState:[],
    name:"animationSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDataAnimations.fulfilled,(state,action)=>{
         return  action.payload
        })
    }

})

export default animationSlice.reducer

