# Release Checklist

## Source and dependencies

- [ ] Review changes and confirm no secrets or personal/payment data were added.
- [ ] Run `npm ci` from the committed lockfile.
- [ ] Run `npm run lint`.
- [ ] Run `npm test`.
- [ ] Run `npm run build`.
- [ ] Confirm GitHub Actions passes for the release commit.
- [ ] Review dependency changes and lockfile diff.
- [ ] Confirm local product images and public logo are present.

## Cart behaviour

- [ ] Add one item.
- [ ] Add the same item more than once.
- [ ] Add multiple distinct products.
- [ ] Confirm badge counts units, not product rows.
- [ ] Increment and decrement quantity.
- [ ] Confirm zero quantity removes the line.
- [ ] Confirm empty-cart message and zero total.
- [ ] Confirm multi-line total is correct.
- [ ] Confirm unknown product IDs are ignored in reducer tests.
- [ ] Confirm invalid quantity deltas are ignored.

## UI and accessibility

- [ ] Open and close native cart dialog.
- [ ] Confirm checkout placeholder is disabled.
- [ ] Test keyboard focus and screen-reader labels.
- [ ] Test narrow and wide viewport layout.
- [ ] Test reduced-motion preference.
- [ ] Check colour contrast and image alt text.

## Product claims and data

- [ ] Keep demo-only scope explicit.
- [ ] Do not claim inventory, account or order functionality.
- [ ] Do not collect customer or payment data.
- [ ] Confirm catalog prices remain labelled as sample values.

## Production commerce gate

A production release requires server-owned catalog/prices, inventory validation, customer identity, persistent carts, transactional order creation, tax/shipping calculation, idempotency, payment provider integration, webhook verification, privacy controls, monitoring and incident response. A static build alone does not satisfy these requirements.
