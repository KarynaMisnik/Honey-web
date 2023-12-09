import React from "react";

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-text-container">
        <h3>Oh, bzzz!</h3>
        <h3> You are totally lost</h3>
        <span>404</span>
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
