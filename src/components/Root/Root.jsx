import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    const location = useLocation();
    const checkHome = location.pathname === "/";
    return (
        <div>
            <NavBar checkHome={checkHome}></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;