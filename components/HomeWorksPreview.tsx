import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "@/data/portfolio";
import { ButtonLink } from "./ButtonLink";
import { MediaFrame } from "./MediaFrame";

const previewProjects = projects.slice(0, 2);

export function HomeWorksPreview() {
  return (
    <section className="mx-auto max-w-[92rem] px-5 pb-10 sm:px-8 lg:px-[4.5rem]">
      <div className="grid gap-10 md:grid-cols-2 md:gap-24">
        {previewProjects.map((project, index) => (
          <Link
            className="interactive-lift motion-rise mx-auto flex w-full max-w-[28rem] flex-col rounded-[3rem] bg-pine p-6 text-cream shadow-[0_18px_48px_rgba(20,24,23,0.1)] outline-none transition-colors hover:text-cream focus-visible:ring-4 focus-visible:ring-mint/60 sm:p-8"
            href={project.href}
            key={project.id}
            style={{ "--motion-delay": `${120 + index * 90}ms` } as CSSProperties}
            aria-label={`Open ${project.title} case study`}
          >
            <MediaFrame
              image={project.image}
              className="mb-8 aspect-[16/10] rounded-[22px] sm:rounded-[28px]"
              sizes="(max-width: 767px) calc(100vw - 4rem), 28rem"
            />
            <h3 className="mb-8 text-center text-xl font-extrabold leading-tight">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-cream/90">{project.summary}</p>
          </Link>
        ))}
      </div>

      <div className="motion-rise mt-12 flex flex-wrap justify-center gap-5">
        <ButtonLink href="/works">Explore more works</ButtonLink>
        <ButtonLink href="#contact" variant="secondary">
          Say Hello!
        </ButtonLink>
      </div>
    </section>
  );
}
