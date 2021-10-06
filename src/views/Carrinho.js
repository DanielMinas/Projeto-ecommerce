import * as React from 'react';
import './Carrinho.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


function  Carrinho({ setCart, cart }){
   
    const getTotalSum = () => {
        return cart.reduce(
          (sum, { price, quantity }) => sum + price * quantity,
          0
        );
      };
    
    
      const setQuantity = (card, amount) => {
        const newCart = [...cart];
        newCart.find(
          (item) => item.name === card.name
        ).quantity = amount;
        setCart(newCart);
      };
    
      const removeCart = (productToRemove) => {
        setCart(
          cart.filter((product) => product !== productToRemove)
        );
      };

      
    return(
        
  
        <Container sx={{ py: 3 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={5} sx={{ py: 2 }}>
            {cart.map((card, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}
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
                    <Typography gutterBottom variant="h6" component="h5" 
                         value={card.quantity}
                         onChange={(e) =>
                           setQuantity(
                             card,
                             parseInt(e.target.value)
                           )}
                    >
                     Quantidade:{card.quantity} 
                    </Typography>

              
                    <Typography>
                      R${card.price}
                    </Typography>
                  </CardContent>
                  <Box>
                    <CardActions sx={{ flexGrow: 1}}>
                      <Button variant="outlined" size="small"  sx={{ borderRadius:2}} onClick={() => removeCart(card)} id="buttonRemote">Remove</Button>
                    </CardActions>
            
                  </Box>
                </Card>
                
              </Grid>
              
            ))}
            
             
          </Grid>
          <Box id="cardTotal">
          <Card  sx={{ maxWidth: 150 }}>
                  <CardContent>
                   
                  Total: R${getTotalSum()}
                  </CardContent>
                  
                </Card>
                </Box>
        </Container>

        
    );
}
export default Carrinho;