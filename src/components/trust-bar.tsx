"use client";

import { TRUST_STATS } from "@/lib/constants";
import CountUp from "@/components/ui/count-up";

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d,.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  const num = parseFloat(match[1].replace(/,/g, ""));
  const suffix = match[2] || "";
  return { num, suffix };
}

export function TrustBar() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {TRUST_STATS.map((stat) => {
          const { num, suffix } = parseStatValue(stat.value);
          return (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                <CountUp
                  to={num}
                  from={0}
                  duration={2.5}
                  separator=","
                />
                {suffix}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
