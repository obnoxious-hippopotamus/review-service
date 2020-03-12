let dbConnection = require('./dbConfig.js').connection;

//seed the database
module.exports.getSeedData = (movie_id, author, content, img_url, rating) => {
    
    // ==== INSERT EACH REVIEW INTO DB
    return new Promise((resolve, reject) => {

        let query = `INSERT INTO reviews (movie_id, author, content, image_url, rating)
            VALUES(${movie_id}, "${author}", "${content}", "${img_url}", ${rating})`;
    
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
    let query = 'SELECT * FROM reviews';

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
    console.log('made it to get data by id', id);
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