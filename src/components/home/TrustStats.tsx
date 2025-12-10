import { Languages, Clock, Feather, RefreshCw } from "lucide-react";

const stats = [
  {
    icon: Languages,
    value: "100+",
    label: "Languages",
    description: "Automatic translation for visitors worldwide",
  },
  {
    icon: Clock,
    value: "2-Minute",
    label: "Setup",
    description: "Paste your Google ID and you're live",
  },
  {
    icon: Feather,
    value: "Zero",
    label: "Bloat",
    description: "Lightweight code that won't slow your site",
  },
  {
    icon: RefreshCw,
    value: "Regular",
    label: "Updates",
    description: "Active development, not abandonware",
  },
];

export default function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-24">
      {/* Subtle gradient */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-800/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5C731]/10">
                <stat.icon className="h-7 w-7 text-[#F5C731]" />
              </div>
              <div className="mt-4">
                <span className="text-3xl font-semibold text-white">{stat.value}</span>
                <span className="ml-2 text-lg text-slate-300">{stat.label}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
