import H2 from "./H2";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Form() {
  const [isInputempty, setIsInputempty] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    for (const [key, value] of Object.entries(data)) {
      if (value === "") {
        setIsInputempty(true);
        return;
      }
    }
    console.log(data);

    event.target.reset();
  };

  return (
    <section className="justify-between px-8 md:px-[6.0625rem] xl:flex xl:px-[10.25rem]">
      <H2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          ease: "easeInOut",
          stiffness: 50,
          damping: 10,
          mass: 0.5,
        }}
      >
        Connect with us
      </H2>
      <motion.form
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          ease: "easeInOut",
          stiffness: 50,
          damping: 10,
          mass: 0.5,
        }}
        className="flex flex-1 flex-col md:ml-24"
        onSubmit={handleSubmit}
      >
        <Input type="text" label="Name" emptydata={isInputempty}></Input>
        <Input type="email" label="Email" emptydata={isInputempty}></Input>
        <Input type="message" label="Message" emptydata={isInputempty}></Input>
        <Button type="submit" className="ml-auto px-7 py-8" />
      </motion.form>
    </section>
  );
}
