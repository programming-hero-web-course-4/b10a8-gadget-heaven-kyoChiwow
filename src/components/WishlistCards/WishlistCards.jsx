import PropTypes from "prop-types";
import { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CartContext } from "../Utils/manageCartContext";

const WishlistCards = ({ product }) => {
  const {deleteFromWishlist} = useContext(CartContext)
  const { product_image, product_title, description, price, product_id } =
    product;
  return (
    <div>
      {/* Cards Wrapping Div */}
      <div>
        {/* Card Div */}
        <div className="flex gap-8 p-8 mt-8 bg-white rounded-2xl">
          {/* Image Div */}
          <div>
            <img className="w-[200px] h-[124px]" src={product_image} alt="" />
          </div>
          {/* Image Div */}

          {/* Info Div */}
          <div className="flex flex-col flex-grow">
            <h1 className="text-black font-semibold text-2xl mb-3">
              {product_title}
            </h1>
            <p className="text-graySixtyp text-lg font-normal mb-4">
              {description}
            </p>
            <p className="text-grayEightyp font-semibold text-xl">
              Price: {price}$
            </p>
            <button className="bg-purpleBg rounded-[32px] px-6 py-3 text-white font-medium text-lg mt-4 xl:max-w-[14%] hover:bg-purple-500 transition duration-300">Add To Cart</button>
          </div>
          {/* Info Div */}

          {/* Delete Icon Div */}
          <button
            onClick={() => deleteFromWishlist(product_id)}
            className="text-red-600 text-4xl"
          >
            <MdOutlineCancel></MdOutlineCancel>
          </button>
          {/* Delete Icon Div */}
        </div>
        {/* Card Div */}
      </div>
      {/* Cards Wrapping Div */}
    </div>
  );
};

WishlistCards.propTypes = {
  product: PropTypes.object.isRequired,
};
export default WishlistCards;
