import ScrollReveal from "./ScrollReveal";

interface Module {
  icon: string;
  title: string;
  forLabel: string;
  price: string;
  priceTint: string;
  borderColor: string;
  description: string;
}

const modules: Module[] = [
  {
    icon: "💙",
    title: "Trygg hverdag",
    forLabel: "Familier og pårørende",
    price: "Alltid gratis",
    priceTint: "bg-success/10 text-success",
    borderColor: "border-t-secondary",
    description:
      "Samlet oversikt over barnets blodsukker. Del trygt med besteforeldre, barnehage og skole. Ha data klar til legetimen — uten å lete.",
  },
  {
    icon: "🏫",
    title: "Barnehage & skole",
    forLabel: "Ansatte i BHG, skole, SFO og avlastning",
    price: "Kommersielt",
    priceTint: "bg-accent/10 text-accent",
    borderColor: "border-t-accent",
    description:
      "Trafikklys-visning: grønn, gul, rød. Enkle handlingsinstrukser tilpasset barnets behandlingsplan. Varsler til kontaktpersoner. Ingen medisinsk bakgrunn nødvendig.",
  },
  {
    icon: "🏥",
    title: "Sykehusintegrasjon",
    forLabel: "Diabetesteam og klinikere",
    price: "Kommersielt",
    priceTint: "bg-primary/10 text-primary",
    borderColor: "border-t-primary",
    description:
      "CGM-data skrives automatisk inn i pasientjournalen. Klinikeren ser alt i DIPS — uten å forlate systemet. Populasjonsoversikt og konsultasjonsforeberedelse.",
  },
];

export default function Modules() {
  return (
    <section id="losningen" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent">
            &#129513; Løsningen
          </p>
          <h2 className="mb-4 font-serif text-3xl text-primary md:text-4xl">
            Tre moduler, én plattform
          </h2>
          <p className="mb-16 max-w-xl text-lg text-text-secondary">
            Fra familiens lomme til sykehusets journal. Pasienter betaler aldri.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.title} delay={i * 100}>
              <div
                className={`group h-full rounded-[var(--radius-lg)] border-t-4 ${mod.borderColor} bg-white p-8 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]`}
              >
                <span className="mb-4 block text-3xl">{mod.icon}</span>
                <h3 className="mb-1 font-serif text-xl text-primary">
                  {mod.title}
                </h3>
                <p className="mb-3 text-xs text-text-muted">
                  {mod.forLabel}
                </p>
                <span
                  className={`mb-4 inline-block rounded-[var(--radius-xl)] px-3 py-1 text-xs font-semibold ${mod.priceTint}`}
                >
                  {mod.price}
                </span>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {mod.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
