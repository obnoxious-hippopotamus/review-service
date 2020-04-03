import Axios from 'axios';

const dbGetMovies = () => {
    return Axios.get(`/api/reviews`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err);
    });
};

export default dbGetMovies;