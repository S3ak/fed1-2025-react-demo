import { useState } from "react";

const API = "https://dummyjson.com/products";

export default function Products() {
  return (
    <article>
      <section>
        <h2>List of Products</h2>
      </section>

      <section>{/* We want to render our list of products here */}</section>
    </article>
  );
}
