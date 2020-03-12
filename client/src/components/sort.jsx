import React from 'react';

const Sort = props => {
    return (
        <div>
            <select>
                <option value="top_reviews">Top Reviews</option>
                <option value="most_recent">Most Recent</option>
            </select>
        </div>
    )
};

export default Sort;