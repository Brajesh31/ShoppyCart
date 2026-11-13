# Cart State and Reducer Contract

## State shape

The cart state is an object with one property:

```js
{
  items: [
    {
      id: "p1",
      name: "Majestic Vintage Mocha Overcoat",
      price: 129.99,
      quantity: 2
    }
  ]
}
```

Each unique product has at most one cart row. Quantity represents the number of units, not the number of distinct product types.

## Provider contract

`CartContextProvider` owns the reducer and exposes:

| Property | Contract |
| --- | --- |
| `items` | Current cart line array |
| `addItemToCart(productId)` | Dispatches `ADD_ITEM` |
| `updateItemQuantity(productId, amount)` | Dispatches `UPDATE_ITEM` with a signed integer delta |

The context default has the same method names as the provider value so consumers have a consistent interface.

## Actions

### ADD_ITEM
The reducer looks up the ID in the injected catalog. If unknown, it returns the existing state unchanged. If the item already exists, the reducer returns a new state and increments only that line. Otherwise, it creates a line with catalog title, catalog price and quantity one.

### UPDATE_ITEM
The reducer requires an integer non-zero delta and an existing cart line. If the requested quantity becomes zero or less, the line is removed. Otherwise, only that line is copied with the updated quantity. Missing IDs and invalid deltas are safe no-ops.

### Unknown action
An unrecognized action returns the current state.

## Derived values

- Header count is the sum of every line's quantity. It is not the number of distinct product rows.
- Cart total is the sum of `price × quantity` for every line.
- Display formatting currently uses a dollar sign and two decimal places.

The helpers `getCartItemCount` and `calculateCartTotal` live in `src/store/cart-reducer.js` and are independent of browser assets, enabling direct Node unit tests.

## Immutability

Reducer actions do not mutate the previous state or its item array. Changed lines are copied and a new array/state is returned. No-op actions return the same state reference.

## Persistence

Cart state exists only in React memory. Refreshing the page or closing the tab resets the cart. There is no persistence or cross-device synchronization.

## Future transaction semantics

A backend should accept product IDs and quantities, re-fetch current catalog prices, verify stock, apply promotions/tax/shipping, and create an order using a server-generated idempotency key. It must ignore any client-submitted total or copied price.
