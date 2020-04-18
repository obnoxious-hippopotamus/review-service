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
        this.selectNewMovie = this.selectNewMovie.bind(this);
        this.getAllMovies = this.getAllMovies.bind(this);
        this.getCurrentMovie = this.getCurrentMovie.bind(this);
        this.getMovieRating = this.getMovieRating.bind(this);
    };

    getAllMovies() {
        dbGetMovies()
            .then(allMovies => {
                this.setState({ allMovies })
            })
            .catch(err => {
                console.log(err);
            });
    }

    getCurrentMovie() {
        dbGetMovie(this.state.movie_id)
            .then(reviews => {
                this.setState({ reviews }, () => console.log(this.state.reviews))
            })
            .catch(err => {
                console.log(err);
            });
    }

    getMovieRating() {
        moviesGet(this.state.movie_id)
            .then(movie => {
                this.setState({
                    popularity: movie.vote_average / 2
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        //get all movies for search bar
        this.getAllMovies();

        //get review data from db
        this.getCurrentMovie();
        
        //get official movie rating
        this.getMovieRating();
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

    //change
    selectNewMovie(e) {
        console.log(e.target.value)
        for (let i = 0; i < this.state.allMovies.length; i++) {
            if (this.state.allMovies[i].movie_title === e.target.value) {
                this.setState({
                    movie_id: this.state.allMovies[i].movie_id
                }, () => {this.getCurrentMovie(); this.getMovieRating()})
            }
        }
    }


    render() {

        return(
            <Grid className="review-app-container" container >
                <Grid className="sidebar" item >
                    <Sidebar 
                        reviews={this.state.reviews}
                        popularity={this.state.popularity}
                        allMovies={this.state.allMovies}
                        currentMovieId={this.state.movie_id}
                        selectNewMovie={this.selectNewMovie}
                    />
                </Grid>
                <Grid className="main" item >
                    <Tags />
                    <Sort sortReviews={this.sortReviews} />
                    <ReviewList reviews={this.state.reviews} />
                </Grid>
            </Grid>
        )
    };
};