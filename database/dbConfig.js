const mysql = require('mysql');

//db connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Skiclub0',
  database: 'amazon_reviews'
});

//export connection
module.exports.connection = connection;

module.exports.connection.connect(err => {
    if (err) {
      console.error('db error connecting: ' + err.stack);
    } else {
        console.log('database connected');
    }
  });