import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataMobile=createAsyncThunk("MobileSlice/getDataMobile", async()=>{
     const response= await fetch("https://api.artalives.com/api/Mobiles?populate=*&sort[0]=id:desc");
     const data =await response.json()
     return data
})
const MobileSlice =createSlice({
    initialState:[],
    name:"MobileSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDataMobile.fulfilled,(state,action)=>{
         return  action.payload
        })
    }

})

export default MobileSlice.reducer

