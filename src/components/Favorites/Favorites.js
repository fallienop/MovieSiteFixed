import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';
import { savelist,clearapimovies,removeApiMovie } from '../../Redux/MoveMovieSlicer';

class Favorites extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            title: 'Новый список',
            movies: [
                { imdbID: 'tt0068646', title: 'The Godfather', year: 1972,poster:"" }
            ]
        }
        this.inputt=React.createRef();
    }
  


    saveListToStore = () => {
        const { movies } = this.props;
        const { savedLists } = this.props;
    
       const inputvalue=this.inputt.current.value;
       
        this.props.savelist({title:inputvalue,listmovies:movies});
         this.props.clearapimovies();
    this.inputt.current.value='';
       
      };
  
      removeApiMovieByIndex=(ind)=>{
     
        this.props.removeApiMovie(ind);
      }
      
    render() { 
        const {movies} =this.props;
    
        return (
            <div className="favorites">
                <input placeholder="New list" ref={this.inputt} className="favorites__name" />
                <ul className="favorites__list">
                    {movies.map((item,index) => {
                        
                        return <div className='favoriteMovie'><li className='limarg' key={item.imdbID} >  {item.title} ({item.year})</li>
                         <button onClick={()=>this.removeApiMovieByIndex(index)} className='removeButton'>+</button>
                         </div> ;
                    })}
                </ul>
                <button onClick={this.saveListToStore} type="button" className="favorites__save">Save list</button>
            </div>
        );
    }
}
 const mapStateToProps=(state)=>{
    return {    
        movies:state.movemovie.apimovies,
        savedLists:state.movemovie.savedLists
    }
 }
 
 const mapDispatchToProps={
   
        savelist,
        clearapimovies,
        removeApiMovie
    
 }

export default connect(mapStateToProps,mapDispatchToProps)( Favorites);