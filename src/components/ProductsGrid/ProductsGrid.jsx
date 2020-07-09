import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import './style.scss';
import ProductCard from '../ProductCard';
import { fetchProducts } from '../../utils/fetch'

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);

    const fetchData = useCallback( async() => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error(err)
      }
    }, [fetchProducts]);

    useEffect(() => {
      fetchData();
    }, []);

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="space-between"
            spacing={6}
            className="container"
        >
            { products && products.map((product, idx) => (
                <Grid item xs={6} sm={4} key={idx} className="item">
                    <ProductCard       
                        className="card"
                        name={product.name} 
                        picture={product.picture} 
                        price={product.price}
                        id={product._id}
                    />
                </Grid>                
                ))
            }
        </Grid>
    )
} 

export default ProductsGrid