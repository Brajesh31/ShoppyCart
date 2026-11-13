# Changelog

This changelog records repository-level changes. It does not imply the addition of a backend or real checkout system.

## Unreleased

- Extracted pure cart reducer and calculation helpers into `src/store/cart-reducer.js`.
- Added safe no-op handling for unknown product IDs, missing cart lines and invalid quantity deltas.
- Corrected header badge to count total units rather than distinct product rows.
- Corrected the default CartContext method name.
- Disabled and relabelled the checkout placeholder.
- Added accessible labels to quantity controls and a labelled catalog section.
- Added responsive and reduced-motion CSS rules.
- Updated HTML metadata to identify the demo.
- Added ESLint configuration and Node-based reducer tests.
- Expanded CI to run lint, tests and build.
- Expanded architecture, catalog, cart state, components, data model, flows, testing, accessibility, security, operations and limitations documentation.
- Changed README timestamp automation to daily/manual execution.
