import { useQuery } from "@tanstack/react-query";

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

      <section>
        {query.data?.map((product) => {
          return (
            <div key={product.id}>
              <div>{product.title}</div>
              <strong>{product.price}</strong>
            </div>
          );
        })}
      </section>
    </article>
  );
}
