import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "DIPS", description: "Journalsystem" },
  { name: "Helsenorge", description: "Pasientportal" },
  { name: "HelseID", description: "Autentisering" },
  { name: "FHIR R4", description: "Datastandard" },
  { name: "Noklus", description: "Diabetesjournal" },
  { name: "Dexcom", description: "CGM-sensor" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-light py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-10 text-center text-sm font-semibold tracking-wide text-text-muted">
            Bygget for norsk helseinfrastruktur
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex flex-col items-center gap-1 rounded-[var(--radius-md)] px-5 py-3 transition-all hover:bg-white hover:shadow-[var(--shadow-sm)]"
              >
                <span className="text-lg font-bold text-primary/40 transition-colors group-hover:text-primary">
                  {partner.name}
                </span>
                <span className="text-xs text-text-muted">
                  {partner.description}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
