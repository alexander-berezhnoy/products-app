import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

const ProductCard = ({ name, picture, price }) => (
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
  </Card>
);

export default ProductCard