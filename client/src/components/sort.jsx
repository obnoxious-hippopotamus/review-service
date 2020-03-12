import React from 'react';

const Sort = props => {
    return (
        <div>
            <select onChange={props.sortReviews}>
                <option value="init">Sort</option>
                <option value="top_reviews">Top Reviews</option>
            </select>
        </div>
    )
};

export default Sort;