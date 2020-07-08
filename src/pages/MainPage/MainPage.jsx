import React from 'react';

import Header from '../../components/Header';
import ProductForm from '../../components/ProductForm';
import ProductsGrid from '../../components/ProductsGrid';

const MainPage = () => (
  <React.Fragment>
    <Header />
    <ProductForm handleRequest={() => {}} />
    <ProductsGrid />
  </React.Fragment>
)

export default  MainPage;
