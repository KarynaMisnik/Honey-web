import ProductList from "./ProductList";

const Shop = ({ handleClick }) => {
  return (
    <div>
      <ProductList handleClick={handleClick} />
    </div>
  );
};

export default Shop;
