import { configureStore } from "@reduxjs/toolkit";


import moveMover from './MoveMovieSlicer'
export const store=configureStore({
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
  reducer:{
    movemovie:moveMover
   }, middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
