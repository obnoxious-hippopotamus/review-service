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
    };

    componentDidMount() {
        Axios.get(`/api/reviews/${this.state.movie_id}`)
            .then(res => {
                return res.data
            })
            .then(reviews => {
                this.setState({ reviews })
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
                    <Sort />
                    <ReviewList />
                </Grid>
            </Grid>
        )
    };
};