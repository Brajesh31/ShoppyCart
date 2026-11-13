# Contributing

## Setup
```bash
npm ci
npm run dev
```

## Guidelines
- Follow the existing React component and Context API structure.
- Keep product fixtures in `src/dummy-products.js`.
- Keep cart state transitions in the reducer in `src/store/shopping-cart-context.jsx`.
- Use stable React keys and accessible button labels.
- Do not add secrets, customer information, payment data, or generated build output.
- Keep the demo scope explicit. Do not represent local cart state as a real order.

## Validation
```bash
npm run lint
npm run build
```

## Pull requests
Describe the behavior change, list checks performed, and attach screenshots for UI changes. Document any new dependencies or external services.
