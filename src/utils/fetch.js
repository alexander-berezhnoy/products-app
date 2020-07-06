import axios from 'axios';

export const fetchProducts = async() => {
    const url = 'http://localhost:4000/products';
    try {
        const res = await axios(url);
        return res.data;
    } catch(err) {
        console.log(err)
    }
}