import { useContext } from "react";
import { CartContext } from "../Utils/manageCartContext";

const CartDashboard = () => {
    const { getProduct } = useContext(CartContext);
    const {product_image, product_title, description, price} = getProduct;
    return (
        <div>
            <h1>Cart here</h1>         
        </div>
    );
};

export default CartDashboard;