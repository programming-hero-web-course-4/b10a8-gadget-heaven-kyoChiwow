import { useContext, useState } from "react";
import { CartContext } from "../Utils/manageCartContext";
import { GrSort } from "react-icons/gr";
import CartCards from "../CartCards/CartCards";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CartDashboard = () => {
  const { getProduct, clearCart, setGetProduct } = useContext(CartContext);

  // Calculating the total price of the cart
  const totalPrice = getProduct.reduce(
    (total, product) => total + product.price,
    0
  );
  // Calculating the total price of the cart

  // Creating a state to hold the totalPrice so that the modal shows
  const [showPrice, setShowPrice] = useState(0);  
  // Creating a state to hold the totalPrice so that the modal shows  

  // Sorting the Cart here
  const handlePriceSort = () => {
    const prevArrayCopy = [...getProduct];
    const newSortedArray = prevArrayCopy.sort((a, b) => b.price - a.price);
    setGetProduct(newSortedArray);
  };
  // Sorting the Cart here

  // Clearing the cart and Navigating to home
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  }
  const handleClearingCart = () => {
    setShowPrice(totalPrice);
    document.getElementById("purchaseModal").showModal()
    clearCart();
  };
  // Clearing the cart and Navigating to home

  return (
    <div className="xl:max-w-[80%] mx-auto mt-12 mb-8">
      <Helmet>
        <title>Cart | Gadget Heaven</title>
      </Helmet>
      {/* Header and other info Div */}
      <div className="flex justify-between items-center">
        {/* Cart Header Div */}
        <div>
          <h1 className="text-black font-bold text-2xl">Cart</h1>
        </div>
        {/* Cart right side div */}
        <div className="flex items-center gap-4">
          {/* Total Cost Div */}
          <div>
            <p className="text-black font-bold text-2xl">
              Total Cost: {totalPrice}$
            </p>
          </div>
          {/* Total Cost Div */}

          {/* Cart Info Div */}

          {/* Sort by price button */}
          <div className="border-2 border-purpleBg rounded-[32px] py-3 px-6 flex items-center gap-2 text-purpleBg hover:bg-purple-300 transition duration-300">
            <button
              onClick={handlePriceSort}
              className="font-semibold text-lg text-purpleBg"
            >
              Sort By Price
            </button>
            <GrSort></GrSort>
          </div>
          {/* Sort by price button */}

          {/* Purchase Button */}
          <div className={getProduct.length < 1 ? "border-2 border-grayEightyp rounded-[32px] py-3 px-6 hover:bg-purple-900 transition duration-300" : "bg-purpleBg rounded-[32px] py-3 px-6 hover:bg-purple-900 transition duration-300"}>
            <button
              onClick={() => {
                if (getProduct.length > 0) {
                    handleClearingCart();
                }
              }}
              className={
                getProduct.length < 1
                  ? "disabled font-medium text-lg text-grayEightyp"
                  : "font-medium text-lg text-white"
              }
            >
              Purchase
            </button>
            <dialog
              id="purchaseModal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box flex flex-col justify-center items-center text-center">
                <h3 className="font-bold text-lg mb-8">Congratulations!</h3>
                <img
                  className="w-[70px] h-[67px]"
                  src="/assets/Group.png"
                  alt=""
                />
                <p className="py-4">
                  You have bought your desired goods. It was a pleasure to have
                  served you. Please visit us again for more amazing gadgets!
                </p>
                <p>Total Cost: {showPrice}$</p>
                <p className="font-bold text-lg mt-4">Payment Successfull!</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={handleNavigate} className="btn">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* Purchase Button */}
        </div>
        {/* Cart right side div */}
      </div>
      {/* Header and other info Div */}

      {getProduct.map((product, idx) => (
        <CartCards key={idx} product={product}></CartCards>
      ))}
    </div>
  );
};

export default CartDashboard;
