# Operations and Data Handling

## Current runtime profile

The app is a static Vite site. It has no server-side state and no intentional customer-data collection. Cart data lives in React memory and disappears on reload. The app does not request customer identity, shipping address, payment method, or email.

## No production observability

The repository does not configure backend logs, metrics, tracing, alerts, order audit, or uptime monitoring. Static hosting logs are provider-controlled and should be reviewed separately if the site is published.

## Privacy guidance

Do not add customer information or payment data to fixtures, screenshots, test output or browser logs. If account or checkout functionality is introduced, define data purpose, collection, access, retention, deletion, data residency and processor relationships before launch.

## Production commerce operations

A real store would require:
- monitored catalog and inventory services;
- transaction-safe cart/order creation;
- idempotent checkout;
- payment webhook verification;
- order, payment and refund reconciliation;
- secure customer support access;
- data retention and deletion;
- incident response and fraud controls;
- backup and recovery procedures.

## Release and rollback

The current static site can be rolled back by redeploying a previously built `dist/` artifact. Keep build provenance and the corresponding source revision. There is no database migration or order-state rollback in this project.

## Security note

A static deployment remains a client-only demo. Never treat it as a trusted payment or order-processing system.
