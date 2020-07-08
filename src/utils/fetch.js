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

// export const createProduct = async(product) => {
//     const url = '/products';
//     try {
//         const res = await fetch.post(url, product);
//
//     } catch(err) {
//         console.error(err);
//     }
// }
//
// export const updateProduct = async(product) => {
//     const url = '/products/:id';
//     try {
//         const res = await fetch.put(url, product);
//         return res.data;
//     } catch(err) {
//         console.error(err);
//     }
// }