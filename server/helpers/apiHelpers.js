let request = require('request');

module.exports = {
  get: function(movie_id) {
    return new Promise((resolve, reject) => {
      let url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`;
            
      request(url, (error, response, body) => {
        if (error) {
          reject(err);
        } else {
          resolve(response)
        }
      });
    });
  }
};