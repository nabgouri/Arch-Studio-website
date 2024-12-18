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

        <div className="tansition-opacity absolute inset-0 flex items-center justify-center opacity-0 duration-300 group-hover:opacity-100">
          <div className="flex gap-8">
            <Link>
              <img src={linkdeinLogo} alt="twitter Logo" />
            </Link>
            <Link>
              <img src={twitterLogo} alt="Lindein logo" />
            </Link>
          </div>
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
