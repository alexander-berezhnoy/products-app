import React from 'react';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import ProductsGrid from '../../components/ProductsGrid';
import './style.scss';

const MainPage = () => (
  <Container maxWidth="lg" className="flex">
    <Header />
    <Link to="/create" className="btn-create">
      <Button variant="contained" color="primary" size="large">
        Create New Product
      </Button>
    </Link>
    <ProductsGrid />
  </Container>
)

export default  MainPage;
