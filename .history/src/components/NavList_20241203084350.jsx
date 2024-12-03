import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import archLogoDesktop from "../assets/Arch 2-desktop.svg";
const navLinks = [
  { title: "Portfolio", link: "portfolio" },
  { title: "About Us", link: "about" },
  { title: "Contact", link: "contact" },
];
export default function NavList({
  ulClassName,
  className,
  footerLogo,
  archLogo,
}) {
  return (
    <nav
      className={twMerge(
        "flex grow flex-col items-center gap-8 md:flex-row md:gap-10 xl:gap-[5.25rem]",
        className,
      )}
    >
      <NavLink to="/">
        {footerLogo ? (
          <img
            src={footerLogo}
            alt="site logo"
            className="-mt-[3.75rem] bg-white md:-mt-0"
          />
        ) : (
          <picture>
            <source media="(min-width: 1200px)" srcSet={archLogoDesktop} />
            <source media="(min-width: 768px )" srcSet={archLogo} />
            <img src={archLogo} />
          </picture>
        )}
      </NavLink>
      <ul
        className={twMerge(
          "flex flex-col items-center gap-8 md:flex md:flex-row md:gap-11 xl:gap-[3.75rem]",
          ulClassName,
        )}
      >
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
}
