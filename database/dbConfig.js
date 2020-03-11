const mysql = require('mysql');

//db connection
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.DB_PASS,
  database : 'amazon_reviews'
});

//export connection
module.exports.connection = connection.connect(err => {
    if (err) {
      console.error('db error connecting: ' + err.stack);
    } else {
        console.log('database connected');
    }
  });