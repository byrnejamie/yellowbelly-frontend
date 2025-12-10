import { Star, Languages, Blocks, Zap, KeyRound, Paintbrush } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Google Reviews Integration",
    description: "Display your Google Business reviews directly on your WordPress site. Always fresh, always in sync.",
  },
  {
    icon: Languages,
    title: "Automatic Translation",
    description: "Reviews translate instantly based on visitor location. 100+ languages supported.",
  },
  {
    icon: Blocks,
    title: "Page Builder Ready",
    description: "Full compatibility with Elementor, WPBakery, Divi, and more. Drag, drop, style.",
  },
  {
    icon: Zap,
    title: "Lightweight & Fast",
    description: "No bloat. Minimal footprint. Won't slow your site down.",
  },
  {
    icon: KeyRound,
    title: "No API Keys Required",
    description: "We handle the translation infrastructure. You just add your Google Business ID.",
  },
  {
    icon: Paintbrush,
    title: "Works With Any Theme",
    description: "Clean, unstyled output that adapts to your design — or use our prebuilt layouts.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-24">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#F5C731]/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-slate-400/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Powerful features, zero complexity
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-[#F5C731]/30 hover:bg-slate-900/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F5C731]/10">
                <feature.icon className="h-6 w-6 text-[#F5C731]" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
