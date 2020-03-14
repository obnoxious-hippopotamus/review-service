import React from 'react';
import Divider from '@material-ui/core/Divider';

const CustomerReview = props => {
    return (
        <div className="customerReviewSection">
            <h3 className="rm-margin">Review this product</h3>
            <p>Share your thoughts with other customers</p>
            <button className="writeReviewBtn">Write a customer review</button>
            <Divider />
        </div>
    )
};

export default CustomerReview;