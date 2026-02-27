"use client";

import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { AnimateOnScroll } from "./animate-on-scroll";
import BlurText from "@/components/ui/blur-text";

function StepIcon({ step }: { step: number }) {
  const icons = [
    <svg key="mic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="11" rx="3" /><path d="M5 10a7 7 0 0014 0" /><line x1="12" y1="19" x2="12" y2="22" />
    </svg>,
    <svg key="bolt" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
    </svg>,
    <svg key="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" />
    </svg>,
  ];
  return icons[step - 1] ?? null;
}

function Connector() {
  return (
    <div className="hidden md:flex items-center flex-shrink-0 w-16 lg:w-24">
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "repeating-linear-gradient(90deg, var(--color-violet) 0, var(--color-violet) 6px, transparent 6px, transparent 12px)",
          opacity: 0.4,
        }}
      />
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="flex-shrink-0 -ml-1">
        <path d="M1 1l5 5-5 5" stroke="var(--color-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <BlurText
            text="Three steps. Zero effort."
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 justify-center"
            delay={60}
            direction="bottom"
          />
          <p className="mx-auto max-w-2xl text-text-secondary text-lg">
            Lilah works silently in the background — no setup, no integrations,
            no interruptions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-0">
          {HOW_IT_WORKS_STEPS.map((item, i) => (
            <div key={item.step} className="contents">
              <AnimateOnScroll delay={i * 150} className="flex-1">
                <div className="glass rounded-2xl p-8 text-center h-full">
                  <div
                    className="inline-flex items-center justify-center h-12 w-12 rounded-full text-white mb-5"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <StepIcon step={item.step} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
              {i < HOW_IT_WORKS_STEPS.length - 1 && <Connector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
