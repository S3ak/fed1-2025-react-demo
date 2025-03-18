import Nav from "../Nav";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <article>
        <h2>My demo React Website</h2>
      </article>

      <Nav />
    </header>
  );
}
