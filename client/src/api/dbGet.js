import Axios from 'axios';

const dbGet = id => {
    return Axios.get(`/api/reviews/${id}`)
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err);
    });
};

export default dbGet;