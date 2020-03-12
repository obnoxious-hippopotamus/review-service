import React from 'react';
import ReviewItem from './reviewItem.jsx';

const ReviewList = props => {
    return (
        <div>
            {props.reviews.map(review => {
                return (
                    <ReviewItem key={review.id} review={review} />
                )
            })}
        </div>
    )
};

export default ReviewList;