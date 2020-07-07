import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './styles.scss'

const Header = () =>  (
    <Container className="container">
      <Typography variant='h1' className="title">Products App</Typography>
      <Typography variant='h4' className="subtitle">Let's make products apps great again</Typography>
    </Container>
)

export default Header