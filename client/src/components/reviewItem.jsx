import React from 'react';
import { Rating } from '@material-ui/lab';
import CheckIcon from '@material-ui/icons/Check';

export default class ReviewItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            helped: false
        };

        this.toggleHelped = this.toggleHelped.bind(this);
    };

    toggleHelped() {
        // e.preventDefault();

        this.setState({
            helped: !this.state.helped
        });
    };

    
    render() {

        //generate random date for each review
        function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        };
        
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
                    <img className="authorImg" src={this.props.review.image_url} />
                    <p className="author">{this.props.review.author}</p>
                </div>
                <div className="rating rm-margin">
                    <Rating name="read-only" size="small" precision={0.1} value={this.props.review.rating} readOnly />
                </div>
                <div>
                    <p className="small-grey rm-margin">Reviewed in the United States on {date.toString()}</p>
                </div>
                <div>
                    <p className="small-grey rm-margin">Format: Prime Video | <span className="verified">Verified Purchase</span></p>
                </div>
                <div className="reviewContent">
                    <p>{this.props.review.content}</p>
                </div>
                <div>
                    <p className="small-grey rm-margin">{num} people found this helpful</p>
                </div>
                <div className="flex rm-margin">
                    {this.state.helped === false &&
                    <button onClick={this.toggleHelped} className="helpfulBtn">Helpful</button>
                    }
                    {this.state.helped &&
                    <div className="flex">
                        <CheckIcon style={{fill: "green"}} fontSize='small' />
                        <p className="thank-you">Thank you for your feedback.</p>
                    </div>
                    }
                    <div>
                        <p className="small-grey padding-left">  |  Comment  |  Report Abuse</p>
                    </div>
                </div>
            </div>
        )
    };
};