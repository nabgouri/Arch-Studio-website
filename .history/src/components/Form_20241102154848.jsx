import H2 from "./H2";
import Input from "./Input";
export default function Form() {
  return (
    <section className="px-8">
      <H2>Connect with us</H2>
      <form className="divide-[#1B1D23]">
        <Input type="text" label="Name"></Input>
        <Input type="email" label="Email"></Input>
        <Input type="message" label="Message"></Input>
      </form>
    </section>
  );
}
