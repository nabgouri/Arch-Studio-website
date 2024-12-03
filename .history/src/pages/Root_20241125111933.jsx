import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <article className="md:before:position: font-Spartan md:before:absolute md:before:block md:before:h-[6.5rem] md:before:w-[0.125rem] md:before:bg-[#ccd8c8]">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </article>
  );
}
