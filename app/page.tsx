import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Modules from "@/components/Modules";
import TrustBar from "@/components/TrustBar";
import Story from "@/components/Story";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Problem />
        <Modules />
        <TrustBar />
        <Story />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
