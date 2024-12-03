
const NavModal = function NavModal() {
  const navLinks = [
    { title: "Portfolio", link: "portfolio" },
    { title: "About Us", link: "about" },
    { title: "Contact", link: "contact" },
  ];
  return (
    <nav className="absolute right-0 top-[97px] w-[91.47%] bg-[#EEEFF4]">
      {/* <NavList
        ulClassName="px-12 pt-10 pb-[2.625rem]  gap-4 items-start"
        navLinkClass="font-bold text-[2rem] leading-10 text-[#1b1d23]"
      ></NavList> */}
      <ul>
        {navLinks.map((navLink, index) => {
          const { title, link } = navLink;
          return (
            <li key={index}>
              <NavLink
                to={`/${link}`}
                className="text-lg font-bold leading-6 text-[#7d828f] hover:text-[#1b1d23]"
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
