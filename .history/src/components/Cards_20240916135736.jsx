import { featuredProjects } from "../utility/cardsElements";
import H2 from "./H2";

export default function Cards() {
  return (
    <section>
      <H2></H2>
      {featuredProjects.map((featuredProject, index) => {
        return (
          <ul key={index}>
            <li></li>
          </ul>
        );
      })}
    </section>
  );
}
