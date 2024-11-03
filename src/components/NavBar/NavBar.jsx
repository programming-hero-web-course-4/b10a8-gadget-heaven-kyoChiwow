import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
const NavBar = ({ checkHome }) => {
  const links = (
    <>
      <li className="hover:bg-purple-500 transition duration-300 p-2 rounded-3xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold text-base underline"
              : "font-medium no-underline text-base text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:bg-purple-500 transition duration-300 p-2 rounded-3xl">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold text-base underline"
              : "font-medium no-underline text-base text-white"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="hover:bg-purple-500 transition duration-300 p-2 rounded-3xl">
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold text-base underline"
              : "font-medium no-underline text-base text-white"
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    //  Section: Navbar Here
    <div className="bg-purpleBg lg:max-w-[95%] mx-auto rounded-[32px] mt-7">
      {/* Navbar header info and icons */}
      <div className="flex justify-between items-center px-32 pt-6">
        {/* Navbar Header */}
        <div className="">
          <h1 className="text-white font-bold text-xl">Gadget Heaven</h1>
        </div>
        {/* Navbar Header */}

        {/* Navbar Menus */}
        <div className="">
          <ul className="flex gap-12">{links}</ul>
        </div>
        {/* Navbar Menus */}

        {/* Navbar Cart and Wishlist icons */}
        <div className="flex items-center gap-4">
          {/* cart */}
          <button className="p-3 bg-white rounded-full hover:bg-gray-400 transition duration-300 text-xl">
            <BsCart3></BsCart3>
          </button>
          {/* cart */}

          {/* Wishlist */}
          <button className="p-3 bg-white rounded-full hover:bg-gray-400 transition duration-300 text-xl">
            <FaRegHeart></FaRegHeart>
          </button>
          {/* Wishlist */}
        </div>
        {/* Navbar Cart and Wishlist icons */}
      </div>
      {/* Navbar header info and icons */}

      {/* NavBar Banner here */}
      {checkHome && (
        <div className="text-center max-w-[85%] mx-auto">
          <h1 className="font-bold mt-12 text-white text-5xl leading-[72px]">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base font-normal text-white mt-6 mb-8 leading-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="bg-white px-8 py-4 rounded-full hover:bg-gray-300 transition duration-300 font-bold text-xl text-purpleBg">
            Shop Now
          </button>
        </div>
      )}
      {/* NavBar Banner here */}
    </div>
    //  Section: Navbar Here
  );
};

NavBar.propTypes = {
  checkHome: PropTypes.bool.isRequired,
};
export default NavBar;
