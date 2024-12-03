import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
const SUPABASE_URL = "https://cujdcokjjculjibmtjnj.supabase.co";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        setisLoading(true)
        const response = await fetch(`${SUPABASE_URL}/rest/v1/projects`, {
          method: "GET",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorBody = await response.text();
          console.error("Error response:", errorBody);
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.error("Error:", error);
      }
      setisLoading(false)
    }
    fetchData();
  }, []);
  return (
    <main>
      <ul className="flex grid-cols-3 flex-col gap-6 px-8 xl:grid xl:gap-x-[1.875rem] xl:gap-y-8 xl:px-[10.25rem]">
        {projects.map((project) => {
          const { title, year, img_url, id } = project;
          return (
            <ProjectCard
              key={id}
              title={title}
              backgroundImage={img_url}
              year={year}
              className="xl:bg-right xl:pb-[2.4375rem] xl:pl-10 xl:pt-[28.5rem]"
            ></ProjectCard>
          );
        })}
      </ul>
    </main>
  );
}
