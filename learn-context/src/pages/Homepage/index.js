import React, { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
const productData = [
  {
    id: 1,
    name: "Phone 12",
  },
  {
    id: 2,
    name: "Samsung",
  },
  {
    id: 3,
    name: "Nokia",
  },
];
const Homepage = () => {
  const [products, setProducts] = useState(productData);
  return (
    <div>
      <ProductList data={products} />
    </div>
  );
};

export default Homepage;
