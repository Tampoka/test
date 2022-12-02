import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY!,
    }
})
