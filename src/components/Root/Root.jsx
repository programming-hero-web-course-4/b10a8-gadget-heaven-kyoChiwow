import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { CartProvider } from "../Utils/manageCartContext";

const Root = () => {
  const location = useLocation();
  // Checking Home Location
  const checkHome = location.pathname === "/";
  // Checking Home Location

  // Checking Dashboard Location
  // Checking Dashboard Location
  return (
    <div className="pt-7">
      <div className="min-h-screen flex flex-col">
        <NavBar checkHome={checkHome}></NavBar>
        <div className="flex-grow">
          <CartProvider>
          <Outlet></Outlet>
          </CartProvider>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
