import { useContext } from "react";
import { Shopcontext } from "../../component/context/usecontext";
import "./show.css"
export const Showproduct = ({ data }) => {
  const { productName, ProductImage, price, id } = data;
  const { cartItem, decrease, increase } = useContext(Shopcontext)

  const item = cartItem.find(row => row.id === id);

  return (
    <div className="product-card">
      <img src={ProductImage} alt={productName} />

      <h3 className="product-title">{productName}</h3>

      <p className="product-price">${price}</p>

      <div className="counter">
        <button onClick={() => decrease(id)}>-</button>

        <span>{item?.count || 0}</span>

        <button onClick={() => increase(id)}>+</button>
      </div>
    </div>
  );
};
