import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
export default function H2({ children, className, ...spread }) {
  return (
    <motion.h2
      {...spread}
      className={twMerge(
        `mb-6 text-5xl font-bold leading-[3.3rem] -tracking-[1.71px] text-[#1b1d23] md:text-7xl md:leading-[4rem] md:-tracking-[2px]`,
        className,
      )}
    >
      <Balancer>{children}</Balancer>
    </motion.h2>
  );
}
