import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, 
    CardActionArea,
    CardContent, 
    CardMedia, 
    Typography 
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {        
      },
      media: {
        height: '140px',
        width: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      },
  });

const ProductCard = ({ name, picture, price }) => {
    const classes = useStyles();
    const priceLine = `$${price}`
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={picture}
                title={name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                    {priceLine}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard