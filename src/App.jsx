import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import Paragraph from "./components/Paragraph";

function App() {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState("Orange man is disrespectful");

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
      <h1>Vite + React</h1>
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

        <Button onClick={() => setContent("Big Z is on their own")}>
          My Button
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
