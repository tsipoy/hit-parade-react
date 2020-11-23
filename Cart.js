import React, { useContext } from 'react';
import {Context} from "./Context";
import CartItems from "./CartItems";

function Cart() {
    const {carts, addToCarts, emptyCart} = useContext(Context);
    const cartElement = carts.map(song => (
        <CartItems key={song.id} song={song} />
    ))

    const total = carts.reduce((acc, currentValue ) => acc + currentValue.price, 0);
    const cartEmpty = () => {
        emptyCart();
    }
    return(
        <div>
            {addToCarts && 
                <div>{cartElement}</div>
            }
            <div className="buy">
                {carts.length === 0 ? "Empty cart" : 
                    <button onClick={cartEmpty} className="buyButton" >Buy</button>
                }
                <p>Total: {total} Ar</p>
            </div>
        </div>
    )
}
export default Cart