export default function Input({ label, type }) {
  errorCLass = " border-[#df5656] before:block placeholder: ";
  if (type === "message") {
    return (
      <textarea
        className="w-full border-b-[1px] border-[#1B1D23] pb-5 pl-[2.125rem] placeholder:border placeholder:text-[1.25rem] placeholder:text-[#c8ccd8]"
        name="message"
        placeholder={label}
      ></textarea>
    );
  } else {
    return (
      <input
        className="mb-11 w-full border-b-[1px] border-[#1B1D23] pb-5 pl-[2.125rem] placeholder:border placeholder:text-[1.25rem] placeholder:text-[#c8ccd8]"
        type={type}
        name={label.toLowerCase()}
        placeholder={label}
      />
    );
  }
}
