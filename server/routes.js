//define router
const router = require('express').Router();

//controllers
const controllers = require('./controllers.js');

//all reviews
router.get('/reviews', controllers.get.getAllReviews);
  
  //get specific movie
router.get('/reviews/:movie_id', controllers.get.getReviewItem);
  
//get official movie rating; not included in db
router.get('/movies/:movie_id', controllers.get.getMovieRating);

//serve up sorted reviews
router.get('/reviews/sort/:movie_id', controllers.get.getSortedReviews);

module.exports = router;