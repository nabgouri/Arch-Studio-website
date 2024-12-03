import H2 from "./H2";
export default function Form() {
  return (
    <>
      <H2></H2>
      <form>
        <Input type="text" label="Name"></Input>
        <Input type="email" label="Email"></Input>
        <Input type="message" label="Message"></Input>
      </form>
    </>
  );
}
