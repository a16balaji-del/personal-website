import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeSocials } from "@/components/HomeSocials";
import { HomeWorksPreview } from "@/components/HomeWorksPreview";
import { Intro } from "@/components/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <HomeWorksPreview />
        <HomeSocials />
      </main>
    </>
  );
}
