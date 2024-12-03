import Button from "./Button";
export default function OfficeInfo({ officeDetail }) {
  const { title, mail, adress, phone } = officeDetail;
  return (
    <div className="items-center justify-between md:flex xl:flex-col xl:items-start">
      <div>
        <h3 className="mb-[0.875rem] text-lg font-bold leading-9 text-[#60636D]">
          {title}
        </h3>
        <ul>
          <li className="text-lg font-medium leading-6 text-[#60636D]">
            Mail :{mail}
          </li>
          <li className="text-lg font-medium leading-6 text-[#60636D]">
            Adress : {adress}
          </li>
          <li className="mb-10 text-lg font-medium leading-6 text-[#60636D]">
            Phone : {phone}{" "}
          </li>
        </ul>
      </div>

      <Button
        className="bg-white p-0 text-[#1b1d23] hover:bg-none hover:text-[#1b1d23] hover:underline hover:decoration-[#1b1d23] active:bg-none"
        strockeBlack="black "
      >
        View on Map
      </Button>
    </div>
  );
}
