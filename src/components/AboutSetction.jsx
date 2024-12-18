import Button from "./Button";
import H2 from "./H2";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/homeImages/aboutImage.png";
export default function AboutSetction() {
  const sectionVariants = {
    initial: { opacity: 0, y: -50 },
    inView: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="inView"
      transition={{
        duration: 0.6,
        delay: 0.2,
        type: "tween",
        ease: "easeInOut",
        stiffness: 50,
        damping: 10,
        mass: 0.5,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-[4.5625rem] bg-[rgba(0,0,0,0.35)] bg-cover bg-no-repeat px-8 py-[11.25rem] bg-blend-overlay md:mx-24 md:mb-[12.5rem] md:py-[10.5rem] xl:mx-[10.25rem] xl:pe-[29.75rem] xl:ps-[11.875rem]`}
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <H2 className="text-white">Small team, big ideas</H2>
      <Button pathLink="/about">About Us</Button>
    </motion.section>
  );
}
