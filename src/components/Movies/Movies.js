import React, { Component ,useEffect} from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { connect } from 'react-redux';





class Movies extends Component {
    state = { 
        movies: [
            {
                imdbID: 'tt3896198',
                title: "Guardians of the Galaxy Vol. 2",
                year: 2017,
                poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

            },
            {
                imdbID: 'tt0068646',
                title: "The Godfather",
                year: 1972,
                poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

            }
        ],
        searchdata:""
    }

     getMoviesBySearch=async (search)=>{
         
        const response=await fetch(`https://www.omdbapi.com/?s=${search}&apikey=f1d20451`);
        const data=await response.json();
        return data;

    }   


  
componentDidUpdate(prevProps){

    if(prevProps.searchdata!==this.props.searchdata){
        this.getMoviesBySearch(this.props.searchdata).then(res=>{

         try{
            const newMovies=res.Search.map(movie=>({
                  
                imdbID: movie.imdbID,
             title: movie.Title,
             year: movie.Year,
             poster: movie.Poster
              
         }));
         this.setState(prevState=>({
            movies:[...newMovies]
    }))
         }
           
         catch(err){

         }
           
           
        })
    }
}





    render() { 

        
 

        return ( 
            <ul className="movies">
                {this.state.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
     searchdata : state.movemovie.searchinput
    }
}
 
export default connect(mapStateToProps)( Movies);