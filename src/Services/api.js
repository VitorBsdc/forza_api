import axios from 'axios';

const api = axios.create({
    baseURL:'https://forza-api.tk'
})

export default api;