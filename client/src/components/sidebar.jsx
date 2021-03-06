import React from 'react';
import { Rating } from '@material-ui/lab';
import Divider from '@material-ui/core/Divider';

import CustomerReview from './customerReview.jsx';
import RatingChart from './ratingChart.jsx';
import Searchbar from './searchbar.jsx';

const Sidebar = props => {
    
    return (
        <div>
            <h2>Customer Reviews</h2>
            <Searchbar
                allMovies={props.allMovies}
                currentMovieId={props.currentMovieId}
                selectNewMovie={props.selectNewMovie}
            />
            <div className="flex">
                <Rating name="read-only" size="large" value={props.popularity} precision={0.1} readOnly  />
                <h4 className="padding-left">{props.popularity} out of 5</h4>
            </div>
            <p className="small-grey">{props.reviews.length} customer ratings</p>
            <RatingChart reviews={props.reviews} />
            <Divider />
            <CustomerReview />
        </div>
    )
};

export default Sidebar;