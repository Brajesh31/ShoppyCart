# Contributing

Thank you for contributing to ShoppyCart. Keep changes focused on the current React/Vite shopping-cart demonstration unless a separate backend scope is explicitly designed.

## Development setup

```bash
npm ci
npm run dev
```

Use npm and the committed `package-lock.json`. Do not introduce pnpm or Yarn lockfiles.

## Code organization

- `src/components/`: Header, Shop, Product, Cart and CartModal.
- `src/store/`: cart Context and pure reducer.
- `src/dummy-products.js`: catalog fixtures.
- `src/assets/`: product imagery.
- `src/index.css`: global and responsive styles.
- `tests/`: reducer and calculation tests.
- `docs/`: product and engineering documentation.

## Engineering guidelines

- Keep state transitions in the pure reducer.
- Preserve immutable updates.
- Use stable product IDs and validate catalog lookups.
- Derive cart count and total from cart lines rather than storing duplicate state.
- Do not trust browser prices or totals for real transactions.
- Do not show checkout or order success unless a real server confirms it.
- Use semantic buttons, meaningful labels and visible focus.
- Keep the checkout placeholder disabled until a real flow exists.
- Do not commit secrets, customer details or payment data.
- Review image licensing and optimize static assets.

## Validation

```bash
npm ci
npm run lint
npm test
npm run build
```

Manually test adding, incrementing, decrementing, removal-at-zero, empty state, multiple-line total, dialog open/close, mobile layout and reduced-motion behaviour.

## Pull requests

Describe behaviour changes, changed files, tests, limitations and any new dependency or third-party asset. Include screenshots for visual work. Keep all sample customer and product data fictional.

## Future checkout work

Checkout requires backend price/inventory verification, customer identity, tax/shipping, order creation, payment integration and secure webhook handling. Do not implement payment by adding a frontend button or accepting a browser-calculated total.
