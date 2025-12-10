import { Button } from "@/components/ui";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$__",
    period: "/mo",
    description: "Perfect for small businesses",
    features: [
      "X words/month",
      "1 site license",
      "Email support",
      "All page builders",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$__",
    period: "/mo",
    description: "For growing businesses",
    features: [
      "Y words/month",
      "3 site licenses",
      "Priority support",
      "All page builders",
      "Custom styling",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$__",
    period: "/mo",
    description: "For agencies & enterprises",
    features: [
      "Z words/month",
      "Unlimited sites",
      "Dedicated support",
      "All page builders",
      "Custom styling",
      "White-label option",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#FAFAFA] py-24">
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
            Simple, Usage-Based Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pay for what you use. No surprises, no wasted features.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 ${
                tier.highlighted
                  ? "border-[#F5C731] bg-white shadow-xl shadow-[#F5C731]/10 ring-2 ring-[#F5C731]"
                  : "border-slate-200 bg-white shadow-md"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-block rounded-full bg-[#F5C731] px-3 py-1 text-xs font-semibold text-[#0D0D0D]">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-medium text-slate-900">{tier.name}</h3>
              <p className="mt-2 text-slate-600">{tier.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-semibold text-slate-900">{tier.price}</span>
                <span className="text-slate-600">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#F5C731]" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/get-lingoreview"
                className="mt-8 w-full"
                variant={tier.highlighted ? "default" : "secondary"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-slate-600">
          Not sure which plan? Start with Starter — upgrade anytime as you grow.
        </p>
      </div>
    </section>
  );
}
