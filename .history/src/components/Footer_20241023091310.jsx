import footerLogo from "../assets/footerLogo.svg";
import NavList from "./navList";
import Button from "./Button";
export default function Footer() {
  return (
    <footer className="mt-[8.25rem] flex flex-col items-center gap-8 bg-[#f2f2f2] pb-12 md:mr-[9.75rem] md:w-[79.6875%] md:flex-row md:justify-between md:gap-0 md:pb-0 xl:mx-[10.25rem] xl:mt-[12.5rem] xl:justify-normal">
      <img
        src={footerLogo}
        alt="site logo"
        className="-mt-[3.75rem] bg-white md:-mt-0"
      />
      <NavList className=""></NavList>
      <Button className="md:-me-[9.75rem] xl:-me-[7.875rem] xl:justify-end">
        See Our Portfolio
      </Button>
    </footer>
  );
}
