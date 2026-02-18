import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Om oss — Luca MedTech",
  description:
    "Luca MedTech bygger Norges første plattform som kobler blodsukkersensorer til sykehusjournal. Les historien bak selskapet.",
};

export default function OmPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold tracking-wide text-accent">
              Om oss
            </p>
            <h1 className="mb-6 font-serif text-4xl text-primary md:text-5xl">
              Hvorfor vi bygger dette
            </h1>
            <p className="text-lg leading-relaxed text-text-secondary">
              Luca MedTech er et norsk medisinteknologisk selskap med én
              visjon: å gjøre hverdagen enklere for alle som lever med
              diabetes — fra familien hjemme til klinikeren på sykehuset.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder story */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[var(--radius-lg)] bg-white p-8 shadow-[var(--shadow-sm)] md:p-12">
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                Da sønnen min fikk type 1-diabetes som treåring, ble hverdagen
                vår snudd på hodet over natten. Plutselig handlet alt om
                blodsukkertall — døgnet rundt. Men det som overrasket meg mest
                var ikke sykdommen. Det var at systemene rundt oss ikke snakker
                sammen. Sensoren sender data til én app. Legen bruker en annen.
                Barnehagen fikk et laminert ark. Vi som foreldre sitter midt i
                alt og prøver å holde oversikt.
              </p>
              <p className="mb-10 text-lg leading-relaxed text-text-secondary">
                Det finnes ingen grunn til at det skal være sånn. Så da bygger
                vi det som mangler.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
                  SF
                </div>
                <div>
                  <p className="font-semibold text-primary">Steffen Fonvig</p>
                  <p className="text-sm text-text-muted">Grunnlegger</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-serif text-2xl text-primary">
                  Vår visjon
                </h2>
                <p className="leading-relaxed text-text-secondary">
                  At alle som lever med diabetes — uansett alder — skal ha
                  trygg og sømløs tilgang til sine egne helsedata. Ingen
                  manuell kopiering, ingen fragmenterte systemer. Bare data
                  som flyter dit den trengs.
                </p>
              </div>
              <div>
                <h2 className="mb-4 font-serif text-2xl text-primary">
                  Selskapet
                </h2>
                <p className="leading-relaxed text-text-secondary">
                  Luca MedTech AS er basert i Hokksund, Norge. Vi utvikler
                  DiaLuca — en plattform med tre moduler som dekker hele
                  reisen fra innleggelse og opplæring til et langvarig liv
                  med diabetes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
