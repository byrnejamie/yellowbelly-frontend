import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about YellowBelly and our mission to create premium WordPress plugins.",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          About YellowBelly
        </h1>

        <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            We build premium WordPress plugins that help businesses and developers
            create better websites. Our focus is on performance, reliability, and
            exceptional user experience.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-white">
            Our Mission
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            To empower WordPress users with high-quality tools that solve real problems.
            Every plugin we create is built with care, thoroughly tested, and designed
            to integrate seamlessly with your existing workflow.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-white">
            Why Choose Us
          </h2>
          <ul className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="text-zinc-900 dark:text-white">✓</span>
              <span>Performance-first approach - our plugins won&apos;t slow down your site</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-900 dark:text-white">✓</span>
              <span>Regular updates and security patches</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-900 dark:text-white">✓</span>
              <span>Dedicated support team</span>
            </li>
            <li className="flex gap-3">
              <span className="text-zinc-900 dark:text-white">✓</span>
              <span>Clean, well-documented code</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
