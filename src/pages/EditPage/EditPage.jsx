import React from 'react';
import Typography from '@material-ui/core/Typography';
import ProductForm from '../../components/ProductForm';
import './style.scss';

const updateProduct = () => {
  alert("Product was updated");
};

const EditPage = () => {
  return (
    <div className="container">
      <Typography variant='h1' className="title">Edit Product</Typography>
      <ProductForm handleRequest={updateProduct} />
    </div>
  )
}

export default EditPage;