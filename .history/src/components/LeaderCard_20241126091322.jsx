import { Link } from "react-router-dom";
import twitterLogo from "../assets/twiitter-icon.svg";
import linkdeinLogo from "../assets/linkdein-icon.svg";
export default function LeaderCard({ leader }) {
  const { img, name, role } = leader;
  return (
    <li>
      <div className="group relative inline-block cursor-pointer overflow-hidden">
        <img
          src={img}
          alt="profile image"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <div className="absolute left-1/2 top-1/2 flex translate-x-1/2 translate-y-1/2">
          <Link>
            <img src={twitterLogo} alt="twitter Logo" />
          </Link>
          <Link>
            <img src={linkdeinLogo} alt="Lindein logo" />
          </Link>
        </div>
      </div>
      <h3 className="mt-4 text-[2rem] font-bold leading-10 text-[#1b1d23]">
        {name}
      </h3>
      <span className="text-lg font-medium leading-6 text-[#1b1d23] opacity-75">
        {role}
      </span>
    </li>
  );
}
