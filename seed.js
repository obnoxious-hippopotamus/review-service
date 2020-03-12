const Axios = require('axios');
require('dotenv').config();
const db = require('./database/models.js');
var faker = require('faker');

//save all movie ids from initial api call
let movieIds = [];

const getMoviesAndReviews = async () => {

    //increment pages of data for api calls
    let page = 1;

    //while loop to get 5 pages of data
    while (page <= 5) {
        
        //async/await function to GET
        const response = await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`)
                .then(response => {
                    return response.data.results;
                })
                .then(data => {
                    data.map(movie => {
                        movieIds.push(movie.id);
                    })
                })
                .catch(err => {
                    console.log(err);
                })

        //increment
        page++;
    };

    //iterate over each movie id
    await movieIds.forEach(movie => {
        //run GET req for reviews
        let call = Axios.get(`https://api.themoviedb.org/3/movie/${movie}/reviews?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
            .then(res => {
                return res.data.results;
            })
            .then(review => {
                review.forEach(item => {
                    //generate avatar img
                    let avatar = faker.image.avatar();
                    
                    //generate random num between 1-5
                    var precision = 100; // 2 decimals
                    var num = (Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision));

                    db.getSeedData(movie, item.author, item.content.replace(/[\u0800-\uFFFF]/g, ''), avatar, num)
                        .then(() => console.log('Movie Added'))
                        .catch(err => console.log(err));
                })
            })
            .catch(err => {
                console.log(err);
            });
    });
}

//remove existing data from table
db.truncate()
    .then(() => {
        getMoviesAndReviews();
    })
    .catch(err => {
        console.log(err);
    });
