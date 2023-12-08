import React, { Component } from 'react';
import './MovieItem.css';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {movemovies} from '../../Redux/MoveMovieSlicer' 
import { setDetails } from '../../Redux/MoveMovieSlicer';
import { Link } from 'react-router-dom';
class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.h3text = React.createRef();
      }
     
    addToListClicker=()=>{
   
    const {imdbID, title, year, poster } = this.props;
    let movie={
            imdbID: imdbID, title: title, year: year ,poster:poster
          }
       this.props.movemovies(movie)
    }


    seeDetails=()=>{
      const {imdbID, title, year, poster } = this.props;
      let movie={
              imdbID: imdbID, title: title, year: year ,poster:poster
            }
        console.log(this.props)
        this.props.setDetails(movie)
        // this.props.history.push(`/details/${movie.imdbID}`)
    
    }

      
    render() {
        const {imdbID, title, year, poster } = this.props;
        const ButtonLink = ({ func,to, type, children }) => (
            <Link to={to}>
              <button onClick={func} type={type}>{children}</button>
            </Link>
          );
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 ref={this.h3text} className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button onClick={this.addToListClicker} type="button" className="movie-item__add-button">Add to the list</button>
                    <ButtonLink func={this.seeDetails} to={`/details`} type="button"  className="movie-item__add-button">  Details</ButtonLink>
                   
                </div>
                
            </article>
        );
    }
}


const mapDispatchToProps={
   
        // movemovies:movemovies
movemovies ,setDetails     
}


export default connect(null, mapDispatchToProps)(MovieItem);