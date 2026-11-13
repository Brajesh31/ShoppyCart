# Development

## Requirements
- Node.js
- npm
- The committed `package-lock.json`

## Commands
```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Code organization
- Add reusable UI in `src/components/`.
- Keep cart actions and state transitions in `src/store/shopping-cart-context.jsx`.
- Update the static catalog in `src/dummy-products.js`.
- Keep the root composition in `src/App.jsx`.

Test add, increment, decrement, remove-at-zero, empty-cart, total calculation, and modal open/close behavior.
