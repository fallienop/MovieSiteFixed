import React, { Component } from 'react';
import './ListPage.css';
import { connect } from 'react-redux';

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ],
        isCollapsedStates: Array(this.props.savedLists.length).fill(false)
    }

    toggleCollapse = (index) => {
        this.setState((prevState) => {
            const updatedCollapsedStates = [...prevState.isCollapsedStates];
            updatedCollapsedStates[index] = !updatedCollapsedStates[index];
            return {
                isCollapsedStates: updatedCollapsedStates
            };
        });
    }

    render() {
        const { isCollapsedStates } = this.state;
        const { savedLists } = this.props;

        return (
            <div className="list-page">
                <h1 className="list-page__title">My Lists</h1>
                <ul className='mainList'>
                    {savedLists.map((item, index) => {
                        return (
                            <div className='alist' key={item.title}>
                                <div className='listtitle'>
                                    <p>{item.title==""?"Untitled List":item.title}</p>
                                    <div onClick={() => this.toggleCollapse(index)} className={`switch ${isCollapsedStates[index] ? "hideandcollapse" : ""}`}><p>^</p></div>
                                </div>
                                {item.listmovies.map((movie, movieIndex) => {
                                    return (
                                        <div key={movieIndex} className={isCollapsedStates[index] ? "listmovieshow" : "listmoviehide"}>
                                            <li style={{ display: 'flex', marginTop: '10px', gap: '20px' }}>
                                                <img alt="moviet" width={'80px'} height={'80px'} style={{ borderRadius: '50px' }} src={movie.poster} />
                                                <p style={{ marginTop: "20px" }}>{movie.title} ({movie.year})</p>
                                            </li>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        savedLists: state.movemovie.savedLists
    }
}

export default connect(mapStateToProps)(ListPage);
