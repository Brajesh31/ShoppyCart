import { useContext, useRef } from "react";
import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";
import { getCartItemCount } from "../store/cart-reducer.js";

export default function Header() {
  const modal = useRef(null);
  const { items } = useContext(CartContext);
  const cartQuantity = getCartItemCount(items);

  function handleOpenCartClick() {
    modal.current?.open();
  }

  let modalActions = <button type="submit">Close</button>;
  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button type="submit">Close</button>
        <button type="button" disabled title="Checkout is not implemented in this demo.">
          Checkout unavailable
        </button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="/logo.png" alt="ShoppyCart logo" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button type="button" onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
