import './Menu.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import lista from '../assets/products.json'


function Menu({ setCart, cart }) {

  const theme = createTheme();
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  return (
    <ThemeProvider theme={theme}>
      
      <main>
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={5}>
           {lista.map((card, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  id="card"
                >
                  <CardMedia
                    component="img"
                    image={require(`../assets/images/${card.image}`).default}
                    alt={card.name}
                    sx={{ m: 2,width: 230,  height:230}}
                  />
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      R${card.price}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', pl: 5, pb: 1 }}>
                    <CardActions>
                      <Button variant="outlined" size="small"  sx={{ borderRadius:2}} onClick={() => addToCart(card)} >Adicionar Carrinho </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );

}
export default Menu;