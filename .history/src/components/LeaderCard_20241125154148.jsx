export default function LeaderCard({ leader }) {
  const { img, name, role } = leader;
  return (
    <li>
      <div className="z-50 h-full w-full hover:bg-black">
        <img src={img} alt="profile image" className="z-0" />
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
