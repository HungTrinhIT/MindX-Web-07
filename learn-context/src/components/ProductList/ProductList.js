
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ data }) => {
  
  return (
    <div>
      {data.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
      {/* <ABCD></ABCD> */}
    </div>
  );
};

export default ProductList;
