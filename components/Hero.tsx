import Image from "next/image";

export function Hero() {
  return (
    <section className="text-center" id="home">
      <div className="bg-cream px-5 py-9 sm:py-11">
        <h1 className="motion-rise text-[2.75rem] font-extrabold leading-none text-pine sm:text-[3.35rem]">
          Aditya Balaji
        </h1>
      </div>
      <div className="motion-scale group relative h-[22rem] w-full overflow-hidden sm:h-[31rem] lg:h-[39rem]">
        <Image
          src="/assets/hero.png"
          alt="Portrait of Aditya Balaji in a cinematic outdoor setting"
          fill
          priority
          sizes="100vw"
          className="image-zoom object-cover"
          style={{ objectPosition: "center 22%" }}
        />
      </div>
    </section>
  );
}
