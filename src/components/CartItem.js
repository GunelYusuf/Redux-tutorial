import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cart-slice";

const CartItem = ({ name, quantity, total, price, id }) => {

  const dispatch = useDispatch();
  const increamentCartItem = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }));
  };
  const decreamentCartItem = () => {
    dispatch(cartActions.removeFromCart(id))
  };
 
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button
        onClick={decreamentCartItem}
        className="cart-actions"
     
      >
        -
      </button>
      <button
        onClick={increamentCartItem}
        className="cart-actions"
  
      >
        +
      </button>
    </div>
  );
};

export default CartItem;
