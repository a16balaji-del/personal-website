import { Header } from "@/components/Header";
import { HomeSocials } from "@/components/HomeSocials";

const sections = [
  {
    title: "The Origin",
    body:
      "It started with drawings and stories that had no rulebook. As a child, I was not just imagining things, I was reframing reality, sketching alternative versions of the world around me. What I did not know then was that this instinct, to question the existing and propose the possible, is exactly what strategic design is built on. That creative restlessness led me toward marketing during high school, drawn by how stories could shift perception and how positioning could change the way people relate to a product, a service, even an idea."
  },
  {
    title: "Building the Foundation",
    body:
      "That curiosity took me to the University of Waterloo, where I studied Arts and Business, a combination that gave me something rare: the ability to think holistically. I was not just learning how businesses operated, I was learning how people, culture, and commerce intersect. I built frictionless product photography, business plans, an marketing simulations, managed budgets, and worked on market positioning. It also sharpened the skills I still rely on today: research, critical thinking, communication, collaboration, and turning ambiguity into structured outcomes."
  },
  {
    title: "Taking Ownership",
    body:
      "By my third year, I stopped waiting for opportunities and started building them. As President of the Public Speaking Club, I applied marketing principles in a real organizational context, using social media, promotional graphics, and community management to grow membership. Beyond numbers, I focused on something more human: making people feel genuinely valued. I learned to listen to others' stories and reflect them back in a way that resonated, an early exercise in user-centered thinking, long before I had the vocabulary for it."
  },
  {
    title: "Entering the Field",
    body:
      "After graduation, I did not follow one path, I opened several simultaneously, and each one sharpened a different edge. At V Media, I worked directly with clients on digital marketing strategy, turning business challenges into campaigns that delivered measurable results. This grounded me in the commercial realities of design and communication. With Shot One Studio, I stepped behind the camera to document local businesses nominated for the Ontario Make Awards, capturing not just their products, but their purpose, their people, and their vision. This was storytelling as a strategic act: distilling a brand's identity into something visceral and human."
  },
  {
    title: "The Breakthrough: Designing Experiences at Scale",
    body:
      "Then came the work that changed everything. Joining Yes Toronto, an experience-based community built around meaningful human connection, placed me at the intersection of everything I had been building toward. Here, design was not a deliverable. It was a system. I organized and managed events for a community of over 1,000 members, developing a keen understanding of how designed experiences shape behavior, belonging, and loyalty. I created content ecosystems, promotional graphics, event recaps, long-form videos, and architected the community's values and kept people emotionally invested between touchpoints."
  },
  {
    title: "The Strategic Leap",
    body:
      "Everything I had built, the business instincts, the creative range, the community intelligence, the systems sensitivity, pointed toward one question: How do I make this scalable, strategic, and lasting? The answer was Milan. Enrolling in the Master in Strategic Design at Politecnico di Milano was not a pivot. It was a convergence. This program gives structure and depth to everything I have been doing intuitively. It transforms my guerrilla marketing instincts into systems thinking. It elevates my event and community work into strategy rooted in people's stories, and execution into design systems."
  },
  {
    title: "The Vision",
    body:
      "I believe innovation is not just a business strategy, it is a responsibility. The most powerful designs are the ones that make life quietly, meaningfully better for the people who encounter them. My path has been shaped by stories, systems, communities, and the constant desire to build something that matters. Strategic Design gives me the language, the tools, and the platform to do exactly that, at the frontier between design, management, and human experience."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[72rem]">
        <section className="grid gap-8 py-10 sm:py-12" id="about">
          <h1 className="motion-rise px-5 text-center text-[2rem] font-extrabold leading-tight text-pine sm:px-8 sm:text-[2.45rem]">
            About Me
          </h1>

          <img
            className="motion-scale h-auto w-full"
            src="/assets/about-portrait.png"
            alt="Aditya Balaji smiling outdoors in a park"
          />

          <p className="motion-rise px-5 text-sm leading-relaxed text-ink sm:px-8 sm:text-base">
            Some people find their path. Mine found me through stories, systems, and the stubborn belief that the world can be redesigned into something better.
          </p>

          <div className="grid gap-8 px-5 sm:px-8">
            {sections.map((section) => (
              <section className="motion-rise grid gap-3" key={section.title}>
                <h2 className="text-center text-xl font-extrabold leading-tight text-pine sm:text-2xl">
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink sm:text-base">{section.body}</p>
              </section>
            ))}
          </div>
        </section>
        <HomeSocials />
      </main>
    </>
  );
}
