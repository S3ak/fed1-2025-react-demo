import React from "react";
import { useState } from "react";
import classes from "./Button.module.css";

export default function Button({ children }) {
  const [count, setCount] = useState(0);

  return (
    <button
      className={classes.button}
      onClick={() => {
        console.log("Clicked");
        setCount((prevCount) => {
          return prevCount + 2;
        });
      }}
    >
      {children}
      <strong className={classes.info}>{count}</strong>
    </button>
  );
}
