export default function Footer() {
  return (
    <footer className="bg-primary-dark py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <a href="/om" className="transition-colors hover:text-white">
            Om oss
          </a>
          <a href="/kontakt" className="transition-colors hover:text-white">
            Kontakt
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
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/lucamedtech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/60 transition-colors hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/luca-medtech-as/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/60 transition-colors hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <p className="text-sm text-white/60">
            &copy; 2026 Luca MedTech AS &middot; Hokksund, Norge
          </p>
        </div>
      </div>
    </footer>
  );
}
