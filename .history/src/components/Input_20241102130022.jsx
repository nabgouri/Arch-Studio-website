export default function Input({ label, type }) {
  return {type === 'message' ? <textarea name="message" placeholder={label} ></textarea> :  <input type={type} placeholder={label} /> };
}
