import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about YellowBelly plugins? We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Questions, feedback, or just want to say hello? We read every message and reply within 24 hours.
          </p>
        </div>

        <form className="mt-12 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              <option value="">Select a subject</option>
              <option value="support">Technical Support</option>
              <option value="sales">Sales Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400"
              placeholder="Your message..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="mt-12 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Prefer email?
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Reach us directly at{" "}
            <a
              href="mailto:support@yellowbelly.dev"
              className="text-zinc-900 underline hover:no-underline dark:text-white"
            >
              support@yellowbelly.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
