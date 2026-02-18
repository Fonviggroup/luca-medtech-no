import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "DiaLuca — Tre moduler, én applikasjon | Luca MedTech",
  description:
    "DiaLuca er en plattform med tre moduler som dekker hele reisen fra innleggelse og opplæring til et langvarig liv med diabetes. Familie, Assistent og Klinikk.",
};

const steps = [
  {
    number: "1",
    icon: "📡",
    title: "Sensoren måler",
    description:
      "CGM-sensoren registrerer blodsukkerverdier kontinuerlig, døgnet rundt.",
  },
  {
    number: "2",
    icon: "🔗",
    title: "DiaLuca samler",
    description:
      "Data hentes inn og tilgjengeliggjøres for de som trenger den — trygt og automatisk.",
  },
  {
    number: "3",
    icon: "📋",
    title: "Rett person ser rett data",
    description:
      "Familien får oversikt. Barnehagen får trafikklys. Klinikeren får journaldata.",
  },
];

const familieFeatures = [
  "Samlet oversikt over barnets blodsukker på ett sted",
  "Del data trygt med besteforeldre, barnehage og skole",
  "Gjør det enklere å forberede seg til legetimen",
  "Designet for å gi foreldre ro i hverdagen",
];

const assistentFeatures = [
  "Trafikklys-visning: grønn, gul, rød — enkelt å forstå",
  "Handlingsinstrukser tilpasset barnets behandlingsplan",
  "Designet for ansatte uten medisinsk bakgrunn",
  "Varsler kontaktpersoner ved behov",
];

const klinikkFeatures = [
  "Målet: CGM-data flyter automatisk inn i pasientjournalen",
  "Designet for integrasjon med DIPS",
  "Populasjonsoversikt for diabetesteamet",
  "Skal forberede konsultasjoner mer effektivt",
];

const techPartners = [
  { name: "DIPS", description: "Journalsystem" },
  { name: "Helsenorge", description: "Pasientportal" },
  { name: "HelseID", description: "Autentisering" },
  { name: "Noklus", description: "Diabetesregister" },
  { name: "Dexcom", description: "CGM-sensor" },
  { name: "FHIR", description: "Datastandard" },
];

