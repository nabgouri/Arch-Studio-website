import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export default function ProjectCard({
  title,
  portfolioLink,
  backgroundImage,
  year,
  className,
}) {
  const liVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.7,
      },
    },
  };
  return (
    <motion.li
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
