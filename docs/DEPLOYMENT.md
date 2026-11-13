# Deployment

This is a static Vite application.

## Build
```bash
npm ci
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static hosting provider. Configure the provider to serve `index.html` as the site entry point.

## Release checks
- Confirm the production build succeeds.
- Test product rendering and all cart interactions.
- Verify image paths and responsive layouts.
- Confirm no private keys or personal data are included in the bundle.

A deployed static build remains a demo. It does not add a backend, persistent cart, or secure checkout.
