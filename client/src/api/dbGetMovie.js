import Axios from 'axios';

const dbGetMovie = id => {
    return Axios.get(`/api/reviews/${id}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err);
    });
};

export default dbGetMovie;