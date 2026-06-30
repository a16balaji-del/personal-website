import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer
      className="motion-rise flex flex-col items-start justify-between gap-8 bg-pine px-4 py-12 text-cream sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:px-[4.5rem] lg:py-20"
      id="contact"
    >
      <div>
        <h2 className="section-title mb-7 text-cream">Say Hello!</h2>
        <p className="max-w-[42rem] text-base leading-7 text-cream sm:text-lg">
          Open to discuss groundbreaking solutions, thoughtful design systems, and films worth making.
        </p>
      </div>
      <SocialLinks />
    </footer>
  );
}
