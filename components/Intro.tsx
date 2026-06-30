import { ButtonLink } from "./ButtonLink";

export function Intro() {
  return (
    <section className="mx-auto max-w-[92rem] px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-[4.5rem]" id="about">
      <h2 className="motion-rise mb-8 text-[1.75rem] font-extrabold leading-tight text-ink sm:text-[2rem]">
        A designer that makes films
      </h2>
      <p className="motion-rise mx-auto max-w-[76rem] text-sm leading-relaxed text-ink sm:text-base">
        Hi, I am Aditya Balaji, a designer with the mind of a filmmaker. I look at core issues holistically and try to address the root of the problem. This approach is similar to filmmaking: sharing stories in an immersive way that gives audiences a whole new experience. I go beyond aesthetics and tap into innovation that can change the trajectory of the usual.
      </p>
      <div className="motion-rise mt-10 flex flex-wrap justify-center gap-5">
        <ButtonLink href="#" download>
          Download CV
        </ButtonLink>
        <ButtonLink href="/works" variant="secondary">
          Explore my work
        </ButtonLink>
      </div>
    </section>
  );
}
