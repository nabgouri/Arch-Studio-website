import { NavLink } from "react-router-dom";
const navLinks = ["Portfolio", "About Us", "Contact"];
export default function navList() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink></NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </nav>
  );
}
