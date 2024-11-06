import { Helmet } from "react-helmet-async";
import AllProducts from "../AllProducts/AllProducts";

const HomePage = () => {
    return (
        <div className="xl:max-w-[80%] lg:max-w-[90%] max-w-[95%] mx-auto">
            <Helmet>
                <title>Home | Gadget Heaven</title>
                <link rel="icon" href="/assets/favicon-16x16.png" />
            </Helmet>
            <AllProducts></AllProducts>
        </div>
    );
};

export default HomePage;