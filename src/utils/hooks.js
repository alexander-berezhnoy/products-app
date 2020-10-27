import { useState, useEffect, useCallback } from 'react';
import { api } from './api';

export const useProduct = productId => {
    const initialProductState = {
        product: {},
        loading: true
    };
    const [product, setProduct] = useState(initialProductState);

    const fetchProduct = useCallback( async() => {
        try {
            const fetchedProduct = await api.getProduct(productId);
            setProduct(fetchedProduct);
        } catch (err) {
            console.error(err)
        }
    }, []);

    useEffect(() => {
        fetchProduct();
    }, []);

    if (!product) {
        setProduct({
            name: '',
            picture: '',
            description: '',
            price: 0
        })
    }

    return product;
}
