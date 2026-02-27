"use client";

import { PRICING_PLANS } from "@/lib/constants";
import { AnimateOnScroll } from "./animate-on-scroll";
import BlurText from "@/components/ui/blur-text";
import StarBorder from "@/components/ui/star-border";

function CheckIcon({ muted }: { muted?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke={muted ? "var(--color-text-muted)" : "var(--color-cyan)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <BlurText
            text="Simple, honest pricing"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 justify-center"
            delay={60}
            direction="bottom"
          />
          <p className="mx-auto max-w-xl text-text-secondary text-lg">
            Start free. Upgrade when you&apos;re ready. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 150}>
              {plan.highlighted ? (
                /* Pro card with StarBorder */
                <StarBorder
                  className="w-full"
                  color="#7C3AED"
                  speed="5s"
                  thickness={1}
                >
                  <div className="relative rounded-2xl bg-bg-card p-8">
                    {/* Popular badge */}
                    <div
                      className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-lg px-4 py-1 text-[11px] font-medium text-white"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      Most Popular
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-text-primary mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-text-muted mb-6">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-bold gradient-text">
                          {plan.price}
                        </span>
                        <span className="text-text-muted text-sm">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mb-8">
                        or $149/year — save 17%
                      </p>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <CheckIcon />
                            <span className="text-sm text-text-secondary">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#waitlist"
                        className="block w-full rounded-full py-3 text-center text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
                        style={{ background: "var(--gradient-brand)" }}
                      >
                        {plan.cta}
                      </a>
                    </div>
                  </div>
                </StarBorder>
              ) : (
                /* Free card */
                <div className="glass rounded-2xl p-8 h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                    <span className="text-text-muted text-sm">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon muted />
                        <span className="text-sm text-text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#waitlist"
                    className="block w-full rounded-full py-3 text-center text-sm font-medium text-text-primary border border-border-bright transition-all hover:bg-white/[0.04]"
                  >
                    {plan.cta}
                  </a>
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
