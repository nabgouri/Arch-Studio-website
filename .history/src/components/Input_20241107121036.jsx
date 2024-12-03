import { twMerge } from "tailwind-merge";

export default function Input({ label, type, emptydata }) {
  let errorCLass = emptydata
    ? " border-[#df5656] before:block placeholder:text-[#df5656] placeholder:opacity-50  "
    : null;
  if (type === "message") {
    return (
      <textarea
        className={twMerge(
          "w-full border-b-[1px] border-[#1B1D23] pb-5 pl-[2.125rem] placeholder:border placeholder:text-[1.25rem] placeholder:text-[#c8ccd8]",
          errorCLass,
        )}
        name="message"
        placeholder={label}
      ></textarea>
    );
  } else {
    return (
      <input
        className={twMerge(
          "mb-11 w-full border-b-[1px] border-[#1B1D23] pb-5 pl-[2.125rem] placeholder:border placeholder:text-[1.25rem] placeholder:text-[#c8ccd8]",
          errorCLass,
        )}
        type={type}
        name={label.toLowerCase()}
        placeholder={label}
      />
    );
  }
}
