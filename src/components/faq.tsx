"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { AnimateOnScroll } from "./animate-on-scroll";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Questions? <span className="gradient-text">Answered.</span>
          </h2>
        </AnimateOnScroll>

        <div className="space-y-0">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-text-primary pr-4 group-hover:text-white transition-colors">
                      {item.question}
                    </span>
                    <span
                      className={`flex-shrink-0 h-5 w-5 flex items-center justify-center text-text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="7" y1="1" x2="7" y2="13" />
                        <line x1="1" y1="7" x2="13" y2="7" />
                      </svg>
                    </span>
                  </button>

                  {/* Animate height via grid-template-rows */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-[var(--ease-smooth)]"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm text-text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
