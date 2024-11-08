import { useEffect, useState } from "react";
import Product from "../Product/Product";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [getCategory, setGetCategory] = useState("All Products");

    // Function for Handing Category
    const handleCategory = (category) => {
        setGetCategory(category);
    }

    // Checking the Category here
    const checkingCategory = getCategory === "All Products";
    const displayCategory = checkingCategory ? allProducts : allProducts.filter(product => product.category === getCategory)

    // Creating Array for the Category
    const newArrayCategory = ["All Products"];
    allProducts.forEach(product => {
        if(!newArrayCategory.includes(product.category)) {
            newArrayCategory.push(product.category);
        }
    })

    useEffect(() => {
        fetch('gadgetsData.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    })
    return (
        <div className="xl:mt-[490px] lg:mt-[350px] mt-20 mb-24">
            <h1 className="text-black font-bold text-4xl text-center mb-12">Explore Cutting-Edge Gadgets</h1>
            {/* All products Wrapping Div */}
            <div className="flex lg:flex-row flex-col items-center lg:items-start gap-8">
                {/* All Categories Div */}
                <div className="bg-white w-[70%] xl:w-[20%] lg:w-[30%] md:w-[40%] p-6 rounded-2xl flex flex-col gap-6 max-h-[530px]">
                   {
                        newArrayCategory.map((category, idx) => (
                            <button 
                            key={idx}
                            onClick={() => handleCategory(category)}
                            className={getCategory === category ? "bg-purpleBg text-white font-extrabold text-left py-3 pl-7 rounded-[32px]" : "bg-grayFivep text-left py-3 pl-7 rounded-[32px] hover:bg-slate-600 transition duration-300"}
                            >
                                <p>{category}</p>
                            </button>
                        ))
                   }
                </div>
                {/* All Categories Div */}
                {/* All Products Div */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {
                        displayCategory.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
                {/* All Products Div */}
            </div>
            {/* All products Wrapping Div */}
        </div>
    );
};

export default AllProducts;