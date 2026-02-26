"use client";

import { useState, type FormEvent } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        {submitted ? (
          <div className="animate-fade-in">
            <div
              className="mx-auto mb-6 h-16 w-16 rounded-full flex items-center justify-center"
              style={{ background: "var(--gradient-brand)" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              You&apos;re on the list
            </h2>
            <p className="text-text-secondary text-lg">
              We&apos;ll be in touch soon. Keep an eye on your inbox.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to{" "}
              <span className="gradient-text">own every meeting?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              Join the waitlist for early access. Be the first to experience
              meetings that remember everything.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-white/5 border border-border px-6 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet transition-colors"
              />
              <button
                type="submit"
                className="rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] whitespace-nowrap"
                style={{ background: "var(--gradient-brand)" }}
              >
                Get Early Access
              </button>
            </form>

            <p className="text-xs text-text-muted mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
