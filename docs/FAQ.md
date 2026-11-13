# Frequently Asked Questions

## Is ShoppyCart a real online store?

No. It is a frontend demonstration of a product catalog and React Context cart.

## Can I place an order?

No. Checkout is deliberately disabled. There is no backend or payment integration.

## Are the prices live?

No. Prices are fixed sample values in `src/dummy-products.js`.

## Does the cart persist after refresh?

No. It is kept in React memory and resets when the app reloads.

## Does the cart count show product types or units?

It shows total units. Two coats and three gowns are five items.

## Why does decrementing quantity to zero remove a product?

The reducer removes a line when its quantity reaches zero or below. The empty cart then shows its empty-state message and a zero total.

## Is the app connected to inventory?

No. The demo does not know stock availability and cannot reserve items.

## Can I use these components in a production shop?

The UI patterns can be reused, but the reducer and browser prices must not be treated as authoritative commerce logic. A real checkout requires server-side pricing, inventory, order and payment services.

## Which package manager should I use?

Use npm and the committed `package-lock.json`. Do not mix package managers.
