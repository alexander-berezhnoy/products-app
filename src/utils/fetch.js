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

export const getProduct = async (id) => {
    const url = `/products/${id}`;
    try {
        const res = await fetch.get(url);
        return res.data;
    } catch(err) {
        console.error(err);
    }
}

export const createProduct = async(product) => {
    const url = '/products';
    try {
        return await fetch.post(url, product);
    } catch(err) {
        console.error(err);
    }
}

export const updateProduct = async(id, product) => {
    const url = `/products/${id}`;
    try {
        return await fetch.put(url, product);
    } catch(err) {
        console.error(err);
    }
}

export const deleteProduct = async(id) => {
    const url = `/products/${id}`;
    try {
        return await fetch.delete(url);
    } catch(err) {
        console.error(err);
    }
}