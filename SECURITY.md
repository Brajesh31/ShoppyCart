# Security Policy

## Project scope
ShoppyCart is a client-side demonstration. It has no backend, authentication, order processing, or payment integration.

## Important limitations
Product data and prices are bundled into the browser. Cart state is held in memory and can be modified by the visitor. Never use this client state as a trusted source for real orders or payments.

## Reporting
Do not publish sensitive details in a public issue. Use GitHub private vulnerability reporting when available, or contact the repository owner privately with impact and reproduction steps.

## Production requirements
A real store requires server-side price and inventory validation, authenticated sessions, authorization, secure payment-provider integration, input validation, rate limits, and appropriate privacy controls.
