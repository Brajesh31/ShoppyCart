export default function Shop({ children }) {
  return (
    <section id="shop" aria-labelledby="shop-heading">
      <h2 id="shop-heading">Elegant Clothing For Everyone</h2>
      <ul id="products">{children}</ul>
    </section>
  );
}
