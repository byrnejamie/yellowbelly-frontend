import {
  Hero,
  HowItWorks,
  Features,
  Pricing,
  TrustStats,
  FAQ,
  FinalCTA,
} from "@/components/home";
import { SectionDivider } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Hero (dark) */}
      <Hero />

      {/* Transition: dark -> light */}
      <SectionDivider variant="dark-to-light" />

      {/* How It Works (light) */}
      <HowItWorks />

      {/* Transition: light -> dark */}
      <SectionDivider variant="light-to-dark" />

      {/* Features (dark) */}
      <Features />

      {/* Transition: dark -> light */}
      <SectionDivider variant="dark-to-light" />

      {/* Pricing (light) */}
      <Pricing />

      {/* Transition: light -> dark */}
      <SectionDivider variant="light-to-dark" />

      {/* Trust Stats (dark) */}
      <TrustStats />

      {/* Transition: dark -> light */}
      <SectionDivider variant="dark-to-light" />

      {/* FAQ (light) */}
      <FAQ />

      {/* Transition: light -> dark */}
      <SectionDivider variant="light-to-dark" />

      {/* Final CTA (dark) */}
      <FinalCTA />
    </>
  );
}
