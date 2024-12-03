export default function Input({ label, type }) {
  if (type === "message") {
    return (
      <textarea
        className="placeholder:text-[1.25rem] placeholder:text-[#c8ccd8]"
        name="message"
        placeholder={label}
      ></textarea>
    );
  } else {
    return (
      <input
        className="placeholder:text-[1.25rem] placeholder:text-[#c8ccd8]"
        type={type}
        placeholder={label}
      />
    );
  }
}
