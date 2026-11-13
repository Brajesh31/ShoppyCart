# Security and Trust Boundaries

## Current scope

This is a client-side shopping cart demonstration. It has no backend, user authentication, server session, database, inventory service, order service or payment integration.

## Browser-controlled data

The product fixture and cart state are shipped to the browser. Visitors can inspect, alter or replace client code and state. Therefore:
- product price is not authoritative;
- cart total is not authoritative;
- quantity is not a reserved inventory count;
- a cart line is not an order;
- the interface cannot confirm payment or fulfillment.

## Checkout requirements for a real store

A real implementation must send only product identifiers and quantities to a trusted server. The server must:
1. Authenticate the customer and establish cart ownership.
2. Load current products and prices from a trusted catalog.
3. Verify product publication and availability.
4. Verify inventory and handle concurrent stock changes.
5. Calculate discounts, tax, shipping and the final amount server-side.
6. Create an order/checkout record using an idempotency key.
7. Create a payment session through a reputable payment provider.
8. Verify payment result through authenticated server-side provider callbacks/webhooks.
9. Reconcile duplicate, delayed, failed and out-of-order webhook events.
10. Store only necessary payment references, never raw card details.

## Privacy and data collection

Do not add customer names, addresses, email addresses, passwords, payment details or order history to frontend fixtures. A production store requires a privacy notice, defined processing purpose, access controls, retention, deletion, data-subject request handling and secure logging.

## Dependency and static asset risks

Review dependencies and external font/resource providers. Static assets are built into the public site. Do not put tokens or secrets in source files or `VITE_*` variables, because Vite replaces these in the client bundle.

## Reporting

Do not post payment data, credentials, customer details or exploitable secrets in public issues. Use GitHub private vulnerability reporting when available or contact the repository owner privately with affected version, impact and safe reproduction steps.

## Non-security controls

The app's cart reducer is client-side business logic and must not be reused as the authoritative server transaction rule without server-side validation and independent testing.
