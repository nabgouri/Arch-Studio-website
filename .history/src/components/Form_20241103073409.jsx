import H2 from "./H2";
import Input from "./Input";
import Button from "./Button";
export default function Form() {
  return (
    <section className="px-8 xl:flex justify-between">
      <H2>Connect with us</H2>
      <form>
        <Input type="text" label="Name"></Input>
        <Input type="email" label="Email"></Input>
        <Input type="message" label="Message"></Input>
        <Button className="ml-auto px-7 py-8" />
      </form>
    </section>
  );
}
