import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Creating Context for managing products
const CartContext = createContext();

// Creating the context provider here
const CartProvider = ({children}) => {
    // Creating state to keep the products
    const [getProduct, setGetProduct] = useState([]);

    // Creating state to keep the Wishlist Products
    const [getWishProduct, setGetWishProduct] = useState([]);

    // Adding products to Wishlist here
    const addToWishlist = (product) => {
        const addingWishlist = [...getWishProduct, product]
        setGetWishProduct(addingWishlist)
    }

    // Deleteing From the Wishlist Products
    const deleteFromWishlist = (id) => {
        const filterWish = getWishProduct.filter(product => product.product_id !== id)
        setGetWishProduct(filterWish);
    }

    // Also need a function to add new products in the cart along with previous products
    const addToCart = (product) => {
        const addingProduct = [...getProduct, product]
        setGetProduct(addingProduct);
    }

    // Deleting the deleted products
    const deleteFromCart = (id) => {
        const filterArray = getProduct.filter((product) => product.product_id !== id)
        setGetProduct(filterArray);
    }

    // Clearing Cart After Purchase
    const clearCart = () => {
        setGetProduct([]);
    }

    return (
        <CartContext.Provider value={{addToCart, getProduct, setGetProduct, deleteFromCart, clearCart, addToWishlist, getWishProduct, deleteFromWishlist}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}