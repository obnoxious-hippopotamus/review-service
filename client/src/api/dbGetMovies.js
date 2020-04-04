import Axios from 'axios';

const dbGetMovies = () => {
    return Axios.get(`/api/reviews/`)
    .then(res => {
        
        let data = res.data;

        const uniqueTitles = Array.from(new Set(data.map(a => a.movie_title)))
            .map(title => {
                return data.find(a => a.movie_title === title)
            });

        return uniqueTitles;
    })
    .catch(err => {
        console.log(err);
    });
};

export default dbGetMovies;