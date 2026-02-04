import { useState } from "react";
import "./show.css";

export const Showproduct = ({ data }) => {
  const { productName, ProductImage, price, id } = data;

  const [count, setCount] = useState(0);

   const increase = () => {
    setCount(prev => prev + 1);
  };

   const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="product-card" key={id}>
      <img src={ProductImage} alt={productName} />

      <h3 className="product-title">{productName}</h3>

      <p className="product-price">${price}</p>

      <div className="counter">
        <button onClick={decrease}>-</button>

        <span>{count}</span>

        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};
