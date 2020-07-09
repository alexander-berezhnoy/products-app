import React, { useState, useEffect, useCallback } from 'react'
import { getProduct, updateProduct } from '../../utils/fetch'
import Typography from '@material-ui/core/Typography';
import ProductForm from '../../components/ProductForm';
import './style.scss';

const EditPage = ({match}) => {
  const initialProductState = {
    product: {},
    loading: true
  };
  const [product, setProduct] = useState(initialProductState);

  const fetchProduct = useCallback( async() => {
    try {
      const fetchedProduct = await getProduct(match.params.id);
      setProduct(fetchedProduct);
    } catch (err) {
      console.error(err)
    }
  }, [getProduct]);

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <div className="container">
      <Typography variant='h1' className="title">Edit Product</Typography>
      {
        product.loading
          ? <div>Loading...</div>
        : <ProductForm product={product} action="update" />
      }
    </div>
  )
}

export default EditPage;