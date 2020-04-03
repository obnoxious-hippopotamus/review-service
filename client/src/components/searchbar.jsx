import React from 'react';

const Searchbar = props => {
    if (props.allMovies.length > 0) {
        let topMovies = props.allMovies.slice(0,100)
        
        return (
            <div className="searchbar">
                <select className="selector">
                    {/* <option selected className="searchItem">Ragnarok</option> */}
                    {props.allMovies.map(movie => {
                        return (
                            <option key={movie.movie.id} >{movie.movie_id}</option>
                        )
                    })}
                </select>
            </div>
        )
    } else {
        return (
            <div className="searchbar">
                <select className="selector">
                    
                </select>
            </div>
        )
    }
};

export default Searchbar;