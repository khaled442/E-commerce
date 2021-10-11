import "./CartItem.css";
import { Link } from "react-router-dom";


const CartItem = ({ item, quantityChangeHandler, deleteProduct }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img style={{width:"250px",height:"250px"}} src={item.images.url} alt={item.title} />
      </div>
      <Link to={`/products/${item.product}`} className="cartItem__name">
        <p>{item.title} </p>
      </Link>
      <p className="cartitem__price">{item.price} TND</p>
      <select
        className="cartItem__select"
        value={item.qty}
        onChange={(e) => quantityChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.sold).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => deleteProduct(item.product)}
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartItem;
