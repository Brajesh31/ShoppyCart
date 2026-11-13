# Troubleshooting

## npm install differs from the lockfile

Use the committed lockfile:

```bash
npm ci
```

If a dependency is intentionally changed, update `package-lock.json` with npm and commit both files. Do not add another lockfile.

## Vite development server does not start

Confirm Node.js and npm are installed, dependencies are present, and port 5173 is available. Run:

```bash
npm run dev
```

Use the exact local URL printed by Vite.

## Product images do not load

Check the explicit imports in `src/dummy-products.js` and confirm each corresponding file exists in `src/assets/`. Vite resolves imported assets during build. Do not replace a local import with a machine-specific absolute path.

## Cart button count seems wrong

The cart badge is the total unit count, not the number of unique product rows. For example, quantity 2 of one item and quantity 3 of another should display 5.

## Cart total does not match

The total is calculated from each line's unit price multiplied by its quantity. Prices are static catalog values and displayed in USD. This is not a backend price quote.

## Cart resets after refresh

That is expected. Cart state is currently in memory and is not persisted to localStorage or a backend.

## Checkout is disabled

Checkout is not implemented. The project has no order API, payment integration, customer session or server-side price/inventory checks. Do not attempt to treat the cart as an order.

## Dialog does not open

Confirm `index.html` includes the `#modal` portal target and that Header renders CartModal. The modal uses the browser's native HTML dialog API.

## Lint fails

Run:

```bash
npm run lint
```

The project includes a checked-in ESLint configuration. Resolve unused variables and hook rule violations rather than disabling the entire lint job.

## Tests fail

Run:

```bash
npm test
```

The reducer tests use Node's built-in test runner and do not require a browser. Check the failing action, fixture and expected immutable state transition.

## Production build fails

Run:

```bash
npm run build
```

Check missing imports, CSS or JSX errors, and verify all local product image assets are committed.
