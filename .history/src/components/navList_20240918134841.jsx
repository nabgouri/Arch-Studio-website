import { NavLink } from "react-router-dom";
const navLinks = ["Portfolio", "About Us", "Contact"];
export default function NavList() {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-8">
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <NavLink className="text-lg font-bold leading-6 text-[#7d828f]">
                {navLink}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
