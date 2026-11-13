import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";
import { calculateCartTotal } from "../store/cart-reducer.js";

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);
  const formattedTotalPrice = `$${calculateCartTotal(items).toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p role="status">No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => (
            <li key={item.id}>
              <div>
                <span>{item.name}</span>
                <span> (${item.price.toFixed(2)})</span>
              </div>
              <div className="cart-item-actions">
                <button type="button" aria-label={`Remove one ${item.name} from cart`} onClick={() => updateItemQuantity(item.id, -1)}>-</button>
                <span aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span>
                <button type="button" aria-label={`Add one ${item.name} to cart`} onClick={() => updateItemQuantity(item.id, 1)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p id="cart-total-price">Cart Total: <strong>{formattedTotalPrice}</strong></p>
    </div>
  );
}
