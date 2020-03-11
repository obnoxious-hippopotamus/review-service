let Axios = require('axios');
require('dotenv').config();
let MOVIE_API_KEY = require('./env')

Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false`)