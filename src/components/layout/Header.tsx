"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 lg:px-6">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-6 shadow-sm transition-all duration-300 lg:h-20 lg:px-8",
          isScrolled
            ? "border border-slate-200/50 bg-white/50 backdrop-blur-md"
            : "border border-transparent bg-white"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 transition-all hover:opacity-80"
        >
          {/* Mobile: text only */}
          <span className="text-lg font-medium tracking-tight text-[#0D0D0D] lg:hidden">
            YellowBelly
          </span>
          {/* Desktop: logo */}
          <Image
            src="/logo-horizontal-dark-text.svg"
            alt="YellowBelly"
            width={228}
            height={52}
            className="hidden lg:block"
            priority
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
