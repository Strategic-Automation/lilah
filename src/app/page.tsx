import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { DemoVisual } from "@/components/demo-visual";
import { InterviewSpotlight } from "@/components/interview-spotlight";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <DemoVisual />
        <InterviewSpotlight />
        <Pricing />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
