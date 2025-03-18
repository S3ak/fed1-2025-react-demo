import { useParams } from "react-router";
import styles from "./product.module.css";

export async function clientLoader({ request }) {
  const response = await fetch(`https://dummyjson.com/products/${queryKey[1]}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}

export default function ProductRoute({ loaderData }) {
  const params = useParams();

  if (query.isLoading) return <div>loading....</div>;
  if (query.isError) return <div>nothing to see here</div>;

  return (
    <div className={styles.product}>
      <h4>{loaderData.data?.title}</h4>
      <strong>{loaderData.data?.price}</strong>
      <img src={loaderData.data?.images[0]} />
    </div>
  );
}
