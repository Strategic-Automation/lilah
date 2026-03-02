import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

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

          {/* Product screenshot */}
          <AnimateOnScroll delay={200}>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-violet/10">
              <Image
                src="/images/start-new-meeting.png"
                alt="Lilah start new meeting screen with Standard Meeting, Job Interview Candidate, Job Interview Interviewer, and Conference modes"
                width={1280}
                height={480}
                className="w-full h-auto"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
