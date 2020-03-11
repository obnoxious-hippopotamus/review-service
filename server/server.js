const Axios = require('axios');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const express = require('express');
const app = express();

require('dotenv').config();

// === serve static files
app.use(express.static(path.join(__dirname, '../client/public')));

// === middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

let PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
