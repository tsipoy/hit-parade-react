import React, { useContext } from 'react';
import {Context} from "./Context";
import CartItems from "./CartItems";

function Cart({price}) {
    const {carts, addToCarts} = useContext(Context);
    const cartElement = carts.map(song => (
        <CartItems key={song.id} song={song} />
    ))

    const total = carts.reduce((acc, currentValue ) => acc + currentValue.price, 0);
    return(
        <div>
            {addToCarts && 
                <div>{cartElement}</div>
            }
            <div>
                <button>Buy</button>
                <p>Total: {total} Ar</p>
            </div>
        </div>
    )
}
export default Cart