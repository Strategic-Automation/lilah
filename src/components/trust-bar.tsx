import { TRUST_STATS } from "@/lib/constants";
import { AnimateOnScroll } from "./animate-on-scroll";

export function TrustBar() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {TRUST_STATS.map((stat, i) => (
          <AnimateOnScroll key={stat.label} delay={i * 100}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
