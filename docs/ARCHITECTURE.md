# Architecture

```mermaid
flowchart TD
  Browser[Browser] --> Vite[Vite entry point]
  Vite --> App[src/App.jsx]
  App --> Provider[CartContextProvider]
  Provider --> Header[Header and cart modal]
  Provider --> Shop[Shop]
  Shop --> Product[Product cards]
  Product --> Reducer[Cart reducer]
  Header --> Cart[Cart summary]
  Reducer --> State[In-memory cart state]
  Fixtures[src/dummy-products.js] --> Shop
```

## State model
The provider exposes cart items, `addItemToCart`, and `updateItemQuantity`. The reducer supports adding a product and incrementing or decrementing its quantity. Cart state is not persisted between reloads.

## Data boundary
Product fixtures and displayed prices are static browser data. There is no API or backend in this repository.
