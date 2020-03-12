import React from 'react';
import { Rating } from '@material-ui/lab';
import Divider from '@material-ui/core/Divider';

import CustomerReview from './customerReview.jsx';
import RatingChart from './ratingChart.jsx';

const Sidebar = props => {
    return (
        <div>
            <h2>Customer Reviews</h2>
            <RatingChart />
            <Divider />
            <CustomerReview />
        </div>
    )
};

export default Sidebar;