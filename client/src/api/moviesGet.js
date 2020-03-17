const moviesGet = id => {
    return fetch(`/api/movies/${id}`, {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export default moviesGet;

