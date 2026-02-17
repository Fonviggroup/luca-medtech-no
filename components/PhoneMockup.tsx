"use client";

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px]">
      <p className="mb-2 text-center text-[10px] font-medium tracking-wide text-text-muted uppercase">Konseptvisning</p>
      {/* Phone frame */}
      <div className="rounded-[36px] border-[3px] border-primary/20 bg-white p-4 shadow-[var(--shadow-xl)]">
        {/* Notch */}
        <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-gray-100" />

        {/* App header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-text-muted">God morgen</p>
            <p className="font-serif text-lg text-primary">Luca</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
            <span className="text-sm">👦</span>
          </div>
        </div>

        {/* Current glucose */}
        <div className="mb-4 rounded-[var(--radius-lg)] bg-gradient-to-br from-success/10 to-secondary/10 p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium text-text-muted">Nå</p>
              <p className="font-serif text-4xl text-primary">6.2</p>
              <p className="text-xs text-text-secondary">mmol/L</p>
            </div>
            <div className="text-right">
              <span className="text-2xl">→</span>
              <p className="rounded-full bg-success/20 px-2 py-0.5 text-xs font-medium text-success">
                Stabil
              </p>
            </div>
          </div>
        </div>

        {/* SVG Glucose Chart */}
        <div className="mb-4 rounded-[var(--radius-md)] bg-gray-50 p-3">
          <p className="mb-2 text-xs font-medium text-text-muted">
            Siste 3 timer
          </p>
          <svg viewBox="0 0 220 80" className="w-full" aria-label="Glukosegraf som viser stabile verdier rundt 6 mmol/L">
            {/* Target range background */}
            <rect x="0" y="20" width="220" height="35" rx="4" fill="var(--success)" opacity="0.08" />
            {/* Grid lines */}
            <line x1="0" y1="20" x2="220" y2="20" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4" />
            <line x1="0" y1="55" x2="220" y2="55" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4" />
            {/* Glucose line */}
            <path
              d="M 0 45 Q 20 48 40 42 T 80 38 T 120 35 T 160 32 T 200 30 L 220 28"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-draw-line"
            />
            {/* Current dot */}
            <circle cx="220" cy="28" r="4" fill="var(--secondary)">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Labels */}
            <text x="0" y="14" fontSize="8" fill="var(--text-muted)">10</text>
            <text x="0" y="70" fontSize="8" fill="var(--text-muted)">3.9</text>
          </svg>
        </div>

        {/* Time in range bar */}
        <div className="mb-4">
          <p className="mb-1.5 text-xs font-medium text-text-muted">
            Tid i mål (24t)
          </p>
          <div className="flex h-3 overflow-hidden rounded-full">
            <div className="bg-error" style={{ width: "5%" }} />
            <div className="bg-success" style={{ width: "78%" }} />
            <div className="bg-warning" style={{ width: "17%" }} />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-[var(--radius-md)] bg-gray-50 p-2 text-center">
            <p className="font-serif text-lg text-success">78%</p>
            <p className="text-[10px] text-text-muted">TIR</p>
          </div>
          <div className="rounded-[var(--radius-md)] bg-gray-50 p-2 text-center">
            <p className="font-serif text-lg text-primary">6.8</p>
            <p className="text-[10px] text-text-muted">Snitt</p>
          </div>
          <div className="rounded-[var(--radius-md)] bg-gray-50 p-2 text-center">
            <p className="font-serif text-lg text-primary">28%</p>
            <p className="text-[10px] text-text-muted">CV</p>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-16 top-24 hidden animate-float rounded-[var(--radius-lg)] bg-white px-3 py-2 shadow-[var(--shadow-md)] lg:block">
        <p className="text-xs font-semibold text-primary">DIPS</p>
        <p className="text-[10px] text-text-muted">Designet for</p>
        <p className="text-[10px] text-secondary">Journalintegrasjon</p>
      </div>

      <div
        className="absolute -right-14 bottom-32 hidden animate-float rounded-[var(--radius-lg)] bg-white px-3 py-2 shadow-[var(--shadow-md)] lg:block"
        style={{ animationDelay: "3s" }}
      >
        <p className="text-xs font-semibold text-primary">HN</p>
        <p className="text-[10px] text-text-muted">Helsenorge</p>
        <p className="text-[10px] text-secondary">Pasienttilgang</p>
      </div>
    </div>
  );
}
