import ScrollReveal from "./ScrollReveal";

export default function Story() {
  return (
    <section id="om-oss" className="bg-sand py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          {/* Decorative quote mark */}
          <span className="mb-6 block font-serif text-8xl leading-none text-secondary/20">
            &ldquo;
          </span>

          <blockquote className="mb-8 font-serif text-2xl leading-relaxed text-primary md:text-3xl">
            Da sønnen min fikk type 1-diabetes i november 2024, satt jeg på
            sykehuset og så klinikere kopiere tall manuelt fra én skjerm til en
            annen. Jeg tenkte: dette kan ikke stemme. Så jeg bestemte meg for å
            fikse det.
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
              SF
            </div>
            <div className="text-left">
              <p className="font-semibold text-primary">Steffen Fonvig</p>
              <p className="text-sm text-text-muted">
                Grunnlegger, Luca MedTech AS
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
