import React from "react";

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-text-container">
        <span>404</span>
        <p>Oh, bzzz!</p>
        <p> You are totally lost.</p>
      </div>
      <div className="error-img-container">
        <img
          src="./src/assets/img/errorPage/bee-error.png"
          alt="a cute bee sitting in armchair and drinking tea"
        />
      </div>
    </div>
  );
}
