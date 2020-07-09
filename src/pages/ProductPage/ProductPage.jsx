import React, { useCallback } from 'react'
import {Link, withRouter } from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import { deleteProduct } from '../../utils/fetch';
import { useProduct } from '../../utils/hooks';

const ProductPage = ({ match, history}) => {
  const { id } = match.params;
  const product = useProduct(id);

  const handleDelete = useCallback(async() => {
    try {
      const result = await deleteProduct(id);
      if (result?.data?.message) {
        history.push('/products');
      } else {
        throw Error("Response from server is incorrect");
      }
    } catch (err) {
      console.error(err)
    }
  }, [deleteProduct]);

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            className="media"
            image={product?.picture}
            title={product?.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product?.name} - price: ${product?.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/products/${id}/edit`} className="link">
            <Button size="small" color="primary">
              Edit
            </Button>
          </Link>
          <Button size="small" color="primary" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default withRouter(ProductPage);