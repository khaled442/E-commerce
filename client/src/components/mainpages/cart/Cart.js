import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeCart } from "../../../redux/action/ActionCart";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cartProduct);

  const quantityChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const deleteProduct = (id) => {
    dispatch(removeCart(id));
  };

  const getCartCount = () => {
    return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartTotal = () => {
    return cartItem.reduce((price, item) => item.price * item.qty + price, 0);
  };
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Panier</h2>
        {cartItem.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          cartItem.map((item) => (
            <CartItem
              item={item}
              quantityChangeHandler={quantityChangeHandler}
              deleteProduct={deleteProduct}
            />
          ))
        )}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p> Product Total ({getCartCount()}) </p>
          <p> Total : ({getCartTotal()}) TND </p>
        </div>
        <div>
          <Link to="/products">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
