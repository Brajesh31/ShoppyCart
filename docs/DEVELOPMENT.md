# Development Guide

## Requirements

- Node.js 22 is used by CI. A current supported Node release compatible with Vite 4 can be used locally.
- npm.
- Git.
- The committed `package-lock.json`.

This repository uses npm and is not configured for pnpm or Yarn. Do not add another package-manager lockfile.

## Setup

```bash
git clone https://github.com/Brajesh31/ShoppyCart.git
cd ShoppyCart
npm ci
```

## Start development server

```bash
npm run dev
```

Vite prints a local URL, typically <http://localhost:5173/>.

## Validation commands

```bash
npm run lint
npm test
npm run build
npm run preview
```

- lint checks source and test JavaScript/JSX with ESLint;
- test runs reducer and calculation tests using Node's built-in runner;
- build creates `dist/`;
- preview serves the already-built `dist/` content locally.

## Code organization

- `src/main.jsx`: browser entry point and CSS import.
- `src/App.jsx`: provider and page composition.
- `src/components/`: Header, Shop, Product, Cart and CartModal.
- `src/store/shopping-cart-context.jsx`: provider and dispatch functions.
- `src/store/cart-reducer.js`: pure reducer and derived calculations.
- `src/dummy-products.js`: single catalog fixture source.
- `src/assets/`: bundled product images.
- `src/index.css`: page, catalog and dialog styles.
- `tests/`: reducer tests.
- `docs/`: detailed product and engineering documentation.

## State-management rules

Keep transitions in `cart-reducer.js`. Do not mutate the previous state. Use product IDs as stable identifiers. When adding a new action, define its payload and behaviour, then test normal, invalid and missing-item cases.

## Product catalog rules

Keep product fixture metadata in `dummy-products.js`. Verify IDs are unique, prices finite and non-negative, images exist, and descriptions are meaningful. Displayed data remains client-controlled and must not become a trusted checkout price.

## Accessibility and UI rules

Use semantic buttons and lists, provide specific aria-labels for icon-only or quantity controls, keep focus visible, test dialog keyboard behaviour, and respect reduced-motion preference.

## Dependencies

Review direct dependency changes. Keep `package-lock.json` in sync using npm. Do not commit `node_modules`, `dist/`, private environment files, customer data or payment information.
