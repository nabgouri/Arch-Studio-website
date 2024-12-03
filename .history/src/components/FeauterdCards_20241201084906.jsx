import { featuredProjects } from "../utility/cardsElements";
import H2 from "./H2";
import ProjectCard from "./ProjectCard";
import Button from "./Button";

export default function FeaturedCards() {
  return (
    <section className="xl: gap-y-[5.3125rem] px-8 md:grid md:grid-cols-3 md:px-24 xl:gap-y-16 xl:px-[10.25rem]">
      <H2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transtion={{
          type: "spring",
          duration: 0.5,
          delay: 0.2,
          stiffness: 40,
          mass: 0.4,
          damping: 10,
        }}
        viewport={{ once: true, amount: 0.4 }}
        className="self-center md:mb-0"
      >
        Featured
      </H2>
      <ol className="order-last col-span-full flex flex-col gap-6 xl:flex-row xl:gap-[1.875rem]">
        {featuredProjects.map((featuredProject, index) => {
          const { title, portfolioLink, img } = featuredProject;
          return (
            <ProjectCard
              key={index}
              title={title}
              portfolioLink={portfolioLink}
              backgroundImage={img}
              className="md:pb-12 md:pt-7 xl:pb-10 xl:pe-0 xl:ps-10 xl:pt-11"
            ></ProjectCard>
          );
        })}
      </ol>
      <Button
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transtion={{
          type: "spring",
          duration: 0.6,
          delay: 0.2,
          stiffness: 40,
          mass: 0.4,
          damping: 10,
        }}
        viewport={{ once: true, amount: 0.4 }}
        className="col-start-3 col-end-4 mt-6 w-full justify-center px-0 md:mt-0"
        pathLink="/portfolio"
      >
        See All
      </Button>
    </section>
  );
}
