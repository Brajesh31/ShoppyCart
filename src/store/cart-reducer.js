/**
 * Pure shopping-cart transitions. The catalog is injected so Node tests do
 * not need to load Vite-managed image assets.
 */
export function createShoppingCartReducer(products) {
  const productsById = new Map(products.map((product) => [product.id, product]));

  return function shoppingCartReducer(state, action) {
    if (!state || !Array.isArray(state.items) || !action) return state;

    switch (action.type) {
      case "ADD_ITEM": {
        const product = productsById.get(action.payload);
        if (!product) return state;

        const index = state.items.findIndex((item) => item.id === product.id);
        if (index >= 0) {
          return {
            ...state,
            items: state.items.map((item, itemIndex) =>
              itemIndex === index ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          };
        }

        return {
          ...state,
          items: [
            ...state.items,
            { id: product.id, name: product.title, price: product.price, quantity: 1 },
          ],
        };
      }

      case "UPDATE_ITEM": {
        const { productId, amount } = action.payload ?? {};
        if (!Number.isInteger(amount) || amount === 0) return state;

        const index = state.items.findIndex((item) => item.id === productId);
        if (index < 0) return state;

        const nextQuantity = state.items[index].quantity + amount;
        if (nextQuantity <= 0) {
          return { ...state, items: state.items.filter((item) => item.id !== productId) };
        }

        return {
          ...state,
          items: state.items.map((item, itemIndex) =>
            itemIndex === index ? { ...item, quantity: nextQuantity } : item,
          ),
        };
      }

      default:
        return state;
    }
  };
}

export function getCartItemCount(items) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function calculateCartTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
