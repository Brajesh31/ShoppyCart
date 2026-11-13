# User Flows and Interaction Contract

## Browse catalog

1. Vite loads the application.
2. App maps the six static records from `DUMMY_PRODUCTS`.
3. Shop renders list items.
4. Product displays local image, title, price and description.
5. No network request is made for catalog data.

## Add a product

1. Visitor selects Add to Cart on a Product card.
2. Product calls `addItemToCart(productId)`.
3. Context dispatches `ADD_ITEM`.
4. Reducer looks up the product in the catalog.
5. A new row is created or its quantity is increased.
6. Header recomputes the unit count from the resulting items.

The browser state is authoritative only for the current demo tab, not for a real order.

## Open cart

1. Visitor selects the Cart button.
2. Header calls the imperative `open()` handle.
3. CartModal calls native `showModal()` on the dialog.
4. Cart renders the current state and total.

## Update quantity

- Minus dispatches an update with `-1`.
- Plus dispatches an update with `+1`.
- If quantity becomes zero or less, the row is removed.
- Total and header unit count are derived from the updated lines.

## Close cart

The Close button is submitted from the `method="dialog"` form, closing the native dialog. Native dialog behaviour handles modal focus and escape interactions in supported browsers.

## Checkout placeholder

A checkout label may be visible when the cart contains items, but it is intentionally disabled. There is no address form, checkout route, order API, inventory reservation, tax/shipping calculation, payment provider, or order confirmation. No order is created.

## Reload

The app initializes the reducer with an empty items array. Refreshing or reopening the page resets the cart. There is no localStorage or server persistence.

## Failure/edge states

- Unknown product IDs passed to the reducer are ignored.
- Updating a product that is not currently in the cart is ignored.
- Invalid non-integer or zero quantity deltas are ignored.
- Empty cart is represented by the message "No items in cart!" and a zero total.
