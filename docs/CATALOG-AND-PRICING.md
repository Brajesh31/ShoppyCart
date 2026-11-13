# Product Catalog and Pricing

## Current catalog source

The catalog is defined in `src/dummy-products.js` as the exported `DUMMY_PRODUCTS` array. Each product is a plain JavaScript object with the following fields:

| Field | Type | Current purpose |
| --- | --- | --- |
| `id` | string | Stable local cart/catalog identifier |
| `image` | imported asset URL | Bundled product image |
| `title` | string | Product display name |
| `price` | number | Illustrative unit price in USD |
| `description` | string | Static product copy |

The current fixture collection contains six clothing items:
1. Majestic Vintage Mocha Overcoat, $129.99.
2. Enchanting Blush Dream Gown, $189.99.
3. Vintage Sunshine Rain Jacket, $49.99.
4. Classic Merlot Business Suit, $249.99.
5. Ethereal Moonlight Evening Dress, $159.99.
6. Pioneer Rugged Denim Jacket, $79.99.

These are frontend sample values, not live inventory or offers.

## Catalog-to-cart mapping

When an item is added, the cart reducer uses the catalog record to create a cart row:
- product `id` remains the cart line identifier;
- product `title` becomes cart `name`;
- product `price` is copied into the cart row;
- initial `quantity` is one.

Adding an existing product increments its quantity rather than creating a duplicate line. The current cart row stores a copy of the price and name at add time. This is acceptable for a static demo, but a real transaction must never rely on a price supplied by the browser.

## Image assets

Product image imports are explicit in `src/dummy-products.js`. Vite resolves those imports into production asset URLs. Keep imported file paths synchronized with the filenames in `src/assets/`.

## Data-quality expectations for future catalog work

- IDs must be unique and stable.
- Prices must be finite and non-negative.
- Titles and descriptions should be meaningful text.
- Images must exist and have appropriate dimensions/format.
- Product records must not contain private supplier/customer data.
- Tests should catch duplicate IDs, missing titles, invalid prices and unresolved imports.

## Production catalog requirements

A real store needs a server-owned catalog and pricing model, including:
- canonical product and variant IDs;
- currency and integer minor-unit price representation;
- sale price and promotion rules with start/end dates;
- stock and availability;
- product status and publication lifecycle;
- tax category and shipping attributes;
- image/media metadata and rights;
- catalog version or updated timestamp.

The server must recalculate prices at checkout. Never accept the browser's cart price or total as authoritative.
