const mysql = require('mysql');
require('dotenv').config();

console.log(process.env.MYSQL_HOST);

//db connection
const connection = mysql.createConnection({
  // host: process.env.MYSQL_HOST, // for use with Docker
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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