# Asset Inventory

## Product images

The following imported assets are referenced by `src/dummy-products.js`:

| File | Product | Approx. bytes |
| --- | --- | ---: |
| `src/assets/mocha-overcoat.jpg` | Majestic Vintage Mocha Overcoat | 116,732 |
| `src/assets/dream-gown.jpg` | Enchanting Blush Dream Gown | 127,909 |
| `src/assets/rain-jacket.jpg` | Vintage Sunshine Rain Jacket | 170,781 |
| `src/assets/merlot-suit.jpg` | Classic Merlot Business Suit | 78,619 |
| `src/assets/moonlight-dress.jpg` | Ethereal Moonlight Evening Dress | 70,563 |
| `src/assets/denim-pioneer.jpg` | Pioneer Rugged Denim Jacket | 199,232 |

These images are imported by the JS catalog, so Vite includes them in the built asset graph.

## Public branding asset

| File | Approx. bytes | Use |
| --- | ---: | --- |
| `public/logo.png` | 307,314 | Header logo and favicon |

The header uses `/logo.png`. Confirm the image source and usage rights before external commercial reuse.

## Screenshots

| File | Approx. bytes | Purpose |
| --- | ---: | --- |
| `screenshots/LandingPage.png` | 828,552 | UI reference snapshot |
| `screenshots/ShoppingCartModal.png` | 188,094 | Cart modal reference snapshot |

Screenshots are documentation/reference artifacts. They are not loaded by the runtime app.

## Asset maintenance

- Confirm licence/permission for product photography and logo.
- Optimize images to appropriate display sizes and formats.
- Preserve readable image quality and useful alt text.
- Do not add private customer product photographs or unlicensed third-party content.
- Verify output paths after `npm run build`.
