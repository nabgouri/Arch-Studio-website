import NavList from "./navList";
const NavModal = function NavModal() {
  return (
    <div className="absolute right-0 top-[97px] w-[91.47%]">
      <NavList
        ulClassName="px-12 pt-10 pb-[2.625rem] bg-[#EEEFF4] gap-4 items-start"
        navLinkClass="font-bold text-[2rem] leading-10 text-[#1b1d23]"
      ></NavList>
    </div>
  );
};
export default NavModal;
