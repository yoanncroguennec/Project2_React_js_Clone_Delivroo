import React from 'react'
import { Typography, Button } from '@mui/material';
// STYLES
import {
  ActionIconsContainerDesktop,
  BoxBtnsQtyPrice,
  BoxBtnsQty,
  BtnsQty,
} from "./StylesCartDesktop";

export default function CartDesktop({ cart, setCart, handleAddToCart }) {

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

    return (
        <ActionIconsContainerDesktop>
            {cart.length === 0 ? (
              <Typography variant='h5'>Votre panier est vide</Typography>
            ) : (
              <div style={{ height: "450px", overflow: "scroll" }}>
                <Typography variant='h6' sx={{ marginBottom: "15px"}}>Votre panier contient :</Typography>
                {cart.map((meal) => {
                  total += meal.price * meal.quantity;
                  return (
                    <div key={meal.id} style={{ width: "250px" }}>
                      <Typography variant='h7'>{meal.title}</Typography>
                      <BoxBtnsQtyPrice>
                        <BoxBtnsQty>
                          <BtnsQty
                            variant='contained'
                            onClick={() => {
                              handleRemoveFromCart(meal);
                            }}
                          >
                            <Typography variant='h4'>-</Typography>
                          </BtnsQty>
                          <Typography variant='h5'>{meal.quantity}</Typography>
                          <BtnsQty
                            variant='contained'
                            onClick={() => {
                              handleAddToCart(meal);
                            }}
                          >
                            +
                          </BtnsQty>
                          <Button
                            onClick={() => {
                              handleRemoveFromCart(meal);
                            }}
                          >
                            -
                          </Button>
                          <Typography variant='h7'>{meal.quantity}</Typography>
                          <Button
                            className='btnCard'
                            onClick={() => {
                              handleAddToCart(meal);
                            }}
                          >
                            +
                          </Button>
                        </BoxBtnsQty>
                        <Typography>
                          {(meal.price * meal.quantity).toFixed(2)} €
                        </Typography>
                      </BoxBtnsQtyPrice>
                      <hr />
                    </div>
                  );
                })}
                <Typography variant='h6'>Total : {total.toFixed(2)} €</Typography>
                <button onClick={() => {handleEmptyBasket()}}>Vider Panier</button>
                <button>Payez</button>
              </div>
            )}
        </ActionIconsContainerDesktop>
    )
}
