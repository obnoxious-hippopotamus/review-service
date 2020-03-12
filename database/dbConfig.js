const mysql = require('mysql');

//db connection
module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASS,
  database: 'amazon_reviews'
});

//export connection
// module.exports.connection = connection;

module.exports.connection.connect(err => {
    if (err) {
      console.error('db error connecting: ' + err.stack);
    } else {
        console.log('database connected');
    }
  });

module.exports.getSeedData = (movie_id, author, content, img_url, rating) => {
    
    // ==== INSERT EACH REVIEW INTO DB
    return new Promise((resolve, reject) => {

        let query = `INSERT INTO reviews (movie_id, author, content, img_url, rating)
            VALUES(${movie_id}, "${author}", "${content}", "${img_url}", ${rating})`;
    
        connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};