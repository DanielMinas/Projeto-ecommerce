import './App.css';
import React, { useState } from 'react';
import  Products from './views/Menu.js'
import Cart from './views/Carrinho.js'

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';



const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    
  }));
  return (
    <div className="App">
    <header>
    <AppBar position="static">
        <Toolbar id="toolbar">
          <Avatar sx={{ m: 1, width: 70, height: 50 }} src="data:image/png;base64,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" variant="rounded" />
          <Typography variant="h6" sx={{ flexGrow: 1 }} id="nome">
            Mercado dos Games
          </Typography>
          <Button color="inherit" onClick={() => navigateTo(PAGE_PRODUCTS)} >Produtos</Button>
          <StyledBadge > 
          <Button color="inherit" onClick={() => navigateTo(PAGE_CART)} ><ShoppingCartOutlinedIcon/>Carrinho </Button>{getCartTotal()}
  </StyledBadge>
     
        </Toolbar>
      </AppBar>
    </header>
    
    {page === PAGE_PRODUCTS && (
      <Products cart={cart} setCart={setCart} />
    )}
    {page === PAGE_CART && (
      <Cart cart={cart} setCart={setCart} />
    )}
  </div>
  );
}

export default App;
