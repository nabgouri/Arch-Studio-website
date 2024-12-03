import { NavLink } from "react-router-dom";

const NavModal = function NavModal({ openNavHandler }) {
  const navLinks = [
    { title: "Portfolio", link: "portfolio" },
    { title: "About Us", link: "about" },
    { title: "Contact", link: "contact" },
  ];
  return (
    <nav className="absolute right-0 top-[97px] z-50 w-[91.47%] bg-[#EEEFF4] px-12 pb-[2.625rem] pt-10">
      {/* <NavList
        ulClassName="px-12 pt-10 pb-[2.625rem]  gap-4 items-start"
        navLinkClass="font-bold text-[2rem] leading-10 text-[#1b1d23]"
      ></NavList> */}
      <ul className="flex flex-col items-start gap-4">
        {navLinks.map((navLink, index) => {
          const { title, link } = navLink;
          return (
            <li key={index}>
              <NavLink
                to={`/${link}`}
                className="text-[2rem] font-bold leading-10 text-[1b1d23]"
                onClick={openNavHandler}
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavModal;
