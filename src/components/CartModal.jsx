import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart.jsx";

const CartModal = forwardRef(function CartModal({ title, actions }, ref) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current && !dialog.current.open) dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog id="modal" ref={dialog} aria-labelledby="cart-modal-title">
      <h2 id="cart-modal-title">{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">{actions}</form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default CartModal;
