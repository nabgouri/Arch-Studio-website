import { NavLink } from "react-router-dom";
export default function navList() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Portfolio</NavLink>
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
