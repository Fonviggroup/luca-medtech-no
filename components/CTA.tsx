import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-primary py-24"
    >
      {/* Subtle gradient blob */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
            Vil du være med fra starten?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/70">
            Vi søker pilotsykehus, kliniske partnere og kommuner som vil teste
            fremtidens diabetesdata-flyt. Pasienter og familier kan registrere
            interesse for gratis tidlig tilgang.
          </p>
          <a
            href="mailto:steffen@fonviggroup.com"
            className="inline-block rounded-[var(--radius-xl)] bg-accent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[var(--shadow-lg)]"
          >
            Ta kontakt &rarr;
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
