import React from 'react';
import Rating from '@material-ui/lab/Rating';

const ReviewItem = props => {

    //generate random date for each review
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    
    let generateDate = randomDate(new Date(2012, 0, 1), new Date());

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = months[generateDate.getMonth()];
    var day = generateDate.getDay() + 1;
    var year = generateDate.getFullYear();

    let date = `${monthName} ${day}, ${year}`;

    //generate random number for helped area
    let num = Math.floor((Math.random() * 5) * 100);

    return (
        <div className="reviewItem">
            <div className="flex">
                <img className="authorImg" src={props.review.image_url} />
                <p className="author">{props.review.author}</p>
            </div>
            <div className="rating rm-margin">
                <Rating name="read-only" size="small" precision={0.1} value={props.review.rating} readOnly />
            </div>
            <div>
                <p className="small-grey rm-margin">Reviewed in the United States on {date.toString()}</p>
            </div>
            <div>
                <p className="small-grey rm-margin">Format: Prime Video | <span className="verified">Verified Purchase</span></p>
            </div>
            <div className="reviewContent">
                <p>{props.review.content}</p>
            </div>
            <div>
                <p className="small-grey rm-margin">{num} people found this helpful</p>
            </div>
            <div className="flex rm-margin">
                <button className="helpfulBtn">Helpful</button>
                <div>
                    <p className="small-grey padding-left">  |  Comment  |  Report Abuse</p>
                </div>
            </div>
        </div>
    )
};

export default ReviewItem;