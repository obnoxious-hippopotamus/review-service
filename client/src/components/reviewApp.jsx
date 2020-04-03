import React from 'react';
import Axios from 'axios';
import { Grid } from '@material-ui/core/';
import dbGetMovie from '../api/dbGetMovie.js';
import dbGetMovies from '../api/dbGetMovies.js';
import moviesGet from '../api/moviesGet.js';

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
            allMovies: [],
            reviews: [],
            popularity: 0
        };

        this.sortReviews = this.sortReviews.bind(this);
    };

    componentDidMount() {
        //get all movies for search bar
        dbGetMovies()
            .then(allMovies => {
                this.setState({ allMovies })
            })
            .catch(err => {
                console.log(err);
            });

        //get review data from db
        dbGetMovie(this.state.movie_id)
            .then(reviews => {
                this.setState({ reviews })
            })
            .catch(err => {
                console.log(err);
            });
        
        //get official movie rating
        moviesGet(this.state.movie_id)
            .then(movie => {
                this.setState({
                    popularity: movie.vote_average / 2
                })
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
            <Grid className="review-app-container" container >
                <Grid className="sidebar" item xs={4}>
                    <Sidebar 
                        reviews={this.state.reviews}
                        popularity={this.state.popularity}
                        allMovies={this.state.allMovies}
                    />
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