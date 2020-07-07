import axios from 'axios';

const fetch = axios.create({
    baseURL: 'http://localhost:4000/api'
});

export const fetchProducts = async() => {
    const url = '/products';
    try {
        const res = await fetch.get(url);
        return res.data;
    } catch(err) {
        console.error(err);
    }
}