import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
export default function Button({
  children,
  className,
  pathLink,
  strockeBlack,
  ...spread
}) {
  if (!pathLink)
    return (
      <button
        {...spread}
        className={twMerge(
          "flex items-center gap-6 bg-[#1b1d23] px-8 py-6 text-lg font-bold leading-6 text-white hover:bg-[#60636D] active:bg-[#C8CCD8]",
          className,
        )}
      >
        {pathLink ? <Link to={pathLink}>{children}</Link> : children}
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1L24 10L15 19"
            stroke={strockeBlack ? strockeBlack : "white"}
            strokeWidth="2"
          />
          <path
            d="M0 10H24"
            stroke={strockeBlack ? strockeBlack : "white"}
            strokeWidth="2"
          />
        </svg>
      </button>
    );
  else {
    <Link to={pathLink}>{children}</Link>;
  }
}
