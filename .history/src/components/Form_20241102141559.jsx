import H2 from "./H2";
import Input from "./Input";
export default function Form() {
  return (
    <section classname=' px-8'>
      <H2>Connect with us</H2>
      <form className=" space-y-11">
        <Input type="text" label="Name"></Input>
        <Input type="email" label="Email"></Input>
        <Input type="message" label="Message"></Input>
      </form>
    </>
  );
}
