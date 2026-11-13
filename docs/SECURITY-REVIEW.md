# Security Review

**Review type:** source-level review of this frontend demonstration. Not a penetration test or compliance assessment.

## Executive assessment

ShoppyCart has a small browser-only surface. It is appropriate as a learning demonstration for React Context and reducer-based cart state. It is not a functioning commerce platform and must not accept customer/payment data or claim to create orders.

## Findings

| Priority | Finding | Current source | Action |
| --- | --- | --- | --- |
| High product boundary | No backend or trusted order flow | Entire project is Vite/React; no API routes | Keep checkout unavailable; add a server architecture before commerce work |
| High financial integrity | Prices and totals are client-side | `dummy-products.js` and cart reducer | Recalculate current prices server-side for any future checkout |
| Medium behaviour | Cart badge counted distinct rows rather than units | `Header.jsx` used `items.length` | Sum line quantities |
| Medium robustness | Unknown product ID could be used as an undefined catalog record | Reducer pushed `product.title` without checking product | Ignore unknown IDs safely |
| Medium API contract | Default context had misspelled `unpdateItemQuantity` property | `shopping-cart-context.jsx` | Correct method name to `updateItemQuantity` |
| Medium UX | Checkout button appeared enabled but did nothing | `Header.jsx` modal actions | Clearly label it unavailable and disable it |
| Low accessibility | Quantity controls had unlabeled +/- buttons | `Cart.jsx` | Add item-specific aria labels |
| Low responsive | Main layout lacked dedicated mobile rules | `index.css` | Add smaller-screen layout and dialog sizing |
| Maintenance | Lint script had no repository ESLint config | Package/config tree | Add an explicit ESLint configuration |
| Maintenance | CI ran build only | workflow | Add lint and reducer tests |
| Maintenance | README timestamp workflow ran on every push and hourly | workflow | Run manually or daily only |

## Changes included

- Pure reducer factory extracted into `src/store/cart-reducer.js`.
- Cart context now injects the product fixture into the reducer and removes unused state.
- Unknown product IDs and invalid quantity changes are safe no-ops.
- Cart count now sums units across all lines.
- Cart total calculation is shared and unit-tested.
- Checkout placeholder is disabled and labelled honestly.
- Cart dialog receives an accessible title association.
- Quantity controls have descriptive accessible names.
- Product listing has a labelled section.
- HTML page title and description identify the demo.
- Responsive and reduced-motion CSS rules added.
- ESLint configuration and automated reducer tests added.
- CI now runs lint, tests and build.

## Not implemented

No authentication, customer data, database, inventory, order processing, tax/shipping calculation, payments or order confirmation has been added. This is intentional; adding a payment button without a trusted backend would be misleading and unsafe.
