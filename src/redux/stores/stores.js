import { configureStore } from '@reduxjs/toolkit'
import LogoSlice from "../slices/LogoData"
import VisualSlice from "../slices/visualData"
import animationSlice from "../slices/animationData"
import SocialSlice from "../slices/SocialData"



export const store = configureStore({
  reducer:{
      logo:LogoSlice,
      visual:VisualSlice,
      animation:animationSlice,
      social:SocialSlice,
    
      
  } 
})

