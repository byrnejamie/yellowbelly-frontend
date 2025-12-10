import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "WordPress plugins built by developers who've seen it all. Lightweight, reliable, and maintained for years—not months.",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          We Build Plugins That Last
        </h1>

        <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Too many WordPress plugins start strong and fade away. Features pile up,
            updates stop, and you&apos;re left searching for a replacement. We got tired
            of that cycle, so we built something different.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-white">
            Our Philosophy
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            YellowBelly plugins follow three rules:
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Reliable</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                We don&apos;t abandon plugins after launch. Regular updates, ongoing support,
                year after year. When you install a YellowBelly plugin, you&apos;re not taking
                a gamble on whether it&apos;ll still work next month.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Simple</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Each plugin does one thing well. No feature bloat, no confusing settings
                pages, no documentation you need a week to read. Install, configure, done.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Performant</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Your site&apos;s speed matters. Our code is lightweight and efficient—we&apos;re
                not going to be the reason your load times spike.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-white">
            Why We&apos;re Different
          </h2>
          <ul className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="text-zinc-900 dark:text-white">✓</span>
              <span>Built by developers with 20 years in the WordPress ecosystem</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-900 dark:text-white">✓</span>
              <span>We use our own plugins daily—if something&apos;s annoying, we fix it</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-900 dark:text-white">✓</span>
              <span>Pragmatic tech choices, not trend-chasing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-900 dark:text-white">✓</span>
              <span>Clean, well-documented code you can actually read</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
