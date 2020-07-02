import React from 'react';
import './App.css';

import Header from './components/Header'
import ProductsGrid from './components/ProductsGrid'
import { productsData } from './productsData'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <ProductsGrid products={productsData} />
    </React.Fragment>    
  );
}

export default App;
