import { Link2, Globe, Palette } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect Your Google Business",
    description: "Paste your Google Business ID. LingoReview pulls your reviews automatically.",
  },
  {
    icon: Globe,
    title: "Auto-Translate for Every Visitor",
    description: "We handle translation. A French visitor sees French. A German visitor sees German. No manual work.",
  },
  {
    icon: Palette,
    title: "Style It Your Way",
    description: "Works with Elementor, WPBakery, and other builders. Match your brand perfectly — no code needed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#FAFAFA] py-24">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Three simple steps to global social proof
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Step icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F5C731] shadow-lg shadow-[#F5C731]/20">
                <step.icon className="h-8 w-8 text-[#0D0D0D]" />
              </div>
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-8 hidden h-0.5 w-[calc(100%-80px)] bg-slate-300 sm:block" />
              )}
              <h3 className="mt-6 text-xl font-medium text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
