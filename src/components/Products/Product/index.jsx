import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const API = "https://dummyjson.com/products/";

async function getProductById({ queryKey }) {
  if (!queryKey[1]) throw new Error("No product ID was found");

  const response = await fetch(API + queryKey[1]);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

export default function Product() {
  let { productId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: getProductById,
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <article>
      <section>
        <h2>A Product</h2>
      </section>

      <section>
        <div>
          <h1>{data.title}</h1>
          <strong>{data.price}</strong>
        </div>
      </section>
    </article>
  );
}
