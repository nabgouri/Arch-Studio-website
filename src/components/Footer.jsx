import footerLogo from "../assets/footerLogo.svg";
import NavList from "./NavList";
import Button from "./Button";
export default function Footer() {
  return (
    <footer className="mt-[8.25rem] flex flex-col items-center gap-8 bg-[#f2f2f2] pb-12 md:mr-[9.75rem] md:flex-row md:justify-between md:gap-0 md:pb-0 xl:me-[18.25rem] xl:ms-[10.25rem] xl:mt-[12.5rem]">
      <NavList footerLogo={footerLogo}></NavList>
      <Button
        className="md:-me-[9.75rem] xl:-me-[7.875rem]"
        pathLink="/portfolio"
      >
        See Our Portfolio
      </Button>
    </footer>
  );
}
