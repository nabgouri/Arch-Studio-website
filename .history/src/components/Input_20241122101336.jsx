import { twMerge } from "tailwind-merge";
export default function Input({ label, type, emptydata }) {
  let errorCLass = emptydata
    ? "border-[#df5656] placeholder:text-[#df5656] placeholder:opacity-50 relative "
    : null;

  if (type === "message") {
    return (
      <textarea
        className={twMerge(
          "w-full border-b-[1px] border-[#1B1D23] pb-5 pl-[2.125rem] placeholder:text-[1.25rem] placeholder:font-bold placeholder:text-[#c8ccd8] focus:border-b-4 focus:border-b-[#1b1d23] focus:placeholder:text-[#1b1d23] focus-visible:outline-none",
          errorCLass,
        )}
        name="message"
        placeholder={label}
      ></textarea>
    );
  } else {
    return (
      <div className="relative">
        <input
          className={twMerge(
            "mb-11 w-full border-b-[1px] border-[#1B1D23] pb-5 pl-[2.125rem] placeholder:text-[1.25rem] placeholder:font-bold placeholder:text-[#c8ccd8] focus:border-b-4 focus:border-b-[#1b1d23] focus:placeholder:text-[#1b1d23] focus-visible:outline-none",
            errorCLass,
          )}
          type={type}
          name={label.toLowerCase()}
          placeholder={label}
        />
        <span
          className={
            emptydata
              ? "absolute left-3/4 top-0 text-lg font-bold text-[#df5656]"
              : "hidden"
          }
        >
          Can&apos;t be empty
        </span>
      </div>
    );
  }
}
