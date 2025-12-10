import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Premium WordPress Plugins
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Supercharge your WordPress website with our carefully crafted
            plugins. Built for performance, designed for simplicity.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/plugins" size="lg">
              Browse Plugins
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
