export default function Input({ label, type }) {
  if (type === "message") {
    return <textarea name="message" placeholder={label}></textarea>;
  } else {
    return <input type={type} placeholder={label} />;
  }
}
