import React, { useState } from "react";

function Item({ name, category }) {
  const [onCart, setOnCart] = useState(false);

  const itemCart = onCart ? "in-cart" : "";
  const buttonColor = onCart ? "remove" : "add";
  const toggleCart = () => {
    setOnCart((onCart) => !onCart);
  };

  return (
    <li className={itemCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonColor} onClick={toggleCart}>
        {onCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
