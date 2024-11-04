import { useEffect, useState } from "react";
import Product from "../Product/Product";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('gadgetsData.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    })
    return (
        <div className="xl:mt-[490px] mb-24">
            <h1 className="text-black font-bold text-4xl text-center mb-12">Explore Cutting-Edge Gadgets</h1>
            {/* All products Wrapping Div */}
            <div className="flex gap-8 border">
                {/* All Categories Div */}
                <div className="bg-white w-[20%] p-6 rounded-2xl flex flex-col gap-6 max-h-[530px]">
                    <button className="bg-grayFivep text-left py-3 pl-7 rounded-[32px] hover:bg-slate-600 transition duration-300">
                        <p>All Product</p>
                    </button>
                    <button className="bg-grayFivep text-left py-3 pl-7 rounded-[32px] hover:bg-slate-600 transition duration-300">
                        <p>Smart Phone</p>
                    </button>
                    <button className="bg-grayFivep text-left py-3 pl-7 rounded-[32px] hover:bg-slate-600 transition duration-300">
                        <p>Smart Watch</p>
                    </button>
                    <button className="bg-grayFivep text-left py-3 pl-7 rounded-[32px] hover:bg-slate-600 transition duration-300">
                        <p>Tablet</p>
                    </button>
                    <button className="bg-grayFivep text-left py-3 pl-7 rounded-[32px] hover:bg-slate-600 transition duration-300">
                        <p>Laptop</p>
                    </button>
                    <button className="bg-grayFivep text-left py-3 pl-7 rounded-[32px] hover:bg-slate-600 transition duration-300">
                        <p>Headphone</p>
                    </button>
                    <button className="bg-grayFivep text-left py-3 pl-7 rounded-[32px] hover:bg-slate-600 transition duration-300">
                        <p>Camera</p>
                    </button>
                </div>
                {/* All Categories Div */}
                {/* All Products Div */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border w-full">
                    {
                        allProducts.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
                {/* All Products Div */}
            </div>
            {/* All products Wrapping Div */}
        </div>
    );
};

export default AllProducts;