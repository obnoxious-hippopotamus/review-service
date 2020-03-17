import React from 'react';
import ReviewItem from './reviewItem.jsx';
import { Skeleton } from '@material-ui/lab';

const ReviewList = props => {

    let placeholders = [0,1,2,3,4]

    if (props.reviews.length === 0) {
        return (
            
            <div className="placeholderView">
                {placeholders.map(item => {
                    return (
                        <div className="placeholder" key={placeholders.indexOf(item)}>
                            <Skeleton variant="circle" width={40} height={40} />
                            <Skeleton variant="rect" width={600} height={100} />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className="reviewItemView">
                {props.reviews.map(review => {
                    return (
                        <ReviewItem key={review.id} review={review} />
                    )
                })}
            </div>
        )
    }
};

export default ReviewList;