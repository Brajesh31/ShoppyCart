# Data Model

## Product fixture

A product fixture has:
- `id`: stable string ID;
- `image`: Vite-resolved asset URL;
- `title`: human-readable product name;
- `price`: illustrative USD unit price;
- `description`: presentation copy.

There is no product variant, SKU, stock, price history, discount, tax code, category ID or status field.

## Cart item

A cart item stores `id`, `name`, `price` and `quantity`. The ID refers to a catalog product. Name and price are copied from the static catalog when the first unit is added. The cart has no customer ID, session ID, currency field, tax breakdown, shipping destination, discount allocation or server version.

## Cart state

`{ items: CartItem[] }` is the complete provider state. It is not persisted. An empty cart has an empty items array.

## Derived data

- Header unit count is the sum of quantities.
- Cart line subtotal is unit price multiplied by quantity.
- Cart total is the sum of line subtotals.

There are no independently stored totals, so the displayed total is derived from line items.

## Data integrity

The reducer looks up an added product in the catalog injected at initialization. Unknown product IDs are ignored. Quantity updates require an existing row and a non-zero integer delta. Removing the last unit drops the line.

The current fixture prices are JavaScript floating-point numbers for display. This is adequate for a small demonstration, but real commerce should represent money as integer minor units (for example, cents) with an explicit ISO currency code and use server-side decimal-safe calculation.

## Production entities

A real commerce data model may require:
- Product and ProductVariant;
- Price and Promotion;
- Inventory and Reservation;
- Customer and Session;
- Cart and CartLine;
- Address and DeliveryOption;
- TaxQuote and ShippingQuote;
- Order and OrderLine;
- PaymentIntent/Transaction and Refund;
- IdempotencyRecord and AuditEvent.

Define ownership, retention, constraints, state transitions and transaction boundaries before introducing persistence.
