import type { Project } from "@/data/portfolio";
import { MediaFrame } from "./MediaFrame";

type FeaturedCaseStudyProps = {
  caseStudy: Project;
};

export function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  const linkLabel = caseStudy.linkHref ? (
    <a
      className="underline decoration-[#e4a06e] decoration-2 underline-offset-4 transition-colors hover:text-[#e4a06e]"
      href={caseStudy.linkHref}
      rel="noreferrer"
      target="_blank"
    >
      {caseStudy.linkLabel}
    </a>
  ) : (
    caseStudy.linkLabel
  );

  return (
    <section className="section-shell grid gap-6" id={caseStudy.id}>
      <h2 className="section-title motion-rise">{caseStudy.detailTitle}</h2>
      {caseStudy.image ? (
        <MediaFrame
          image={caseStudy.image}
          className="motion-scale aspect-video rounded-[24px] sm:rounded-[39px]"
          priority={caseStudy.id === "cold-summit"}
          sizes="(max-width: 1023px) calc(100vw - 2.5rem), 82rem"
        />
      ) : null}
      {caseStudy.linkLabel ? (
        <p className="motion-rise text-lg font-extrabold leading-7 text-pine">{linkLabel}</p>
      ) : null}
      <p className="body-copy motion-rise max-w-none">{caseStudy.description}</p>
      {caseStudy.highlights ? (
        <ul className="motion-rise grid gap-3 pl-5 text-[1.0625rem] leading-relaxed text-muted">
          {caseStudy.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

type AdditionalCasesProps = {
  caseStudies: Project[];
};

export function AdditionalCases({ caseStudies }: AdditionalCasesProps) {
  return (
    <section className="section-shell grid gap-5 md:grid-cols-2" aria-label="Additional project summaries">
      {caseStudies.map((caseStudy) => (
        <article
          className="interactive-lift motion-rise rounded-3xl border-2 border-pine/20 p-5 hover:border-pine/35 hover:bg-soft/40 sm:p-8"
          id={caseStudy.id}
          key={caseStudy.id}
        >
          <h2 className="mb-4 text-[1.45rem] font-extrabold leading-tight sm:text-2xl lg:text-[2rem]">
            {caseStudy.title}
          </h2>
          {caseStudy.linkLabel ? (
            <p className="mb-3 text-base font-extrabold leading-7 text-pine">
              {caseStudy.linkHref ? (
                <a
                  className="underline decoration-[#e4a06e] decoration-2 underline-offset-4 transition-colors hover:text-[#e4a06e]"
                  href={caseStudy.linkHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  {caseStudy.linkLabel}
                </a>
              ) : (
                caseStudy.linkLabel
              )}
            </p>
          ) : null}
          <p className="body-copy">{caseStudy.description}</p>
        </article>
      ))}
    </section>
  );
}
