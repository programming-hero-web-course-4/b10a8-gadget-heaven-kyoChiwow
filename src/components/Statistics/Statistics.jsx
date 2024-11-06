import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("gadgetsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const chartData = products.map((product) => ({
    name: product.product_title,
    price: product.price,
  }));
  return (
    <div className="mt-10">
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
        <link rel="icon" href="/assets/favicon-16x16.png" />
      </Helmet>
      <ResponsiveContainer width="100%" height={600}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
