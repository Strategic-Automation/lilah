"use client";

import { useIntersection } from "@/lib/hooks/use-intersection";

function AudioBars({ active }: { active: boolean }) {
  const heights = [40, 70, 55, 85, 45, 90, 60, 75, 50, 80, 65, 35];
  return (
    <div className="flex items-end justify-center gap-1 h-24">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-500 ${
            active ? "animate-bar-pulse" : "opacity-0"
          }`}
          style={{
            height: `${h}%`,
            background: "var(--gradient-brand)",
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${0.8 + (i % 3) * 0.3}s`,
            transitionDelay: `${i * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}

function TranscriptLines({ active }: { active: boolean }) {
  const widths = [85, 70, 90, 60, 75];
  return (
    <div className="flex flex-col gap-2.5 justify-center h-24">
      {widths.map((w, i) => (
        <div
          key={i}
          className={`h-2 rounded-full bg-white/10 transition-all duration-700 origin-left ${
            active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
          style={{
            width: `${w}%`,
            transitionDelay: `${400 + i * 120}ms`,
          }}
        />
      ))}
    </div>
  );
}

function InsightCards({ active }: { active: boolean }) {
  const cards = [
    { label: "Action Item", color: "#7C3AED" },
    { label: "Key Insight", color: "#06B6D4" },
    { label: "Follow-up", color: "#8B5CF6" },
  ];
  return (
    <div className="flex flex-col gap-2.5 justify-center">
      {cards.map((card, i) => (
        <div
          key={card.label}
          className={`glass rounded-lg px-4 py-2.5 flex items-center gap-2.5 transition-all duration-500 ${
            active
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${800 + i * 150}ms` }}
        >
          <span
            className="h-2 w-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: card.color }}
          />
          <span className="text-xs text-text-secondary whitespace-nowrap">
            {card.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function FlowArrow({ active, delay }: { active: boolean; delay: number }) {
  return (
    <div
      className={`hidden md:flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
        active ? "opacity-60" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="url(#arrow-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="arrow-grad" x1="5" y1="12" x2="19" y2="12">
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function DemoVisual() {
  const { ref, isVisible } = useIntersection({ threshold: 0.2 });

  return (
    <section className="relative py-24 md:py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(ellipse, rgba(6,182,212,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Watch it <span className="gradient-text">come alive</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary text-lg">
            Audio flows in. Intelligence flows out. All in real time.
          </p>
        </div>

        <div
          ref={ref}
          className="glass rounded-3xl p-8 md:p-12"
        >
          {/* Labels */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-center">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4 text-center">
                Audio Input
              </p>
              <AudioBars active={isVisible} />
            </div>

            <FlowArrow active={isVisible} delay={300} />

            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4 text-center">
                Live Transcription
              </p>
              <TranscriptLines active={isVisible} />
            </div>

            <FlowArrow active={isVisible} delay={600} />

            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4 text-center">
                AI Insights
              </p>
              <InsightCards active={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
