import "../App.css";
import { Outlet } from "react-router";
import Nav from "../components/Nav";

export default function DefaultLayout() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
