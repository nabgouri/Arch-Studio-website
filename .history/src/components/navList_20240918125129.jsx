import { NavLink } from "react-router-dom";
const navLinks = ["Portfolio", "About Us", "Contact"];
export default function navList() {
  return (
    <nav>
      <ul>
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <NavLink>{navLink}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
