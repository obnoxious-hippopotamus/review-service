const mysql = require('mysql');
require('dotenv').config();

//db connection
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST, // for use with Docker
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT
});

//export connection
module.exports.connection = connection;

// module.exports.connection.connect(err => {
//   if (err) {
//     console.error('db error connecting: ' + err.stack);
//   } else {
//     console.log('database connected');
//   }
// });