# Accessibility Guidance

This document is an implementation guide, not a claim of WCAG conformance.

## Semantic structure

- `index.html` declares English as the document language.
- `Shop` uses a section heading and unordered product list.
- Each product is an article within a list item.
- Cart is displayed in a native HTML `dialog`.
- Product images use product titles as alternative text.
- Empty-cart feedback is exposed with `role="status"`.

## Keyboard use

The native dialog supports modal keyboard behaviour in modern browsers, including Escape to close. The Cart button opens the dialog using `showModal()`. Ensure focus remains visible and the Close action is reachable.

All interactive controls should be native buttons. Avoid clickable non-interactive containers.

## Accessible quantity controls

Each decrement and increment button receives a product-specific accessible name. Quantity is shown beside those controls. This prevents multiple minus/plus buttons from becoming indistinguishable in a screen reader.

## Focus and visual preferences

The stylesheet adds a visible `:focus-visible` outline. A `prefers-reduced-motion: reduce` rule disables most animations and transitions.

## Remaining review points

- The cart line item information should be checked in a screen reader for logical announcement order.
- Ensure colour contrast remains sufficient across the dark background and gold controls.
- Product descriptions should not rely on image content alone.
- Disabled checkout must be visibly and programmatically disabled.
- Test zoom and reflow at narrow viewport widths.
- Check that browser-native dialog focus is restored to the Cart trigger on close.

## Manual checklist

- [ ] Navigate catalog, Add to Cart, Cart and quantity buttons using only keyboard.
- [ ] Confirm focus outline is visible.
- [ ] Open and close native dialog with keyboard.
- [ ] Confirm Escape closes the dialog.
- [ ] Verify product images have useful alt text.
- [ ] Verify quantity controls announce product-specific labels.
- [ ] Check contrast and 200% zoom.
- [ ] Verify reduced-motion preferences.
