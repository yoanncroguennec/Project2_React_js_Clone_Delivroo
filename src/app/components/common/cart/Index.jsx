// COMMONS
import { CartMobile, CartDesktop } from "..";

export default function Cart({ matches, cart, setCart, handleAddToCart }) {
    return (
        <>
            {matches 
                ?   <CartMobile
                        matches={matches}
                        cart={cart}
                        setCart={setCart}
                        handleAddToCart={handleAddToCart}
                    />
                :   <CartDesktop
                        matches={matches}
                        cart={cart}
                        setCart={setCart}
                        handleAddToCart={handleAddToCart}
                    />
            }
        </>
    );
}