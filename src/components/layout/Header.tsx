import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-fast hover:opacity-80"
        >
          <span className="text-xl font-medium tracking-tight text-foreground">
            YellowBelly
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
