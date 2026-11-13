# Known Limitations

## Product scope

ShoppyCart is a static clothing catalog and in-memory cart demonstration.

## Catalog
- Six hard-coded products.
- Prices are static display values in USD.
- No product variants, stock levels, discount rules, tax categories or shipping attributes.
- No catalog API or admin catalog editor.

## Cart
- Cart state is held in React memory.
- Refresh resets the cart.
- No account or cross-device synchronization.
- No server validation of product price or stock.
- No reservation of inventory.
- No coupon/promotion or tax/shipping calculation.

## Checkout and orders
- Checkout is intentionally unavailable.
- No customer identity, address form, order API, payment provider or order confirmation exists.
- No refund, cancellation or fulfillment lifecycle.

## Security and privacy
- No authentication or authorization.
- No customer/payment data should be entered or stored.
- Browser state can be manipulated.
- Client-side total cannot be trusted for a real financial transaction.

## UX and accessibility
- Product catalog content is local and small.
- Native dialog support is browser-dependent, though modern browsers support it.
- Responsive styles are basic and should be tested on real devices.
- Product image rights and branding should be reviewed if the project is publicly distributed.

## Technical limits
- The project uses Vite 4 and React 18 dependencies as currently declared.
- No browser end-to-end test environment is configured.
- No monitoring, analytics, logging or server-side operations exist.
