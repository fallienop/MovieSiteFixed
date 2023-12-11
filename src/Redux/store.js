import { configureStore } from "@reduxjs/toolkit";


import moveMover from './MoveMovieSlicer'
export const store=configureStore({

  reducer:{
    movemovie:moveMover
   }, middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
