import { Divider, ListItemButton, ListItemIcon, Box, Modal, Fade, Typography, Button, CardContent } from "@mui/material";
// STYLES
import { ActionIconsContainerMobile, MyList } from "./StylesCart";
// ICONS
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';



const style = {
    bgcolor: 'white',
    border: '2px solid #000',
    borderRadius: "20px",      
    boxShadow: 24,
    left: '50%',
    padding: 4,
    overflowY: "scroll",
    height: "200px",
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
};

export default function CartMobile({ matches, cart, setCart, handleAddToCart  }) {
  
  let total = 0;

  function handleRemoveFromCart(meal) {
    // console.log(meal);
    const cartCopy = [...cart];
    const mealInCart = cartCopy.find((elem) => elem.id === meal.id);

    // If its quantity key is 1, I remove it from the basket
    if (mealInCart.quantity === 1) {
      const index = cartCopy.indexOf(mealInCart);
      // console.log(index);
      cartCopy.splice(index, 1);
    } else {
      // Otherwise, I decrement its quantity key
      mealInCart.quantity--;
    }

    setCart(cartCopy);
  }

  function handleEmptyBasket() {
    setCart([])
  }

  // MODAL
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ActionIconsContainerMobile>
      {cart.length === 0
          ? ( <>
            <Typography variant='h5'><BsCart4 color="#000" size={30} /> Votre panier est vide</Typography> 
            </>)
          : ( <>
                <MyList type="row">
                  <ListItemButton
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        // color: matches && Colors.secondary,
                      }}
                    >
                      <BsCart4 color="#000" size={30} />                      
                    </ListItemIcon>
                  </ListItemButton>

                  <Divider orientation="vertical" flexItem />

                  <Button className="btnCard" color="inherit" onClick={handleOpen}>Voir mon panier</Button>
                  <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                  >
                      <Fade in={open}>
                          <Box sx={style}>
                            <AiOutlineClose onClick={handleClose} />
                            <CardContent>
                              {cart.map((meal) => {
                                total += meal.price * meal.quantity;
                                return (
                                  <div key={meal.id} style={{ width: "250px"}}>
                                    <Typography>Votre panier contient :</Typography>
                                    <Typography variant='h7'>{meal.title}</Typography>
                                    <div style={{ alignItems: "center", display: "flex", flexWrap: "nowrap", justifyContent: "space-between"}}>
                                      <div style={{ alignItems: "center", display: "flex", flexWrap: "nowrap"}}>
                                        <button onClick={() => {handleRemoveFromCart(meal)}}>-</button>
                                        <Typography variant='h7'>{meal.quantity}</Typography>
                                        <button onClick={() => {handleAddToCart(meal)}}>+</button>
                                      </div>
                                      <Typography>{(meal.price * meal.quantity).toFixed(2)} €</Typography>
                                    </div>
                                    <hr/>
                                  </div>
                                );
                              })}
                            </CardContent>
                          </Box>
                      </Fade>
                  </Modal>
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        // color: matches && Colors.secondary,
                      }}
                    >
                      <Typography variant={matches ? "h7" : "h6"} sx={{ color: "#FFF" }}>Total : {total.toFixed(2)} €</Typography>
                      <Button className="btnCard" color="inherit" onClick={() => {handleEmptyBasket()}}>Vider Panier</Button>
                      <Button className="btnCard" color="inherit">Payez</Button>
                    </ListItemIcon>
                  </ListItemButton>
                </MyList>
              </>)
      }
    </ActionIconsContainerMobile>
  );
}
