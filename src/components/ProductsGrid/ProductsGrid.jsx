import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Grid 
} from '@material-ui/core';
import ProductCard from '../ProductCard'

const useStyles = makeStyles({
    container: {
        width: '100%',
        margin: '32px 0',
        flexGrow: 1,
      },
    item: {
        height: '200px',
        margin: '16px 0'
    },
    card: {
        width: '100%',
    }
  });

const ProductsGrid = ({products}) => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify='flex-start'
            alignItems="'space-between'"
            xs={12}
            spacing={6}
            className={classes.container}
        >
            { products.map((product, idx) => (
                <Grid item xs={6} sm={4} key={idx} className={classes.item}>
                    <ProductCard       
                        className={classes.card}                   
                        name={product.name} 
                        picture={product.picture} 
                        price={product.price}
                    />
                </Grid>                
                ))
            }
        </Grid>
    )
} 

export default ProductsGrid