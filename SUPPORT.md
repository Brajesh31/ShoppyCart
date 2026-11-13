# Support

## Start here

- [README](README.md): project scope, stack and setup.
- [Architecture](docs/ARCHITECTURE.md): runtime and data flow.
- [Cart State](docs/CART-STATE.md): reducer and state contract.
- [Catalog](docs/CATALOG-AND-PRICING.md): local product fixture and price semantics.
- [Troubleshooting](docs/TROUBLESHOOTING.md): common setup and UI issues.
- [Security](SECURITY.md): safe use and reporting.

## Local validation

```bash
npm ci
npm run lint
npm test
npm run build
```

## Bug report details

Include Node/npm version, browser/OS, steps, expected and actual results, affected product/cart action, sanitized console output, and whether the issue occurs after a clean `npm ci`.

Never include customer data, addresses, payment information, credentials, access tokens or private files. Use fictional examples.

## Project scope

This app does not place orders or process payments. Requests for production checkout require a trusted backend and a separate security and product design, not only a frontend component.
