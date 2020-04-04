import React from 'react';

const Searchbar = props => {
    
    let currentMovie = '';
    
    //find the current movie
    for (let i = 0; i < props.allMovies.length; i++) {
        if (props.allMovies[i].movie_id === props.currentMovieId) {
            currentMovie = props.allMovies[i].movie_title;
        }
    }
        
    return (
        <div className="searchbar">
                <p>Select a Movie</p>
                {props.allMovies.length > 0 &&
                <select className="selector" onChange={props.selectNewMovie}>
                    <option defaultValue className="searchItem">{currentMovie}</option>
                    {props.allMovies.map(movie => {
                        return (
                            <option key={movie.id} >{movie.movie_title}</option>
                        )
                    })}
                </select>
                }
        </div>
    )
    
};

export default Searchbar;