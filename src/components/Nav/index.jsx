import React from "react";
import { NavLink } from "react-router";
import styles from "./nav.module.css";

export default function index() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
}
