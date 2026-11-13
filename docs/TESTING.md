# Testing Strategy

## Current validation layers

The project uses:
- ESLint for JavaScript/JSX code quality;
- Node's built-in `node:test` runner for pure reducer and calculation tests;
- Vite production build for bundling validation.

No browser automation framework, DOM test environment or React component testing library is configured in the current repository.

## Run checks

```bash
npm ci
npm run lint
npm test
npm run build
```

## Reducer behaviour covered

The reducer tests verify:
1. Add a known product.
2. Increment an existing product without duplicating its row.
3. Add a second catalog product as a separate row.
4. Ignore an unknown product ID.
5. Increment only the selected line.
6. Remove a line when quantity reaches zero.
7. Decrement a quantity greater than one.
8. Ignore updates to missing lines.
9. Ignore invalid quantity deltas.
10. Preserve state for unknown actions.
11. Sum quantities for header count.
12. Calculate extended line totals.
13. Return zero count and total for an empty cart.
14. Avoid mutating supplied arrays during derived calculations.

## Manual browser checklist

- [ ] Catalog renders all six products and images.
- [ ] Add one product, then add the same product again.
- [ ] Add two different products.
- [ ] Open the cart and verify the header count is total units.
- [ ] Increment and decrement quantities.
- [ ] Remove a line by decrementing its quantity to zero.
- [ ] Verify empty-cart message and zero total.
- [ ] Verify total across multiple lines.
- [ ] Verify Close button and Escape close the native dialog.
- [ ] Confirm Checkout is unavailable and disabled.
- [ ] Refresh the page and confirm cart resets.
- [ ] Test at mobile and desktop widths.
- [ ] Test keyboard focus and reduced-motion behaviour.

## What a passing suite does not prove

The tests do not prove payment correctness, inventory availability, server-side pricing, persistence, authentication, shipping/tax calculation or security of a real checkout. Those features do not exist in this repository.

## Future integration tests

A production service needs tests for current price lookup, stock races, cart ownership, stale cart behaviour, discount rules, tax and shipping, idempotent order creation, payment success/failure/cancellation, duplicate webhooks, refunds, order status transitions, authorization and privacy boundaries.
