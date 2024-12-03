import { NavLink } from "react-router-dom";
import Button from "./Button";
const navLinks = ["Portfolio", "About Us", "Contact"];
export default function navList() {
  return (
    <nav>
      <ul>
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <NavLink className="text-lg font-bold leading-6">
                {navLink}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Button>See Our Portfolio</Button>
    </nav>
  );
}
