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

    //toggle state to handle the 'helpful' button click
    toggleHelped() {
        this.setState({
            helped: !this.state.helped
        });
    };

    
    render() {

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
                    <p className="small-grey rm-margin">Reviewed in the United States on {this.props.review.date_added}</p>
                </div>
                <div>
                    <p className="small-grey rm-margin">Format: Prime Video | <span className="verified">Verified Purchase</span></p>
                </div>
                <div className="reviewContent">
                    <p>{this.props.review.content}</p>
                </div>
                <div>
                    <p className="small-grey rm-margin">{this.props.review.helped} people found this helpful</p>
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