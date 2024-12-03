import footerLogo from "../assets/footerLogo.svg";
import NavList from "../utilityComponetnents/NavList";
import Button from "../utilityComponetnents/Button";
export default function Footer() {
  return (
    <footer className="mt-[8.25rem] flex flex-col items-center gap-8 bg-[#f2f2f2] pb-12">
      <img
        src={footerLogo}
        alt="site logo"
        className="-mt-[3.75rem] bg-white"
      />
      <NavList></NavList>
      <Button>See Our Portfolio</Button>
    </footer>
  );
}
