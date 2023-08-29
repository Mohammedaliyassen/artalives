import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataAnimations=createAsyncThunk("animationSlice/getDataAnimations", async()=>{
     const response= await fetch("http://154.56.56.115/api/animations?populate=*");
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