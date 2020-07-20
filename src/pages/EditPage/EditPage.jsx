import React from 'react'
import Typography from '@material-ui/core/Typography';
import ProductForm from '../../components/ProductForm';
import './style.scss';
import { useProduct} from '../../utils/hooks'

const EditPage = ({match}) => {
  const product = useProduct(match.params.id);

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