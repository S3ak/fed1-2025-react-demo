import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph";

function createRandomColor() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}

function App() {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState("Orange man is disrespectful");
  const [color, setColor] = useState("#8f8f22");

  function handleChangeColor() {
    let newColor = createRandomColor();

    setColor(newColor);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Paragraph>
          Edit <code>src/App.jsx</code> and save to test HMR
        </Paragraph>

        <h2>Dynamic Paragraph</h2>
        <Paragraph>{content}</Paragraph>

        <button onClick={() => setContent("Big Z is on their own")}>
          Change content
        </button>
      </div>

      <section
        style={{
          backgroundColor: color,
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <h2>Change the color of this section background color</h2>

        <button onClick={handleChangeColor}>Change color</button>
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
