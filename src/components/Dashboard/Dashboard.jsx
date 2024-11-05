import CartDashboard from "../CartDashboard/CartDashboard";
import WishlistDashboard from "../WishlistDashboard/WishlistDashboard";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const activeCart = location.pathname === "/dashboard/cart"
  const activeWishlist = location.pathname === "/dashboard/wishlist"
  return (
    <div>
      <div className="bg-purpleBg mt-6 text-center">
        {/* Dashboard Header Div */}
        <div className="pt-8 lg:max-w-[60%] mx-auto">
          <h1 className="text-white font-bold text-4xl mb-4">Dashboard</h1>
          <p className="text-base font-normal text-white mb-8">
            Gadget Heaven, is where you come to buy the latest technology. We
            provide you with the best. Please go to cart for purchasing the
            goods you have already added or go to wishlist to see what you have
            added in the past!
          </p>
        </div>
        {/* Dashboard Header Div */}
        {/* Buttons Div */}
        <div className="flex gap-6 justify-center pb-8">
          <Link to="/dashboard/cart">
          <button className={activeCart ? "bg-white text-purpleBg font-extrabold text-lg py-3 px-16 rounded-[32px] hover:bg-purple-200 transition duration-300" : "text-white font-medium text-lg border-2 border-white rounded-[32px] py-3 px-16 hover:bg-purple-200 transition duration-300"}>Cart</button>
          </Link>
          <Link to="/dashboard/wishlist">
          <button className={activeWishlist ? "bg-white text-purpleBg font-extrabold text-lg py-3 px-16 rounded-[32px] hover:bg-purple-200 transition duration-300" : "text-white font-medium text-lg border-2 border-white rounded-[32px] py-3 px-16 hover:bg-purple-200 transition duration-300"}>Wishlist</button>
          </Link>
        </div>
        {/* Buttons Div */}
      </div>
      {activeCart && (<CartDashboard></CartDashboard>)}
      {activeWishlist && (<WishlistDashboard></WishlistDashboard>)}
    </div>
  );
};

export default Dashboard;
