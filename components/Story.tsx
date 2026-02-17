import ScrollReveal from "./ScrollReveal";

export default function Story() {
  return (
    <section id="om-oss" aria-label="Om oss" className="bg-sand py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent">
            Om oss
          </p>
          <h2 className="mb-8 font-serif text-3xl text-primary md:text-4xl">
            Hvorfor vi bygger dette
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-text-secondary">
            I november 2025 fikk min tre år gamle sønn diagnosen type
            1-diabetes. I ukene som fulgte oppdaget jeg at kritisk helsedata fra
            blodsukkersensoren hans ikke flyter dit den skal. Klinikere kopierer
            tall manuelt. Barnehagen fikk et papirskjema. Familien brukte tre
            forskjellige apper uten sammenheng. Luca MedTech bygger det som
            mangler — plattformen som kobler alt sammen.
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
              SF
            </div>
            <div className="text-left">
              <p className="font-semibold text-primary">Steffen Fonvig</p>
              <p className="text-sm text-text-muted">Grunnlegger</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
