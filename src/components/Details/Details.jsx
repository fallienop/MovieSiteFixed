import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import style from './Details.module.css'


const Details = () => {

    const movieDetail = useSelector(state=>state.movemovie.movieDetail) 

      return (
    <div className={style.main}>
  
   <h2 className={style.movietitle}>{movieDetail.title}</h2>
       <img src={movieDetail.poster} alt="poster"/>
   <a target={'_blank'} className={style.gotomovie} href={`https://www.imdb.com/title/${movieDetail.imdbID}`}>go to movie</a>
   
   
    </div>  
  )
}

export default Details