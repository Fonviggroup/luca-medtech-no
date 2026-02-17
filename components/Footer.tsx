export default function Footer() {
  return (
    <footer className="bg-primary-dark py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <a href="#" className="transition-colors hover:text-white">
            Personvern
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Vilkår
          </a>
          <address className="not-italic inline">
            <a
              href="mailto:steffen@lucamedtech.no"
              className="transition-colors hover:text-white"
            >
              steffen@lucamedtech.no
            </a>
          </address>
        </div>
        <p className="text-sm text-white/60">
          &copy; 2026 Luca MedTech AS &middot; Hokksund, Norge
        </p>
      </div>
    </footer>
  );
}
