import assert from "node:assert/strict";
import test from "node:test";
import { calculateCartTotal, createShoppingCartReducer, getCartItemCount } from "../src/store/cart-reducer.js";

const catalog = [
  { id: "coat", title: "Mocha Overcoat", price: 129.99 },
  { id: "gown", title: "Blush Dream Gown", price: 189.99 },
];
const reduce = createShoppingCartReducer(catalog);
const state = (items = []) => ({ items });

test("adds a known product with quantity one", () => {
  assert.deepEqual(reduce(state(), { type: "ADD_ITEM", payload: "coat" }).items,
    [{ id: "coat", name: "Mocha Overcoat", price: 129.99, quantity: 1 }]);
});

test("increments an existing product without duplicating its line", () => {
  const one = reduce(state(), { type: "ADD_ITEM", payload: "coat" });
  const two = reduce(one, { type: "ADD_ITEM", payload: "coat" });
  assert.equal(two.items.length, 1);
  assert.equal(two.items[0].quantity, 2);
});

test("adds a different product as another cart line", () => {
  const one = reduce(state(), { type: "ADD_ITEM", payload: "coat" });
  const two = reduce(one, { type: "ADD_ITEM", payload: "gown" });
  assert.deepEqual(two.items.map((item) => item.id), ["coat", "gown"]);
});

test("ignores unknown catalog product IDs without changing state", () => {
  const initial = state();
  assert.equal(reduce(initial, { type: "ADD_ITEM", payload: "missing" }), initial);
});

test("updates only the requested cart line", () => {
  const initial = state([
    { id: "coat", name: "Mocha Overcoat", price: 129.99, quantity: 1 },
    { id: "gown", name: "Blush Dream Gown", price: 189.99, quantity: 2 },
  ]);
  const next = reduce(initial, { type: "UPDATE_ITEM", payload: { productId: "coat", amount: 1 } });
  assert.equal(next.items[0].quantity, 2);
  assert.equal(next.items[1].quantity, 2);
  assert.equal(initial.items[0].quantity, 1);
});

test("removes a cart line when quantity reaches zero", () => {
  const initial = state([{ id: "coat", name: "Mocha Overcoat", price: 129.99, quantity: 1 }]);
  const next = reduce(initial, { type: "UPDATE_ITEM", payload: { productId: "coat", amount: -1 } });
  assert.deepEqual(next.items, []);
});

test("decrements quantity while keeping a positive remaining quantity", () => {
  const initial = state([{ id: "coat", name: "Mocha Overcoat", price: 129.99, quantity: 3 }]);
  const next = reduce(initial, { type: "UPDATE_ITEM", payload: { productId: "coat", amount: -1 } });
  assert.equal(next.items[0].quantity, 2);
});

test("ignores updates for missing cart lines", () => {
  const initial = state();
  assert.equal(reduce(initial, { type: "UPDATE_ITEM", payload: { productId: "missing", amount: 1 } }), initial);
});

test("ignores invalid quantity deltas", () => {
  const initial = state([{ id: "coat", name: "Mocha Overcoat", price: 129.99, quantity: 1 }]);
  assert.equal(reduce(initial, { type: "UPDATE_ITEM", payload: { productId: "coat", amount: 0.5 } }), initial);
  assert.equal(reduce(initial, { type: "UPDATE_ITEM", payload: { productId: "coat", amount: 0 } }), initial);
});

test("unknown action types preserve state", () => {
  const initial = state();
  assert.equal(reduce(initial, { type: "UNKNOWN" }), initial);
});

test("cart count sums total units, not distinct product rows", () => {
  assert.equal(getCartItemCount([
    { id: "coat", quantity: 2 },
    { id: "gown", quantity: 3 },
  ]), 5);
});

test("cart total sums each line's extended price", () => {
  assert.equal(calculateCartTotal([
    { id: "coat", price: 129.99, quantity: 2 },
    { id: "gown", price: 189.99, quantity: 1 },
  ]), 449.97);
});

test("empty cart count and total are zero", () => {
  assert.equal(getCartItemCount([]), 0);
  assert.equal(calculateCartTotal([]), 0);
});

test("derived calculations do not mutate the item array", () => {
  const items = [{ id: "coat", price: 129.99, quantity: 2 }];
  const snapshot = structuredClone(items);
  getCartItemCount(items);
  calculateCartTotal(items);
  assert.deepEqual(items, snapshot);
});
