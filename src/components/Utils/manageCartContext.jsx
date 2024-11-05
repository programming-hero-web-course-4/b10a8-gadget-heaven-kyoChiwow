import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Creating Context for managing products
const CartContext = createContext();

// Creating the context provider here
const CartProvider = ({children}) => {
    // Creating state to keep the products
    const [getProduct, setGetProduct] = useState([]);

    // Also need a function to add new products in the cart along with previous products
    const addToCart = (product) => {
        setGetProduct((pastProducts) => [...pastProducts, product]);
    }

    return (
        <CartContext.Provider value={{addToCart, getProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}