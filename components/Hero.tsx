"use client";

import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section aria-label="Introduksjon" className="relative overflow-hidden pb-20 pt-32 md:pt-40">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-[var(--radius-xl)] bg-secondary/10 px-4 py-2">
            <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-success" />
            <span className="text-sm font-medium text-secondary">
              Norsk helseteknologi for diabetes
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-200 mb-6 font-serif text-4xl leading-tight text-primary md:text-5xl lg:text-6xl">
            Bedre diabeteshverdag — fra sykehuset til{" "}
            <em className="relative not-italic text-secondary">
              hjemmet
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent/40" />
            </em>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up delay-300 mb-8 max-w-lg text-lg leading-relaxed text-text-secondary">
            Én plattform som gir familier trygghet, barnehager kontroll,
            og klinikere dataen de trenger — uten manuell kopiering.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
            <a
              href="/kontakt"
              className="rounded-[var(--radius-xl)] bg-accent px-8 py-3.5 font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[var(--shadow-md)]"
            >
              Ta kontakt
            </a>
            <a
              href="#losningen"
              className="rounded-[var(--radius-xl)] border-2 border-primary/20 px-8 py-3.5 font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              Se hvordan
            </a>
          </div>
        </div>

        {/* Right: Phone */}
        <div className="animate-fade-in-up delay-500 flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
