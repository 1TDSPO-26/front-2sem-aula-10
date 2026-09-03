import { Outlet } from "react-router";
import Lampada from "./components/Lampada";

export default function App() {
  return (
    <>
      <Lampada />
      <Outlet />
    </>
  )
}
