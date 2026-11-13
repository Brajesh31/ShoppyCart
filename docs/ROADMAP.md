# Roadmap

## Phase 1: Frontend correctness
- [x] Centralize cart transitions in a pure reducer.
- [x] Handle invalid and unknown catalog identifiers safely.
- [x] Count item quantities rather than distinct cart rows.
- [x] Add explicit unavailable checkout state.
- [x] Add reducer and calculation tests.
- [x] Add lint configuration and CI validation.
- [x] Add responsive and reduced-motion styles.
- [ ] Add browser component smoke tests when a suitable DOM test environment is introduced.
- [ ] Improve product image optimization and catalog browsing UX.

## Phase 2: Product requirements
- [ ] Define catalog and variant model.
- [ ] Define currency, price and promotion model.
- [ ] Define stock and reservation semantics.
- [ ] Define customer, cart and order state machines.
- [ ] Define tax/shipping calculation and validation rules.
- [ ] Define checkout cancellation and failure behaviour.

## Phase 3: Backend foundation
- [ ] Trusted customer identity and sessions.
- [ ] Server-owned catalog/pricing API.
- [ ] Persistent customer cart.
- [ ] Inventory verification and reservation.
- [ ] Order creation with idempotency.
- [ ] Customer data and privacy controls.

## Phase 4: Payments and operations
- [ ] Payment provider checkout session.
- [ ] Authenticated webhook verification.
- [ ] Duplicate/out-of-order payment event handling.
- [ ] Refund, cancellation and order status lifecycle.
- [ ] Audit, monitoring, alerting and incident response.
- [ ] Backup/restore and data-retention policy.
- [ ] Independent security and financial-flow review.

Do not describe the project as an online store that can accept orders until the backend, payment and fulfillment phases are implemented and tested.
