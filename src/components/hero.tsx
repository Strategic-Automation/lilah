export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Violet glow */}
        <div
          className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full animate-glow-pulse"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        {/* Cyan glow */}
        <div
          className="absolute -bottom-48 -right-32 h-[500px] w-[500px] rounded-full animate-glow-pulse"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
            filter: "blur(100px)",
            animationDelay: "2s",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[
          { top: "15%", left: "10%", size: 4, delay: "0s", duration: "7s" },
          { top: "25%", left: "85%", size: 3, delay: "1s", duration: "5s" },
          { top: "60%", left: "20%", size: 5, delay: "2s", duration: "8s" },
          { top: "70%", left: "75%", size: 3, delay: "0.5s", duration: "6s" },
          { top: "40%", left: "55%", size: 4, delay: "3s", duration: "7s" },
          { top: "80%", left: "45%", size: 3, delay: "1.5s", duration: "9s" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: i % 2 === 0 ? "#7C3AED" : "#06B6D4",
              opacity: 0.4,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-8">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          />
          <span className="text-xs font-medium text-text-secondary">
            Now in Early Access
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          Your meetings
          <br />
          <span className="gradient-text">remember everything</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
          Lilah is the invisible AI that transcribes, analyses, and extracts
          every insight from your conversations — in real time, without anyone
          knowing.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="rounded-full px-8 py-3.5 text-base font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            Get Early Access
          </a>
          <a
            href="#how-it-works"
            className="rounded-full glass px-8 py-3.5 text-base font-medium text-text-primary border-border-bright transition-all hover:bg-white/[0.06]"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
