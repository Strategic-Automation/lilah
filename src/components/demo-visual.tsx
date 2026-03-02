"use client";

import Image from "next/image";
import { useIntersection } from "@/lib/hooks/use-intersection";

export function DemoVisual() {
  const { ref, isVisible } = useIntersection({ threshold: 0.15 });

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

        {/* Browser frame with screenshot */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-violet/10">
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 bg-white/[0.04] px-4 py-3 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="rounded-md bg-white/[0.04] px-4 py-1 text-[11px] text-text-muted w-64 text-center">
                  app.lilah.app
                </div>
              </div>
              <div className="w-12" />
            </div>

            {/* Screenshot */}
            <Image
              src="/images/live-meeting-dashboard.png"
              alt="Lilah live meeting dashboard showing real-time transcription, AI insights, and meeting context"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
