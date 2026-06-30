import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Works() {
  return (
    <section className="section-shell" id="works">
      <div className="motion-rise mx-auto mb-10 max-w-[82rem] text-center lg:mb-12">
        <h2 className="section-title mb-7">My Works</h2>
        <p className="body-copy">
          This page includes a selection of my professional and personal projects. Each project is a deep dive into design skills, creative ability, strategy, and execution.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-[4.5rem]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            wide={index === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
