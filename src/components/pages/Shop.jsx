import ProductList from "./ProductList";

const Shop = ({ handleClick }) => {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <ProductList handleClick={handleClick} />
    </div>
  );
};

export default Shop;
