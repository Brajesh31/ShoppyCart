# ShoppyCart

ShoppyCart is a React 18 and Vite shopping-cart demonstration. It presents a static six-item clothing catalog and uses React Context plus a reducer to add products, adjust quantities, remove zero-quantity lines, and calculate a cart total.

> **Scope:** This is a frontend learning project. Product data and prices are local fixtures. Cart state exists only in browser memory. There is no backend, account system, persistent cart, stock service, checkout, payment processing or order management. The Checkout action is intentionally disabled.

## Features

- Static clothing catalog with bundled product imagery.
- Product cards with title, description and illustrative USD price.
- Shared cart state using React Context and `useReducer`.
- Reducer-driven add, increment, decrement and remove-at-zero behaviour.
- Header badge showing the total number of units in the cart.
- Native HTML dialog for cart summary.
- Derived cart total across all product lines.
- Responsive mobile layout and reduced-motion handling.
- Unit tests for reducer transitions and derived calculations.

## Technology

| Layer | Technology |
| --- | --- |
| UI | React 18 |
| Build/dev server | Vite 4 |
| Language | JavaScript and JSX |
| State | React Context API and useReducer |
| Testing | Node.js built-in test runner |
| Lint | ESLint 8 |
| Package manager | npm with package-lock.json |

## Local setup

Requirements: Node.js 22 recommended, npm and Git.

```bash
git clone https://github.com/Brajesh31/ShoppyCart.git
cd ShoppyCart
npm ci
npm run dev
```

Open the local URL printed by Vite, typically <http://localhost:5173/>.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Lint source and test JavaScript/JSX |
| `npm test` | Run cart reducer and calculation tests |
| `npm run build` | Create the static production bundle in `dist/` |
| `npm run preview` | Preview the production bundle locally |

## Project structure

```text
.
├── index.html
├── public/
│   └── logo.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── dummy-products.js
│   ├── index.css
│   ├── assets/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartModal.jsx
│   │   ├── Header.jsx
│   │   ├── Product.jsx
│   │   └── Shop.jsx
│   └── store/
│       ├── cart-reducer.js
│       └── shopping-cart-context.jsx
├── tests/
├── docs/
└── .github/
```

## Cart behaviour

The provider exposes `items`, `addItemToCart(productId)` and `updateItemQuantity(productId, amount)`.

- Adding a known product creates a cart row with quantity one.
- Adding the same product increments its existing row.
- Adding an unknown product ID is ignored safely.
- Quantity changes require an integer delta and an existing cart row.
- When a quantity reaches zero or less, that product line is removed.
- Header count sums all quantities, not the number of product types.
- Total is derived from unit price multiplied by quantity for each line.
- Refreshing the page resets the cart.

Detailed contracts are documented in [Cart State](docs/CART-STATE.md).

## Validation

```bash
npm ci
npm run lint
npm test
npm run build
```

The tests cover reducer behaviour and total/count calculations. They do not test real checkout or payment flows, because those do not exist.

## Important limitations

- No customer accounts or authentication.
- No catalog or pricing API.
- No inventory validation or reservation.
- No cart persistence.
- No tax, shipping, promotions or coupon calculation.
- No order creation or payment integration.
- Client-side prices and totals are untrusted and must never be used as final transaction amounts.

See [Architecture](docs/ARCHITECTURE.md), [Catalog and Pricing](docs/CATALOG-AND-PRICING.md), [Components](docs/COMPONENT-REFERENCE.md), [Security Review](docs/SECURITY-REVIEW.md), and [Limitations](docs/LIMITATIONS.md).

## Contributing and license

Read [CONTRIBUTING.md](CONTRIBUTING.md). Do not add customer, address, credential or payment information. The repository retains its MIT license in [LICENSE](LICENSE).
