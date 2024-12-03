import { featuredProjects } from "../utility/cardsElements";
import H2 from "./H2";
import ProjectCard from "./ProjectCard";

export default function Cards() {
  return (
    <section className="px-8">
      <H2></H2>
      {featuredProjects.map((featuredProject, index) => {
        return (
          <ul key={index}>
            <ProjectCard featuredProject={featuredProject}></ProjectCard>
          </ul>
        );
      })}
    </section>
  );
}
