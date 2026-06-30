import type { Project } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const linkLabel = project.linkHref ? (
    <a
      className="underline decoration-[#e4a06e] decoration-2 underline-offset-4 transition-colors hover:text-[#e4a06e]"
      href={project.linkHref}
      rel="noreferrer"
      target="_blank"
    >
      {project.linkLabel}
    </a>
  ) : (
    project.linkLabel
  );

  return (
    <article className="mx-auto grid max-w-[72rem] gap-7 px-0 py-10 sm:py-12" id={project.id}>
      <div className="motion-rise grid gap-4 text-center">
        <h1 className="text-[1.65rem] font-extrabold leading-tight text-pine sm:text-[2rem]">
          {project.detailTitle}
        </h1>
      </div>

      <div className="motion-scale overflow-hidden bg-soft">
        <img
          src={(project.detailImage ?? project.image).src}
          alt={(project.detailImage ?? project.image).alt}
          className="h-auto w-full"
        />
      </div>

      <div className="motion-rise grid gap-5 px-5 sm:px-12">
        {project.linkLabel ? (
          <p className="text-center text-sm font-extrabold leading-6 text-pine">
            {linkLabel}
          </p>
        ) : null}
        <p className="text-sm leading-relaxed text-ink sm:text-base">{project.description}</p>
      </div>

      <section className="motion-rise px-5 sm:px-12">
        <h2 className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-pine">
          Highlights
        </h2>
        <ul className="grid gap-2 pl-5 text-sm leading-relaxed text-ink sm:text-base">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      {project.gallery ? (
        <section className="motion-rise grid gap-6 pt-2">
          <div className="grid gap-5 px-5 sm:grid-cols-2 sm:px-0">
            {project.gallery.map((image, index) => (
              <figure
                className={`grid gap-2 ${
                  project.gallery && project.gallery.length % 2 === 1 && index === project.gallery.length - 1
                    ? "sm:col-span-2 sm:mx-auto sm:w-[48%]"
                    : ""
                }`}
                key={image.src}
              >
                <img src={image.src} alt={image.alt} className="h-auto w-full object-cover" />
                <figcaption className="px-1 text-xs leading-relaxed text-ink">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <SocialLinks className="motion-rise pt-5" size="sm" />
    </article>
  );
}
