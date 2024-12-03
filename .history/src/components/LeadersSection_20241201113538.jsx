import { LEADRS_INFO } from "../utility/cardsElements";
import LeaderCard from "../components/LeaderCard";
import H2 from "./H2";
export default function LeadersSection() {
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    inView: { opacity: 1, y: 0 },
  };
  return (
    <section
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      className="justify-between px-8 md:px-[6.0625rem] xl:flex xl:px-[10.25rem]"
    >
      <H2 className="md:mb-12">The Leaders</H2>
      <ul className="grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-x-3 xl:gap-y-16">
        {LEADRS_INFO.map((leader, index) => {
          return <LeaderCard key={index} leader={leader}></LeaderCard>;
        })}
      </ul>
    </section>
  );
}
