import { useQuery } from "@tanstack/react-query";
import styles from "./products.module.css";
import { Link } from "react-router";

const API = "https://dummyjson.com/products";

export default function Products() {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(API);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.products;
    },
  });

  if (query.isLoading) {
    return <div>Loading....</div>;
  }

  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <article>
      <section>
        <h2>List of Products</h2>
      </section>

      <section className={styles.list}>
        {query.data?.map((product) => {
          return (
            <article className="p-8 bg-gray-600 rounded-3xl" key={product.id}>
              <Link to={`products/${product.id}`}>
                <h4 className={styles.title}>{product.title}</h4>
                <strong>{product.price}</strong>
              </Link>
            </article>
          );
        })}
      </section>
    </article>
  );
}
