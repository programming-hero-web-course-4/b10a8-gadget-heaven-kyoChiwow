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
          className={({ isActive }) => {
            if (isActive && checkHome) {
              return "text-white font-bold text-base underline";
            } else if (!isActive && checkHome) {
              return "font-medium no-underline text-base text-white";
            } else if (isActive && !checkHome) {
              return "text-purpleBg text-xl font-bold";
            } else if (!isActive && !checkHome) {
              return "text-graySixtyp font-medium text-base";
            }
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="hover:bg-purple-500 transition duration-300 p-2 rounded-3xl">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => {
            if (isActive && checkHome) {
              return "text-white font-bold text-base underline";
            } else if (!isActive && checkHome) {
              return "font-medium no-underline text-base text-white";
            } else if (isActive && !checkHome) {
              return "text-purpleBg text-xl font-bold";
            } else if (!isActive && !checkHome) {
              return "text-graySixtyp font-medium text-base";
            }
          }}
        >
          Dashboard
        </NavLink>
      </li>
      <li className="hover:bg-purple-500 transition duration-300 p-2 rounded-3xl">
        <NavLink
          to="/statistics"
          className={({ isActive }) => {
            if (isActive && checkHome) {
              return "text-white font-bold text-base underline";
            } else if (!isActive && checkHome) {
              return "font-medium no-underline text-base text-white";
            } else if (isActive && !checkHome) {
              return "text-purpleBg text-xl font-bold";
            } else if (!isActive && !checkHome) {
              return "text-graySixtyp font-medium text-base";
            }
          }}
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    //  Section: Navbar Here
    <div
      className={
        checkHome
          ? "bg-purpleBg rounded-[32px] w-[95%] lg:w-[95%] mx-auto relative"
          : "lg:w-[95%] w-[95%] mx-auto relative"
      }
    >
      {/* Navbar header info and icons */}
      <div className="flex justify-between items-center px-4 lg:px-8 xl:px-32 pt-6">
        {/* Navbar Header */}
        <div className="">
          <h1
            className={
              checkHome
                ? "text-white font-bold text-xl"
                : "text-black font-bold text-xl"
            }
          >
            Gadget Heaven
          </h1>
        </div>
        {/* Navbar Header */}

        {/* Navbar Menus */}

          {/* Desktop Menus */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-12">{links}</ul>
          </div>
          {/* Desktop Menus */}

        {/* Navbar Menus */}

        {/* Navbar Cart and Wishlist icons */}
        <div className="flex items-center gap-4">
          {/* cart */}
          <button className="p-3 bg-white rounded-full hover:bg-gray-400 transition duration-300 text-xl border-2">
            <BsCart3></BsCart3>
          </button>
          {/* cart */}

          {/* Wishlist */}
          <button className="p-3 bg-white rounded-full hover:bg-gray-400 transition duration-300 text-xl border-2">
            <FaRegHeart></FaRegHeart>
          </button>
          {/* Wishlist */}
        </div>
        {/* Navbar Cart and Wishlist icons */}
      </div>
      {/* Navbar header info and icons */}

      {/* NavBar Banner here */}
      {checkHome && (
        <div className="text-center max-w-[85%] mx-auto pb-6 lg:pb-64">
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

      {/* Nav banner Image */}
      {checkHome && (
        <div className="hidden lg:block absolute lg:w-[70%] left-[15%] top-[65%] p-6 backdrop:blur-md bg-whiteThirtyp rounded-[32px] border-2 border-white">
          <div>
            <img
              className="xl:max-h-[620px] w-full rounded-3xl object-cover"
              src="/assets/banner.jpg"
              alt=""
            />
          </div>
        </div>
      )}
      {/* Nav banner Image */}
    </div>
    //  Section: Navbar Here
  );
};

NavBar.propTypes = {
  checkHome: PropTypes.bool.isRequired,
};
export default NavBar;
