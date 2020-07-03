import axios from 'axios';

export const fetchProducts = async() => {
    const url = 'https://localhost:4000/products';
    try {
        const res = await axios.get(url);
        console.log(res);
        return res.data;
    } catch(err) {
        console.log(err)
    }
}