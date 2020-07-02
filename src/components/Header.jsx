import React from 'react'
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    height: 200,
    width: '100%',
    margin: '0 auto',
    padding: '8px 16px'
  },
  title: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center'
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant='h1' className={classes.title}>Products App</Typography>
      <Typography variant='h4' className={classes.subtitle}>Let's make products apps great again</Typography>
    </Container>
  )
}

export default Header