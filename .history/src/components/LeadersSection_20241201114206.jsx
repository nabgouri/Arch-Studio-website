import { LEADRS_INFO } from "../utility/cardsElements";
import LeaderCard from "../components/LeaderCard";
import H2 from "./H2";
import { motion } from "framer-motion";
export default function LeadersSection() {
  const sectionVariants = {
    initial: { opacity: 0, y: -100 },
    inView: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="inView"
      transition={{ type: "spring", stiffness: 50, damping: 12, duration: 0.7 }}
      className="justify-between px-8 md:px-[6.0625rem] xl:flex xl:px-[10.25rem]"
    >
      <H2 className="md:mb-12">The Leaders</H2>
      <ul className="grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-x-3 xl:gap-y-16">
        {LEADRS_INFO.map((leader, index) => {
          return <LeaderCard key={index} leader={leader}></LeaderCard>;
        })}
      </ul>
    </motion.section>
  );
}
