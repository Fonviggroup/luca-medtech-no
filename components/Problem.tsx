import ScrollReveal from "./ScrollReveal";

export default function Problem() {
  const stats = [
    { value: "Tusenvis", label: "T1-diabetikere i Norge med CGM" },
    { value: "Minutter", label: "brukt på manuell kopiering per konsultasjon" },
    { value: "Flertallet", label: "av norske sykehus bruker DIPS" },
    { value: "0", label: "løsninger som kobler CGM til DIPS i dag" },
  ];

  return (
    <section id="problemet" aria-label="Problemet" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent">
            &#9889; Problemet
          </p>
          <h2 className="mb-4 max-w-2xl font-serif text-3xl text-primary md:text-4xl">
            CGM-data når aldri journalen automatisk
          </h2>
          <p className="mb-16 max-w-2xl text-lg text-text-secondary">
            I dag logger klinikere inn i separate portaler, henter tall manuelt,
            og skriver dem inn i journalsystemet. Hver konsultasjon. Hver
            pasient. Det tar tid, skaper feil, og er helt unødvendig.
          </p>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Flow comparison */}
          <ScrollReveal>
            <div className="space-y-6">
              {/* Today */}
              <div className="rounded-[var(--radius-lg)] border-2 border-error/20 bg-error/5 p-6">
                <p className="mb-4 text-sm font-semibold text-error">
                  I dag
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                  <span className="rounded-full bg-white px-3 py-1 shadow-[var(--shadow-sm)]">
                    Sensor
                  </span>
                  <span className="text-text-muted">&rarr;</span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-[var(--shadow-sm)]">
                    Separat portal
                  </span>
                  <span className="text-text-muted">&rarr;</span>
                  <span className="rounded-full bg-error/10 px-3 py-1 font-medium text-error">
                    &#9995; Manuelt
                  </span>
                  <span className="text-text-muted">&rarr;</span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-[var(--shadow-sm)]">
                    Journal
                  </span>
                </div>
              </div>

              {/* With Luca */}
              <div className="rounded-[var(--radius-lg)] border-2 border-secondary/20 bg-secondary/5 p-6">
                <p className="mb-4 text-sm font-semibold text-secondary">
                  Med Luca
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                  <span className="rounded-full bg-white px-3 py-1 shadow-[var(--shadow-sm)]">
                    Sensor
                  </span>
                  <span className="text-text-muted">&rarr;</span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 font-medium text-secondary">
                    Luca
                  </span>
                  <span className="text-text-muted">&rarr;</span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-[var(--shadow-sm)]">
                    Journal (automatisk)
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats grid */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius-lg)] bg-bg-light p-6"
                >
                  <p className="mb-1 font-serif text-2xl text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
