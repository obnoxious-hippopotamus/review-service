import React from 'react';
import Axios from 'axios';
import { Grid } from '@material-ui/core/';

//components
import Sidebar from './sidebar.jsx';
import Sort from './sort.jsx';
import ReviewList from './reviewList.jsx';
import Tags from './tags.jsx';

export default class ReviewApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie_id: 284053,
            reviews: [],
        };

        this.sortReviews = this.sortReviews.bind(this);
    };

    componentDidMount() {
        Axios.get(`/api/reviews/${this.state.movie_id}`)
            .then(res => {
                return res.data
            })
            .then(reviews => {
                this.setState({ reviews }, () => console.log(this.state.reviews))
            })
            .catch(err => {
                console.log(err);
            });
    };

    sortReviews() {
        Axios.get(`/api/reviews/sort/${this.state.movie_id}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => {
                return res.data;
            })
            .then(reviews => {
                console.log(reviews);
                this.setState({
                    reviews: reviews
                })
            })
            .catch(err => {
                console.log(err);
            });
    };


    render() {

        return(
            <Grid container >
                <Grid className="sidebar" item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid className="main" item xs={8}>
                    <Tags />
                    <Sort sortReviews={this.sortReviews} />
                    <ReviewList reviews={this.state.reviews} />
                </Grid>
            </Grid>
        )
    };
};