import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../Utils/manageCartContext";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const { product_id } = useParams();
  const idInt = parseInt(product_id);
  const productData = useLoaderData();
  const findProducts = productData.find(
    (product) => product.product_id === idInt
  );

  // Using Wishlist Context here
  const { addToWishlist, getWishProduct } = useContext(CartContext);
  // Using Wishlist Context here

  // Checking if the product is already in the wishlist
  const checkingWishlist = getWishProduct.find(
    (product) => product.product_id === findProducts.product_id
  );

  // Handle Add To Wishlist Button Function
  const handleAddToWishlist = () => {
    if (!checkingWishlist) {
      addToWishlist(findProducts);
      navigate("/dashboard/wishlist");
      toast.success("Product successfully added in Wishlist", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("This product is already in the Wishlist!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  // Handle Add To Wishlist Button Function

  // Using Cart Context here
  const { addToCart } = useContext(CartContext);
  // Using Cart Context here

  // Handle Add to cart Button Function
  const handleAddToCart = () => {
    addToCart(findProducts);
    navigate("/dashboard/cart");
    toast.success("Product successfully added in Cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  };
  // Handle Add to cart Button Function

  // Use Navigate to navigate to cart and wishlist by clicking their buttons
  const navigate = useNavigate();

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
  } = findProducts;
  return (
    <div className="mt-8 bg-purpleBg relative mb-96">
      {/* Product Details Header */}
      <div className="pt-8 text-center xl:max-w-[70%] mx-auto pb-52">
        <h1 className="font-bold text-3xl text-white mb-4">Product Details</h1>
        <p className="font-normal text-base text-white">
          This the details of this product. Please take a look and make sure
          that it fullfills all your needs. If not you can go back and look for
          more products as we have a lot. We hopeful that you will be able to
          find the product that you are looking for!
        </p>
      </div>
      {/* Product Details Header */}

      {/* Product Details Card Div */}
      <div className="absolute border bg-white p-8 rounded-3xl top-[45%] left-[21%] w-[60%]">
        {/* Card Wrapping Div */}
        <div className="flex gap-16">
          {/* Image Div */}
          <div className="w-[]">
            <img
              className="h-[500px] w-[400px] object-contain"
              src={product_image}
              alt=""
            />
          </div>
          {/* Image Div */}

          {/* Info Div */}
          <div className="xl:w-[55%]">
            {/* Header and other Info Div */}
            <div>
              <h1 className="text-black text-3xl font-semibold mb-3">
                {product_title}
              </h1>
              <p className="font-semibold text-xl text-grayEightyp mb-4">
                Price: {price}$
              </p>
              {/* Availability Div */}
              <div className="bg-greenTenp rounded-[32px] py-2 px-4 xl:max-w-[18%] text-center mb-4">
                <p
                  className={
                    availability
                      ? "text-green font-medium text-sm"
                      : "text-red-700 font-medium text-sm"
                  }
                >
                  {availability ? "In Stock" : "Out Of Stock"}
                </p>
              </div>
              {/* Availability Div */}
              <p className="font-normal text-lg text-graySixtyp mb-4">
                {description}
              </p>
            </div>
            {/* Header and other Info Div */}

            {/* Specification Div */}
            <div>
              {/* Header Div */}
              <div className="mb-3">
                <p className="text-black font-bold text-lg">Specification:</p>
              </div>
              {/* Header Div */}
              {/* List Div */}
              <div className="ml-8 mb-4">
                <ul>
                  {specification.map((spec, idx) => (
                    <li
                      className="list-decimal font-normal text-lg text-graySixtyp"
                      key={idx}
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              {/* List Div */}
            </div>
            {/* Specification Div */}

            {/* Rating Div */}
            <div>
              {/* Rating Header */}
              <div className="flex items-center gap-2 mb-3">
                {/* header */}
                <div>
                  <p className="font-bold text-lg text-black">Rating</p>
                </div>
                {/* header */}
                {/* Icon */}
                <div>
                  <FaRegStar></FaRegStar>
                </div>
                {/* Icon */}
              </div>
              {/* Rating Header */}

              {/* Rating star and p div */}
              <div className="flex items-center gap-4 mb-4">
                {/* Rating Star */}
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={rating}
                    edit={false}
                    activeColor="#ffd700"
                  ></ReactStars>
                </div>
                {/* Rating Star */}

                {/* Rating in p */}
                <div className="rounded-[32px] p-3 bg-grayFivep">
                  <p>{rating}</p>
                </div>
                {/* Rating in p */}
              </div>
              {/* Rating star and p div */}
            </div>
            {/* Rating Div */}

            {/* Addtocart Button and Wishlist button */}
            <div className="flex gap-4">
              {/* Add To Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 bg-purpleBg rounded-[32px] px-5 py-2 xl:max-w-[32%] hover:cursor-pointer hover:bg-purple-500 transition duration-300 text-white font-bold text-lg"
              >
                {/* Button */}
                Add To Cart
                {/* Button */}
                {/* Icon */}
                <div className="text-2xl text-white">
                  <BsCart3></BsCart3>
                </div>
                {/* Icon */}
              </button>
              {/* Add To Cart Button */}

              {/* Wishlist Button */}
              <button
                onClick={handleAddToWishlist}
                className={
                  checkingWishlist
                    ? "disabled p-3 bg-white text-gray-300 rounded-full hover:bg-gray-400 transition duration-300 text-xl border-2"
                    : "p-3 bg-white rounded-full hover:bg-gray-400 transition duration-300 text-xl border-2"
                }
              >
                <FaRegHeart></FaRegHeart>
              </button>
              {/* Wishlist Button */}
            </div>
            {/* Addtocart Button and Wishlist button */}
          </div>
          {/* Info Div */}
        </div>
        {/* Card Wrapping Div */}
      </div>
      {/* Product Details Card Div */}
    </div>
  );
};

export default ProductDetail;
