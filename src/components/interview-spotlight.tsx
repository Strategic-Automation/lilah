import { AnimateOnScroll } from "./animate-on-scroll";

function MockInterviewUI() {
  return (
    <div className="glass rounded-2xl p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-glow-pulse" />
          <span className="text-xs text-text-muted">Interview Mode Active</span>
        </div>
        <span className="text-xs text-cyan">Live</span>
      </div>

      {/* Speaker lines */}
      <div className="space-y-3">
        <div className="flex gap-3 items-start">
          <span className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-violet/20 flex items-center justify-center text-[10px] text-violet-light font-medium">
            C
          </span>
          <div className="space-y-1.5 flex-1">
            <div className="h-2 rounded-full bg-white/8 w-full" />
            <div className="h-2 rounded-full bg-white/8 w-3/4" />
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <span className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-cyan/20 flex items-center justify-center text-[10px] text-cyan-light font-medium">
            Y
          </span>
          <div className="space-y-1.5 flex-1">
            <div className="h-2 rounded-full bg-white/8 w-5/6" />
            <div className="h-2 rounded-full bg-white/8 w-2/3" />
          </div>
        </div>
      </div>

      {/* Insight cards */}
      <div className="border-t border-border pt-3 space-y-2">
        <div className="glass rounded-lg px-3 py-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] text-text-secondary">Strong technical depth — probe further on system design</span>
        </div>
        <div className="glass rounded-lg px-3 py-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="text-[11px] text-text-secondary">Suggested: Ask about team collaboration experience</span>
        </div>
      </div>
    </div>
  );
}

export function InterviewSpotlight() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Asymmetric glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <AnimateOnScroll>
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1))",
                  color: "var(--color-violet-light)",
                }}
              >
                Interview Mode
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Your unfair advantage
                <br />
                <span className="gradient-text">in every interview</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Whether you&apos;re hiring or being hired, Lilah gives you
                real-time coaching that nobody else can see.
              </p>
              <ul className="space-y-3">
                {[
                  "Live candidate assessment with strengths and red flags",
                  "Suggested follow-up questions based on responses",
                  "Coaching prompts and talking points for interviewees",
                  "Post-interview structured evaluation report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="var(--color-cyan)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Mock UI */}
          <AnimateOnScroll delay={200}>
            <MockInterviewUI />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
