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
            Da sønnen min fikk type 1-diabetes som treåring, ble hverdagen vår
            snudd på hodet over natten. Plutselig handlet alt om blodsukkertall
            — døgnet rundt. Men det som overrasket meg mest var ikke sykdommen.
            Det var at systemene rundt oss ikke snakker sammen. Sensoren sender
            data til én app. Legen bruker en annen. Barnehagen fikk et laminert
            ark. Vi som foreldre sitter midt i alt og prøver å holde oversikt.
            Det finnes ingen grunn til at det skal være sånn. Så da bygger vi
            det som mangler.
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
