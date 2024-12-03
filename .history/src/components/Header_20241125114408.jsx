import { useState } from "react";
import archLogo from "../assets/Arch 3.svg";
import NavModal from "./NavModal";
import NavList from "./navList";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function openNavHandler() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="container relative mx-auto flex items-center justify-start p-8 md:px-24 md:py-14 md:before:absolute md:before:left-20 md:before:top-0 md:before:block md:before:h-[6.5rem] md:before:w-[0.125rem] md:before:bg-[#c8ccd8] xl:mx-0 xl:px-[10.25rem]">
        <NavList
          ulClassName="hidden"
          className="block md:flex md:gap-[4.875rem] xl:gap-[5.875rem]"
          archLogo={archLogo}
        />
        <svg
          onClick={openNavHandler}
          className="md:hidden"
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <rect id="Rectangle" width="24" height="3" fill="#1B1D23" />
            <rect
              id="Rectangle Copy 2"
              y="7"
              width="24"
              height="3"
              fill="#1B1D23"
            />
            <rect
              id="Rectangle Copy 3"
              y="14"
              width="24"
              height="3"
              fill="#1B1D23"
            />
          </g>
        </svg>
        {isOpen && <NavModal openNavHandler={openNavHandler} />}
      </header>
    </>
  );
}
