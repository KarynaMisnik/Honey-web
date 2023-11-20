import ProductList from "./ProductList";

const Shop = ({ handleClick, warning }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundImage:
          "linear-gradient(to top, #fbe386, #fce58c, #fde792, #fde897, #feea9d, #ffe7aa, #ffe6b8, #ffe5c5, #ffe7dc, #ffeef2, #fff7fe, #ffeca4)",
      }}
    >
      {warning && <div className="warning">Item has been already added</div>}

      <ProductList handleClick={handleClick} />
    </div>
  );
};

export default Shop;
