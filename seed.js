const Axios = require('axios');
require('dotenv').config();
const db = require('./server/models.js');
var faker = require('faker');

//save all movie ids from initial api call
let movieIds = [];
let movieReference = []

const getMoviesAndReviews = async () => {

    //increment pages of data for api calls
    let page = 1;

    //while loop to get 5 pages of data
    while (page <= 10) {
        
        //async/await function to GET
        const response = await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`)
                .then(response => {
                    return response.data.results;
                })
                .then(data => {
                    data.map(movie => {
                        movieReference.push({id: movie.id, title: movie.title})
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

                    //get movie title for each review using the movie reference obj
                    let movie_title;

                    //iterate through reference obj
                    for (let i = 0; i < movieReference.length; i++) {
                        //if movie id in obj = the current movie id
                        if (movieReference[i].id === movie) {
                            //set movie title 
                            movie_title = movieReference[i].title;
                        }
                    }

                    //generate avatar img
                    let avatar = faker.image.avatar();
                    
                    //generate random num between 1-5 for rating
                    let rating = Math.ceil(Math.random() * 5);

                    //generate random date for each review (string)
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
                    let helped = Math.floor((Math.random() * 5) * 100);

                    db.getSeedData(movie, item.author, item.content.replace(/[\u0800-\uFFFF]/g, ''), avatar, rating, movie_title, helped, date)
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
    .then(() => console.log('Finished'))
    .catch(err => {
        console.log(err);
    });
