import type { Project } from "@/data/portfolio";
import type { CSSProperties } from "react";
import { MediaFrame } from "./MediaFrame";

type ProjectCardProps = {
  project: Project;
  index?: number;
  wide?: boolean;
};

export function ProjectCard({ project, index = 0, wide = false }: ProjectCardProps) {
  return (
    <article
      className={`interactive-lift motion-rise flex min-h-[30rem] flex-col justify-start rounded-[2rem] bg-pine p-6 text-cream shadow-[0_18px_48px_rgba(20,24,23,0.08)] hover:shadow-[0_24px_58px_rgba(20,24,23,0.18)] sm:min-h-[34rem] sm:p-9 lg:rounded-figma lg:p-11 ${
        wide ? "mx-auto w-full max-w-[34rem] lg:col-span-2" : ""
      }`}
      style={{ "--motion-delay": `${120 + index * 70}ms` } as CSSProperties}
    >
      <MediaFrame
        image={project.image}
        className="mb-8 sm:mb-10 lg:mb-11"
        sizes={
          wide
            ? "(max-width: 767px) calc(100vw - 4rem), 34rem"
            : "(max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 42vw, 38rem"
        }
      />
      <div className="flex flex-1 flex-col">
        <h3 className="mb-5 text-center text-[1.35rem] font-extrabold leading-tight sm:mb-6 sm:text-2xl lg:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="mb-8 text-base leading-relaxed text-cream sm:text-[1.0625rem]">
          {project.summary}
        </p>
        <a
          className="mt-auto w-fit border-b-2 border-mint pb-1 font-bold transition-colors duration-300 hover:text-mint"
          href={project.href}
        >
          Read case study
        </a>
      </div>
    </article>
  );
}
