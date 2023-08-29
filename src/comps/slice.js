import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchData = createAsyncThunk('slice/fetchData', async () => {
  const response = await fetch("http://154.56.56.115/api/logo-design-categories?populate=*")
  .then((response)=>response.json())
  .then((data)=>{return data} )
  
 
  
  
})

export const slice = createSlice({
  name: 'services',
  initialState: [],
    
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.push(action.payload)
    })
  },
})

export const {  } = slice.actions

export default slice.reducer