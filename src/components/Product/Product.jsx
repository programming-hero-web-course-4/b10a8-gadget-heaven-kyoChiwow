import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  return (
    <div>
      {/* Card Wrapping Div */}
      <div className="bg-white p-5 rounded-2xl">
        {/* Image Div */}
        <div className="w-full mb-6">
          <img
            className="h-[200px] w-full object-contain object-center rounded-2xl"
            src={product_image}
            alt=""
          />
        </div>
        {/* Image Div */}
        {/* Name and Price Div */}
        <div>
          <h1 className="text-black font-semibold text-2xl mb-3">
            {product_title}
          </h1>
          <p className="font-medium text-xl text-graySixtyp mb-8">
            Price: {price}$
          </p>
        </div>
        {/* Name and Price Div */}
        {/* Details Button */}
        <div className="mb-5">
          <Link
            to={`/allproducts/${product_id}`}
            className="border-2 border-purpleBg rounded-[32px] mb-5 py-3 px-5 xl:max-w-[45%] hover:bg-purple-200 transition duration-300"
          >
            <span className="font-semibold text-lg text-purpleBg">
              View Details
            </span>
          </Link>
        </div>
        {/* Details Button */}
      </div>
      {/* Card Wrapping Div */}
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
export default Product;
