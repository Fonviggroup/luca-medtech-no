import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Kontakt oss — Luca MedTech",
  description:
    "Ta kontakt med Luca MedTech. Vi søker pilotsykehus, kommuner og familier som vil teste plattformen tidlig.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold tracking-wide text-accent">
              Kontakt
            </p>
            <h1 className="mb-6 font-serif text-4xl text-primary md:text-5xl">
              Vil du vite mer?
            </h1>
            <p className="text-lg leading-relaxed text-text-secondary">
              Vi søker pilotsykehus, kommuner og familier som vil teste
              plattformen tidlig. Ta kontakt — vi svarer raskt.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Email */}
              <a
                href="mailto:steffen@lucamedtech.no"
                className="group rounded-[var(--radius-lg)] border-2 border-border bg-bg-light p-8 transition-all hover:border-accent/40 hover:shadow-[var(--shadow-md)]"
              >
                <div className="mb-4 text-3xl">&#9993;</div>
                <h2 className="mb-2 font-serif text-xl text-primary">
                  E-post
                </h2>
                <p className="mb-4 text-text-secondary">
                  Skriv til oss, så svarer vi så raskt vi kan.
                </p>
                <span className="font-semibold text-accent transition-colors group-hover:text-accent-light">
                  steffen@lucamedtech.no &rarr;
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+4746633385"
                className="group rounded-[var(--radius-lg)] border-2 border-border bg-bg-light p-8 transition-all hover:border-accent/40 hover:shadow-[var(--shadow-md)]"
              >
                <div className="mb-4 text-3xl">&#128222;</div>
                <h2 className="mb-2 font-serif text-xl text-primary">
                  Telefon
                </h2>
                <p className="mb-4 text-text-secondary">
                  Ring oss direkte for en uforpliktende prat.
                </p>
                <span className="font-semibold text-accent transition-colors group-hover:text-accent-light">
                  +47 466 333 85 &rarr;
                </span>
              </a>
            </div>
          </ScrollReveal>

          {/* Address */}
          <ScrollReveal>
            <div className="mt-12 text-center">
              <p className="text-sm text-text-muted">
                Luca MedTech AS &middot; Hokksund, Norge
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
