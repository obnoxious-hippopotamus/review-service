const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const db = require('../database/models.js');
const movieApi = require('./helpers/apiHelpers.js');

const express = require('express');
const app = express();

require('dotenv').config();

// === serve static files
app.use(express.static(path.join(__dirname, '../client/public')));

// === middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// === routes

//serve up sorted reviews
app.get('/api/reviews/sort/:movie_id', (req, res) => {
  db.getSortedReviews(req.params.movie_id)
    .then(response => {
      console.log(response)
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//all reviews
app.get('/api/reviews', (req, res) => {
  db.getAllTableData()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get specific movie
app.get('/api/reviews/:movie_id', (req, res) => {
  db.getDataById(req.params.movie_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get official movie rating; not included in db
app.get('/api/movies/:movie_id', (req, res) => { 
  movieApi.get(req.params.movie_id)
    .then(response => {
      res.status(200).send(response.body);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//port and listen
let PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});