export default function Input({ label, type }) {
  if (type === "message") {
    return (
      <textarea
        className="mb-11 border-b-[1px] border-[#1B1D23] pb-5 pr-[2.125rem] placeholder:border placeholder:text-[1.25rem] placeholder:text-[#c8ccd8] w-full"
        name="message"
        placeholder={label}
      ></textarea>
    );
  } else {
    return (
      <input
        className="mb-11 border-b-[1px] border-[#1B1D23] pb-5 pr-[2.125rem] placeholder:border placeholder:text-[1.25rem] placeholder:text-[#c8ccd8] w-full"
        type={type}
        placeholder={label}
      />
    );
  }
}
