import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartItems from "../cart-items";
import { clearCart } from "../features/cart/cartSlice";
import { store } from "../store";
import { openModal } from "../features/modal/modalSlice";


import CartItem from "./CartItem";
const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartItems,total,amount} = useSelector((store)=>store.cart)
    
  if (cartItems.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cartItems.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" 
        onClick={()=>dispatch(openModal())}>
          clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
