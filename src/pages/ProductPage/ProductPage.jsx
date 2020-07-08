import React from 'react';
import PropTypes from 'prop-types';
import ProductForm from '../../components/ProductForm';
import { createProduct, updateProduct } from '../../utils/fetch';

const ProductPage = ({isNew, product}) => {
  return (
    <>
      { isNew ? <h1>Create Product</h1> : <h1>Edit Product</h1>}
      <ProductForm handleRequest={() => {}} product={product} />
    </>
  )
}

ProductPage.propTypes = {
  isNew: PropTypes.bool.isRequired,
  product: PropTypes.object
}

export default ProductPage;