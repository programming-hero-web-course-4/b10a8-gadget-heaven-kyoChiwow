import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    const location = useLocation();
    // Checking Home Location
    const checkHome = location.pathname === "/";
    // Checking Home Location

    // Checking Dashboard Location
    // Checking Dashboard Location
    return (
        <div className="pt-7">
            <NavBar checkHome={checkHome}></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;