import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '0ea34a3de593e60c526c211cd2f3c655',
        language: 'es-ES'
    }
});

export default movieDB;