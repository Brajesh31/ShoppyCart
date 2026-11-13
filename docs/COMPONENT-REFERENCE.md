# Component Reference

## `src/App.jsx`
Application composition root. It places Header and Shop inside CartContextProvider, maps the local catalog into list items, and passes product records to Product. The component does not fetch data or create a route tree.

## `src/main.jsx`
Vite browser entry point. Imports React/ReactDOM, mounts App into `#root` under StrictMode, and imports the global stylesheet.

## `src/components/Header.jsx`
Renders the logo/brand header and Cart button. Reads items from CartContext, sums quantities for the badge, and holds a ref to CartModal's imperative `open()` handle. When the cart is non-empty, the modal displays a disabled checkout placeholder because no checkout flow exists.

## `src/components/Shop.jsx`
Provides the catalog section heading and semantic unordered list. It receives product list items as children. It does not own catalog data or cart behaviour.

## `src/components/Product.jsx`
Receives product ID, image, title, price and description. Renders a product article and calls `addItemToCart(id)` from context when the Add to Cart button is activated. The displayed price is the static fixture value.

## `src/components/CartModal.jsx`
Uses `forwardRef` and `useImperativeHandle` to expose an `open()` method to Header. It portals a native HTML `dialog` into the `#modal` element. The dialog uses `aria-labelledby` to associate its title. Its action form uses `method="dialog"` so Close submits and closes the dialog.

## `src/components/Cart.jsx`
Reads cart rows and the quantity update action from CartContext. It renders a status message for an empty cart, one row per product, accessible decrement/increment buttons, and the derived total. Decrementing the last unit removes the row.

## `src/store/shopping-cart-context.jsx`
Creates the React context and owns the useReducer hook. It binds the pure reducer to the local catalog and exposes action functions to descendants.

## `src/store/cart-reducer.js`
Pure cart state transition factory. It receives a product catalog, safely handles unknown IDs and invalid quantity deltas, and exports helper functions for unit count and cart total. It has no React, Vite or image imports so it can be tested directly using Node.

## `src/dummy-products.js`
Static catalog fixture and image imports. This is the only current source of product metadata and display prices.

## `src/index.css`
Global styling for page theme, header, product grid, cards, cart dialog, quantity actions and animation. Responsive and reduced-motion rules are included near the end.

## `index.html`
Provides metadata, Vite's module entry, the React mount point, and the portal mount point. The title identifies the app as a demo.

## UI and interaction conventions

- Keep cart transitions in the reducer, not scattered across product components.
- Keep catalog fixture data in its single source file.
- Use stable product IDs as React keys.
- Give quantity controls product-specific accessible labels.
- Never show checkout success without a real order service response.
