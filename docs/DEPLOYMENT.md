# Deployment Guide

## Hosting model

ShoppyCart is a client-rendered Vite application. A production build is static and can be hosted on any static web host that serves HTML, CSS, JavaScript and image assets.

## Build

```bash
npm ci
npm run lint
npm test
npm run build
```

The deployable output is `dist/`.

## Local production preview

```bash
npm run preview
```

Use the URL printed by Vite to inspect the generated site.

## Static hosting configuration

- Publish the contents of `dist/`.
- Set the hosting document root to the published directory.
- Serve `index.html` as the default document.
- Configure HTTPS.
- Confirm all emitted asset URLs resolve.
- If hosted under a nested path, set Vite's `base` option deliberately and verify the built asset paths.
- No server-side route fallback is currently required beyond the single page, but retain index fallback if hosting configuration requires it.

## Environment variables and secrets

The current project requires no environment variables and has no API keys. Do not add secrets to the Vite client bundle. Any variable prefixed with `VITE_` is exposed to browser code at build time.

## Production scope warning

A static deployment does not add accounts, persistence, inventory checks, server-side prices, order management or secure checkout. The checkout button remains disabled. Do not accept payments or customer data through this prototype.

## Release validation

- npm ci completed from the committed lockfile.
- ESLint passes.
- Reducer tests pass.
- Vite production build succeeds.
- Product images and logo resolve.
- Cart add/update/remove behaviour is manually verified.
- Mobile layout, focus visibility and reduced-motion rules are checked.
- No secrets, customer information or payment data are in the bundle.
