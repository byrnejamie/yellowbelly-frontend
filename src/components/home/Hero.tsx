import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-zinc-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Premium WordPress Plugins
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Supercharge your WordPress website with our carefully crafted plugins.
            Built for performance, designed for simplicity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
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
