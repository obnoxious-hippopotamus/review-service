let dbConnection = require('../database/dbConfig.js').connection;

//seed the database
module.exports.getSeedData = (movie_id, author, content, img_url, rating, title, helped, date_added) => {
    
  // ==== INSERT EACH REVIEW INTO DB
  return new Promise((resolve, reject) => {

    let query = `INSERT INTO reviews (movie_id, author, content, image_url, rating, movie_title, helped, date_added)
            VALUES(${movie_id}, "${author}", "${content}", "${img_url}", ${rating}, "${title}", ${helped}, "${date_added}");`;

    dbConnection.query(query, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

//used to remove all data from table before getting new data
module.exports.truncate = () => {
  let query = 'TRUNCATE TABLE reviews';

  return new Promise((resolve, reject) => {
    dbConnection.query(query, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        console.log('Table Truncated');
        resolve();
      }
    });
  });
};

//used to get all data from table
module.exports.getAllTableData = () => {
  let query = 'SELECT * FROM reviews ORDER BY movie_title ASC';
  return new Promise((resolve, reject) => {
    dbConnection.query(query, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

//get specific movie id
module.exports.getDataById = (id) => {
  let query = `SELECT * FROM reviews WHERE movie_id = ${id}`;
  return new Promise((resolve, reject) => {
    dbConnection.query(query, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports.getSortedReviews = (id) => {
  const query = `SELECT * FROM reviews 
                    WHERE movie_id = ${id} 
                    ORDER BY rating DESC`;
    
  return new Promise((resolve, reject) => {
    dbConnection.query(query, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};