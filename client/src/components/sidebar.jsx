import React from 'react';
import { Rating } from '@material-ui/lab';

import CustomerReview from './customerReview.jsx';
import RatingChart from './ratingChart.jsx';

const Sidebar = props => {
    return (
        <div>
            <h2>Customer Reviews</h2>
            <RatingChart />
            <CustomerReview />
        </div>
    )
};

export default Sidebar;