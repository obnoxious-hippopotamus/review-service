//import db connection and movie API
const db = require('./models.js');
const movieApi = require('./helpers/apiHelpers.js');

module.exports = {
    get: {
        // all reviews
        getAllReviews: (req, res) => {
            console.log('made it to controller')
            db.getAllTableData()
                .then(response => {
                    res.status(200).json(response);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        },
        // get specific movie
        getReviewItem: (req, res) => {
            db.getDataById(req.params.movie_id)
                .then(response => {
                    res.status(200).json(response);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        },
        // get official movie rating; not included in db
        getMovieRating: (req, res) => {
            movieApi.get(req.params.movie_id)
                .then(response => {
                  res.status(200).send(response.body);
                })
                .catch(err => {
                  res.status(400).json(err);
                });
        },
        // serve up sorted reviews
        getSortedReviews: (req, res) => {
            db.getSortedReviews(req.params.movie_id)
                .then(response => {
                    res.status(200).json(response);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        },
    }
};