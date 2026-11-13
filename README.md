# ShoppyCart

ShoppyCart is a React 18 shopping-cart interface built with Vite. It displays a static clothing catalog and lets visitors add products, adjust quantities, remove items by reducing quantity to zero, and view a calculated cart total.

> This repository is a frontend learning project. The catalog is local demo data. There is no backend, user account, persistent cart, checkout, payment processing, inventory service, or order management.

## Features
- Product catalog rendered from `src/dummy-products.js`.
- Shared cart state through React Context and a reducer.
- Add items and update quantities.
- Cart modal and running total.
- Responsive product presentation.

## Stack
- React 18
- JavaScript and JSX
- React Context API and `useReducer`
- Vite 4
- ESLint

## Project structure
```text
src/
  components/       Header, Shop, Product, Cart and modal components
  store/            Cart context and reducer
  assets/           Product imagery
  dummy-products.js Static product fixtures
  App.jsx           Application composition
  main.jsx          Vite entry point
```

## Requirements
Use Node.js and npm. The repository includes `package-lock.json`.

## Setup
```bash
git clone https://github.com/Brajesh31/ShoppyCart.git
cd ShoppyCart
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Scripts
| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production bundle |
| `npm run preview` | Preview the production bundle |
| `npm run lint` | Run ESLint with warnings treated as errors |

## Cart behavior
The cart state is held in memory by `CartContextProvider`. The reducer handles `ADD_ITEM` and `UPDATE_ITEM` actions. Refreshing the browser resets the cart. Product and price data are client-side fixtures and must never be treated as authoritative prices for real transactions.

## Validation
```bash
npm ci
npm run lint
npm run build
```

## Limitations and security
- No server-side catalog or pricing validation.
- No checkout or payment integration.
- No persistent cart or customer account.
- Client-side values can be changed by visitors.
- Do not add real customer or payment data to this project.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md), and [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Contributing and license
Read [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under MIT, see [LICENSE](LICENSE).

Last updated: 2026-11-13 19:27 UTC
