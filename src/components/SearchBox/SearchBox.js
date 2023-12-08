import React, { Component } from 'react';

import './SearchBox.css';
import { connect } from 'react-redux';
import {movesearch} from '../../Redux/MoveMovieSlicer'





class SearchBox extends Component {
    state = {
        searchLine: '',
        newData:'fds'
    };
 
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    };

    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        this.sendSearchInput();
    };

    sendSearchInput = () => {
        this.props.movesearch(this.state.searchLine);
    };

 

 

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Search movie by title:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="For example, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newData: state.movemovie.searchinput
    
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        movesearch: (searchLine) => dispatch(movesearch(searchLine))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
