export default function Input({ label, type }) {
  if (type === "message") {
    return (
      <textarea
        className="mb-11 border-b-[1px] pb-5 pr-[2.125rem] placeholder:border placeholder:text-[1.25rem] placeholder:text-[#c8ccd8]"
        name="message"
        placeholder={label}
      ></textarea>
    );
  } else {
    return (
      <input
        className="divide-y-[1px]a space-y-11 pb-5 pr-[2.125rem] placeholder:border placeholder:text-[1.25rem] placeholder:text-[#c8ccd8]"
        type={type}
        placeholder={label}
      />
    );
  }
}
