import React, { useContext } from "react";
import { CartContext } from "../../utils/cartFunctionality";

export default function ShoppingCart({cart, removeItem}) {
    const {cart, removeItem} = useContext(CartContext)
    const handleRemove = (itemId) => (
        removeItem(itemId)
    );

    function calculateTheTotal() {
        let total = 0;
        cart.forEach((item)=> {
            total += item.discountedPrice || item.Price
        });
        return total;
    }

    return (
        <div>
         <h3>Your items</h3>
            {cart.length > 0 ? (
            <div>
                {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.discountedPrice ? (
                    <p>Price: ${item.discountedPrice}</p>) : (<p>Price: ${item.price}</p>)}
                    <button onClick={() => handleRemove(item.id)}>Remove item</button>
                </div>))}
                    <h3>Total: ${calculateTheTotal()}</h3>
                    <button>Go to checkout page</button>
                </div>) 
                 : (<p>There is nothing in your basket</p>)}
        </div>
    )
};