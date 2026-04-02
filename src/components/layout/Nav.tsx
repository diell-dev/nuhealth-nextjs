"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  variant?: "light" | "dark"; // light = cream/chocolate text, dark = sage/cream text
}

export default function Nav({
  links = [],
  ctaText = "Start Consultation",
  ctaHref = "#consultation",
  variant = "light",
}: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "dark";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-chocolate/90 backdrop-blur-lg shadow-sm"
            : "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="nh-container flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-1.5">
          <Image
            src="/images/NU-png.png"
            alt="NuHealth Medical Wellness"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-sage hover:text-cream"
                  : "text-caramel hover:text-chocolate"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            className={`text-sm font-semibold rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 ${
              isDark
                ? "bg-sage text-chocolate hover:bg-[#7aa3b8]"
                : "bg-olive text-cream hover:bg-[#263a1c]"
            }`}
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 ${isDark ? "text-sage" : "text-chocolate"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t px-4 py-6 space-y-4 ${
            isDark
              ? "bg-chocolate/95 border-olive/30"
              : "bg-white/95 border-latte/30"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-medium transition-colors ${
                isDark ? "text-sage hover:text-cream" : "text-caramel hover:text-chocolate"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setMobileOpen(false)}
            className={`block text-center font-semibold rounded-full px-6 py-3 ${
              isDark
                ? "bg-sage text-chocolate"
                : "bg-olive text-cream"
            }`}
          >
            {ctaText}
          </a>
        </div>
      )}
    </nav>
  );
}
