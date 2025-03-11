import "./App.css";
import Basic from "./components/Basic";
import Products from "./components/Products";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Products />
      </main>
    </>
  );
}

export default App;
