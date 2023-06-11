import React, {useState, createContext} from "react";

export const CartContext = React.createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = useState([])

    function addToCart(item) {
        setCart((prevCart) => [...prevCart,item])
    }

    function removeItem(itemId) {
        setCart((prevCart) => prevCart.filter((item) => item.id !==itemId))
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
