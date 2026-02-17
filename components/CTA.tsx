import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section
      id="kontakt"
      aria-label="Kontakt oss"
      className="relative overflow-hidden bg-primary py-24"
    >
      {/* Subtle gradient blob */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
            Vil du vite mer?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/80">
            Vi søker pilotsykehus, kommuner og familier som vil teste
            plattformen tidlig. Ta kontakt — vi svarer raskt.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:steffen@lucamedtech.no"
              className="inline-block rounded-[var(--radius-xl)] bg-accent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[var(--shadow-lg)]"
            >
              Send e-post &rarr;
            </a>
            <a
              href="tel:+4746633385"
              className="inline-block rounded-[var(--radius-xl)] border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              +47 466 333 85
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
