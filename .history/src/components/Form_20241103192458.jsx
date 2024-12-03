import H2 from "./H2";
import Input from "./Input";
import Button from "./Button";
export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    event.target.reset();
  };
  return (
    <section className="justify-between px-8 md:px-[6.0625rem] xl:flex xl:px-[10.25rem]">
      <H2>Connect with us</H2>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Name"></Input>
        <Input type="email" label="Email"></Input>
        <Input type="message" label="Message"></Input>
        <Button type="submit" className="ml-auto px-7 py-8" />
      </form>
    </section>
  );
}
