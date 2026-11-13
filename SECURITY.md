# Security Policy

## Project scope

ShoppyCart is a browser-only shopping-cart demonstration. It has no user accounts, backend, order processing, inventory service, or payment provider. Product prices and cart state are client-side and can be modified by visitors.

Do not enter real customer information, addresses, passwords, card details, payment tokens or confidential data.

## Reporting

Do not post secrets or personal/payment data in public issues. Use GitHub private vulnerability reporting if available, or contact the repository owner privately with affected revision, impact and safe reproduction steps.

## Contribution security expectations

- Never place API keys or payment secrets in Vite client code.
- Remember that `VITE_*` environment values are public in the browser bundle.
- Do not trust client-side prices, quantities or totals for a real order.
- Verify product and inventory state server-side in any future backend.
- Use a reputable payment provider and verify webhooks server-side.
- Minimize customer data and define retention before collection.
- Review dependencies and static asset rights.
