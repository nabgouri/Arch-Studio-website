import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <article className="overflow-x-hidden font-Spartan">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </article>
  );
}
