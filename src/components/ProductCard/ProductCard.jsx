import React from 'react'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './style.scss';

const ProductCard = ({ name, picture, price, id }) => (
  <Card>
      <CardActionArea>
          <CardMedia
          className="media"
          image={picture}
          title={name}
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            ${price}
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${id}/edit`}>
          <Button size="small" color="primary">
            Edit
          </Button>
        </Link>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
  </Card>
);

export default ProductCard