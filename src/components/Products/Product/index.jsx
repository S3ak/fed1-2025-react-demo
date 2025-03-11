import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const API = "https://dummyjson.com/products/";

export default function Product() {
  let { productId } = useParams();

  const query = useQuery({
    queryKey: ["product", productId],
    queryFn: async ({ queryKey }) => {
      const response = await fetch(API + queryKey[1]);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    },
  });

  if (query.isLoading) {
    return <div>Loading....</div>;
  }

  if (query.isError) {
    return <div>Something went wrong</div>;
  }

  const product = query.data;

  return (
    <article>
      <section>
        <h2>A Product</h2>
      </section>

      <section>
        <div>
          <h1>{product.title}</h1>
          <strong>{product.price}</strong>
        </div>
      </section>
    </article>
  );
}
