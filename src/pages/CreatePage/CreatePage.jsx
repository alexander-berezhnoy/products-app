import React from 'react';
import Typography from '@material-ui/core/Typography';
import ProductForm from '../../components/ProductForm';
import './style.scss';

const createProduct = () => {
  alert("Product was created");
};

const CreatePage = () => {
  return (
    <div className="container">
      <Typography variant='h1' className="title">Create Product</Typography>
      <ProductForm handleRequest={createProduct} />
    </div>
  )
}

export default CreatePage;