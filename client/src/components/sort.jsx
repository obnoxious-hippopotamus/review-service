import React from 'react';

const Sort = props => {
    return (
        <div>
            <select>
                <option value="init" selected>View Sorted</option>
                <option value="top_reviews">Top Reviews</option>
            </select>
        </div>
    )
};

export default Sort;