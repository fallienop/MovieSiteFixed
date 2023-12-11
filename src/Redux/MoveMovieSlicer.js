import { createSlice } from "@reduxjs/toolkit";

const initialState={
    apimovies:[],
    searchinput:"",
    savedLists:[],
    movieDetail:'fsddf'
}

export const MoveMovieSlicer = createSlice({
    
    name:'movemovie',
    initialState,
    reducers:{
        movemovies:(state,action)=>{
           const movieExists=state.apimovies.find(movie=>movie.title===action.payload.title);
           if(!movieExists){
                state.apimovies.push(action.payload);
              }
        },
        movesearch:(state,action)=>{
            state.searchinput=action.payload
        },
        savelist:(state,action)=>{
            if(!(state.apimovies=== undefined || state.apimovies.length == 0)){
                state.savedLists.push(action.payload)
            }
            
        },
        clearapimovies:(state)=>{
                 state.apimovies=[]
        },
        setDetails:(state,action)=>{
            state.movieDetail=action.payload
        },
        removeApiMovie:(state,action)=>{
            state.apimovies.splice(Number(action.payload),1)
        },
        removeList:(state,action)=>{
            state.savedLists.splice(Number(action.payload),1)
        }
    }

})

export const {movemovies,movesearch,savelist,clearapimovies,setDetails,removeApiMovie,removeList} =  MoveMovieSlicer.actions
export default MoveMovieSlicer.reducer