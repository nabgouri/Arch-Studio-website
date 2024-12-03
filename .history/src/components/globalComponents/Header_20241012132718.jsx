import archLogo from ".../assets/Arch 3.svg";
export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between p-8">
      <img src={archLogo} alt="site logo" />
      <svg
        width="24"
        height="17"
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <rect id="Rectangle" width="24" height="3" fill="#1B1D23" />
          <rect
            id="Rectangle Copy 2"
            y="7"
            width="24"
            height="3"
            fill="#1B1D23"
          />
          <rect
            id="Rectangle Copy 3"
            y="14"
            width="24"
            height="3"
            fill="#1B1D23"
          />
        </g>
      </svg>
    </header>
  );
}
