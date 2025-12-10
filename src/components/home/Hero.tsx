import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-48">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        {/* Gold blob - top right */}
        <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#F5C731]/10 blur-[100px]" />
        {/* Slate blob - bottom left */}
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-slate-400/5 blur-[80px]" />
        {/* Center spotlight */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-800/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            WordPress Plugins That Just Work
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            Lightweight, reliable, and built to last. No bloat, no abandoned updates, no headaches.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/plugins" size="lg">
              Browse Plugins
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
