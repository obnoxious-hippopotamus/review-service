//imports
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

//app
const app = express();

//routes
const routes = require('./routes');

//env config
require('dotenv').config();

// === serve static files
app.use(express.static(path.join(__dirname, '../public')));

// === middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// === routes
app.use('/api', routes);

//port and listen
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});