export default function DiaLucaPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold tracking-wide text-accent">
              Produktet
            </p>
            <h1 className="mb-6 font-serif text-4xl text-primary md:text-5xl lg:text-6xl">
              DiaLuca
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-text-secondary">
              Én applikasjon med tre moduler — designet for å dekke hele reisen
              fra innleggelse og opplæring til et langvarig liv med diabetes.
            </p>
            <p className="text-text-muted">
              For familier, barnehager, skoler og klinikere.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-3 text-center text-sm font-semibold tracking-wide text-accent">
              Hvordan det fungerer
            </p>
            <h2 className="mb-16 text-center font-serif text-3xl text-primary md:text-4xl">
              Fra sensor til rett person — automatisk
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 150}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-3xl">
                    {step.icon}
                  </div>
                  <div className="mb-2 text-xs font-semibold tracking-wide text-secondary">
                    STEG {step.number}
                  </div>
                  <h3 className="mb-2 font-serif text-xl text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Visual flow arrow */}
          <ScrollReveal delay={500}>
            <div className="mt-12 flex items-center justify-center gap-3 text-sm text-text-muted">
              <span className="rounded-full bg-bg-light px-4 py-2">
                Sensor
              </span>
              <span>&rarr;</span>
              <span className="rounded-full bg-secondary/10 px-4 py-2 font-medium text-secondary">
                DiaLuca
              </span>
              <span>&rarr;</span>
              <span className="rounded-full bg-bg-light px-4 py-2">
                Familie
              </span>
              <span className="rounded-full bg-bg-light px-4 py-2">
                Skole
              </span>
              <span className="rounded-full bg-bg-light px-4 py-2">
                Journal
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Module: Familie ===== */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">💙</span>
                  <span className="rounded-[var(--radius-xl)] bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                    Alltid gratis
                  </span>
                </div>
                <h2 className="mb-2 font-serif text-3xl text-primary md:text-4xl">
                  DiaLuca - Familie
                </h2>
                <p className="mb-6 text-sm text-text-muted">
                  For familier og pårørende
                </p>
                <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                  Samlet oversikt over barnets blodsukker — delt trygt med de
                  som trenger det. Foreldre, besteforeldre og andre pårørende
                  skal slippe å lete i flere apper.
                </p>
                <ul className="space-y-3">
                  {familieFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="mt-1 text-success">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-[var(--radius-lg)] border-t-4 border-t-secondary bg-white p-8 shadow-[var(--shadow-md)]">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-[var(--radius-md)] bg-success/5 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-lg">
                      👨‍👩‍👧
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        Familiens oversikt
                      </p>
                      <p className="text-xs text-text-muted">
                        Alle ser det samme, oppdatert i sanntid
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-[var(--radius-md)] bg-secondary/5 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-lg">
                      🔒
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        Trygg deling
                      </p>
                      <p className="text-xs text-text-muted">
                        Du bestemmer hvem som ser hva
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-[var(--radius-md)] bg-accent/5 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg">
                      📊
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        Klar til legetimen
                      </p>
                      <p className="text-xs text-text-muted">
                        Data samlet og klar — uten manuelt arbeid
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Module: Assistent ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Card first on desktop (reversed order) */}
            <ScrollReveal>
              <div className="rounded-[var(--radius-lg)] border-t-4 border-t-accent bg-bg-light p-8 shadow-[var(--shadow-md)]">
                <p className="mb-4 text-center text-sm font-semibold text-text-muted">
                  Trafikklys-visning
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 rounded-[var(--radius-md)] bg-white p-4 shadow-[var(--shadow-sm)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-xl font-bold text-success">
                      ●
                    </span>
                    <div>
                      <p className="font-semibold text-success">Grønt</p>
                      <p className="text-xs text-text-muted">
                        Alt er bra. Ingen handling nødvendig.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-[var(--radius-md)] bg-white p-4 shadow-[var(--shadow-sm)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/20 text-xl font-bold text-warning">
                      ●
                    </span>
                    <div>
                      <p className="font-semibold text-warning">Gult</p>
                      <p className="text-xs text-text-muted">
                        Følg med. Sjekk om barnet trenger noe.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-[var(--radius-md)] bg-white p-4 shadow-[var(--shadow-sm)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-error/20 text-xl font-bold text-error">
                      ●
                    </span>
                    <div>
                      <p className="font-semibold text-error">Rødt</p>
                      <p className="text-xs text-text-muted">
                        Handling nødvendig. Følg instruksene.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏫</span>
                  <span className="rounded-[var(--radius-xl)] bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Kommersielt
                  </span>
                </div>
                <h2 className="mb-2 font-serif text-3xl text-primary md:text-4xl">
                  DiaLuca - Assistent
                </h2>
                <p className="mb-6 text-sm text-text-muted">
                  For ansatte i barnehage, skole, SFO og avlastning
                </p>
                <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                  Enkelt nok til at alle forstår det. Trafikklys-visning med
                  klare handlingsinstrukser — tilpasset barnets
                  behandlingsplan. Ingen medisinsk bakgrunn nødvendig.
                </p>
                <ul className="space-y-3">
                  {assistentFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="mt-1 text-accent">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Module: Klinikk ===== */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏥</span>
                  <span className="rounded-[var(--radius-xl)] bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Kommersielt
                  </span>
                </div>
                <h2 className="mb-2 font-serif text-3xl text-primary md:text-4xl">
                  DiaLuca - Klinikk
                </h2>
                <p className="mb-6 text-sm text-text-muted">
                  For diabetesteam og klinikere
                </p>
                <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                  Målet er at CGM-data skal flyte automatisk inn i
                  pasientjournalen — uten manuell kopiering. Klinikeren skal
                  se det de trenger, der de allerede jobber.
                </p>
                <ul className="space-y-3">
                  {klinikkFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="mt-1 text-primary">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-[var(--radius-lg)] border-t-4 border-t-primary bg-white p-8 shadow-[var(--shadow-md)]">
                <p className="mb-6 text-center text-sm font-semibold text-text-muted">
                  Dataflyt til journal
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-[var(--radius-md)] bg-error/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-error">✗</span>
                      <span className="text-sm text-text-secondary">
                        I dag: manuell kopiering
                      </span>
                    </div>
                    <span className="text-xs text-text-muted">Tidkrevende</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <span className="text-2xl text-secondary">↓</span>
                  </div>
                  <div className="flex items-center justify-between rounded-[var(--radius-md)] bg-success/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-success">✓</span>
                      <span className="text-sm text-text-secondary">
                        Med DiaLuca: automatisk overføring
                      </span>
                    </div>
                    <span className="text-xs text-text-muted">
                      Designet for DIPS
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-center text-xs text-text-muted">
                  Konseptvisning — under utvikling
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Tech Compatibility ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <p className="mb-3 text-center text-sm font-semibold tracking-wide text-accent">
              Teknologi
            </p>
            <h2 className="mb-4 text-center font-serif text-3xl text-primary md:text-4xl">
              Designet for norsk helseinfrastruktur
            </h2>
            <p className="mb-12 text-center text-text-secondary">
              DiaLuca er bygget for å passe inn i systemene som allerede brukes
              i norsk helsevesen.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {techPartners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 80}>
                <div className="rounded-[var(--radius-lg)] bg-bg-light p-6 text-center transition-all hover:shadow-[var(--shadow-sm)]">
                  <p className="font-serif text-lg text-primary">
                    {partner.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {partner.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <ScrollReveal>
            <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
              Vil du vite mer om DiaLuca?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/80">
              Vi søker pilotsykehus, kommuner og familier som vil teste
              plattformen tidlig. Ta kontakt — vi svarer raskt.
            </p>
            <a
              href="/kontakt"
              className="inline-block rounded-[var(--radius-xl)] bg-accent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-light hover:shadow-[var(--shadow-lg)]"
            >
              Ta kontakt &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
