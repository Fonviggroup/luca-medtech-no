import ScrollReveal from "./ScrollReveal";

interface Module {
  icon: string;
  title: string;
  price: string;
  priceTint: string;
  borderColor: string;
  description: string;
  features: string[];
}

const modules: Module[] = [
  {
    icon: "💙",
    title: "Trygg hverdag",
    price: "Alltid gratis",
    priceTint: "bg-success/10 text-success",
    borderColor: "border-t-secondary",
    description:
      "Gjør diabetesbehandling tryggere for hele familien — også for de som er nye, usikre eller har lite erfaring.",
    features: [
      "Forståelig veiledning tilpasset erfaringsnivå",
      "Konsultasjonsklar rapport klar til legetimen",
      "Trygge foreldre, besteforeldre og omsorgspersoner",
    ],
  },
  {
    icon: "🏫",
    title: "BHG / Skole",
    price: "Kommersielt",
    priceTint: "bg-accent/10 text-accent",
    borderColor: "border-t-accent",
    description:
      "Trafikklys-visning for ansatte uten medisinsk bakgrunn. Enkle handlingsinstrukser og varsler.",
    features: [
      "Rød / gul / grønn trafikklys",
      "Steg-for-steg handlingsplan",
      "Alarmer til kontaktpersoner",
    ],
  },
  {
    icon: "🏥",
    title: "DIPS-integrasjon",
    price: "Kommersielt",
    priceTint: "bg-primary/10 text-primary",
    borderColor: "border-t-primary",
    description:
      "CGM-data rett inn i DIPS og Noklus Diabetes. Populasjonsoversikt for klinikere.",
    features: [
      "Automatisk dataflyt via FHIR",
      "Integrert i DIPS-arbeidsflaten",
      "Populasjonsdashboard",
    ],
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
                <h3 className="mb-2 font-serif text-xl text-primary">
                  {mod.title}
                </h3>
                <span
                  className={`mb-4 inline-block rounded-[var(--radius-xl)] px-3 py-1 text-xs font-semibold ${mod.priceTint}`}
                >
                  {mod.price}
                </span>
                <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                  {mod.description}
                </p>
                <ul className="space-y-3">
                  {mod.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-0.5 text-secondary">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
