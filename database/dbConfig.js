const mysql = require('mysql');

//db connection
const connection = mysql.createConnection({
  user: 'root',
  password: 'Skiclub0',
  database: 'amazon_reviews',
});

//if being used by Docker
if (process.env.MYSQL_DB_URI) {
  connection = mysql.createConnection(process.env.MYSQL_DB_URI);
}

//export connection
module.exports.connection = connection;

module.exports.connection.connect(err => {
  if (err) {
    console.error('db error connecting: ' + err.stack);
  } else {
    console.log('database connected');
  }
});