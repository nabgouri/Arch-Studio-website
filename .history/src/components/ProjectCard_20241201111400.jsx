import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export default function ProjectCard({
  title,
  portfolioLink,
  backgroundImage,
  year,
  className,
}) {
  return (
    <motion.li
      initial={{
        opacity: 0,
        rotateY: 90,
        x: -50,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        rotateY: 0,
        x: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 60,
          damping: 12,
          duration: 0.5,
        },
      }}
      viewport={{ once: false, amount: 0.4 }}
      className={twMerge(
        "bg-cover bg-center bg-no-repeat pb-6 pl-6 pr-4 pt-[9.5625rem]",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div>
        <h3 className="text-[2rem] font-bold leading-10 text-white">{title}</h3>
        <span className="text-lg font-medium leading-6 text-white">
          {portfolioLink ? portfolioLink : year}
        </span>
      </div>
    </motion.li>
  );
}
