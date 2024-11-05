import { useContext } from "react";
import { CartContext } from "../Utils/manageCartContext";
import WishlistCards from "../WishlistCards/WishlistCards";

const WishlistDashboard = () => {
    const {getWishProduct} = useContext(CartContext)
    return (
        <div className="xl:max-w-[80%] mx-auto mt-12 mb-8">
            <h1 className="mb-8 text-2xl font-bold text-black">WishList</h1>
            {
                getWishProduct.map((product, idx) => <WishlistCards key={idx} product={product}></WishlistCards>)
            }
        </div>
    );
};

export default WishlistDashboard;