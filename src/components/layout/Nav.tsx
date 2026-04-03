"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  { label: "Weight Loss", href: "/weight-loss" },
  { label: "Performance", href: "/performance" },
  { label: "Hormone Therapy", href: "/hormone-therapy" },
  { label: "Sexual Health", href: "/sexual-health" },
];

interface NavProps {
  ctaText?: string;
  ctaHref?: string;
}

export default function Nav({
  ctaText = "Start Consultation",
  ctaHref = "/weight-loss#consultation",
}: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHomepage = pathname === "/";

  return (
    <nav
      ref={navRef}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : isHomepage
            ? "bg-transparent"
            : "bg-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="nh-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 relative z-10">
          <Image
            src="/images/NU-png.png"
            alt="NuHealth Medical Wellness"
            width={120}
            height={40}
            className="h-9 lg:h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-chocolate bg-latte/40"
                    : "text-caramel hover:text-chocolate hover:bg-latte/20"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+13138160037"
            className="text-sm text-caramel hover:text-chocolate transition-colors"
          >
            (313) 816-0037
          </a>
          <Link
            href={ctaHref}
            className="text-sm font-semibold rounded-full px-6 py-2.5 bg-olive text-cream transition-all duration-300 hover:bg-[#263a1c] hover:shadow-lg hover:shadow-olive/20 hover:-translate-y-0.5"
          >
            {ctaText}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-10 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-0.5 w-6 bg-chocolate rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-chocolate rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-chocolate rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu — full screen overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white/98 backdrop-blur-xl transition-all duration-400 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-8 pb-12">
          {/* Service links */}
          <div className="space-y-1 flex-1">
            {mainLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-4 text-2xl font-bold tracking-tight transition-all duration-300 border-b border-latte/20 ${
                    isActive ? "text-olive" : "text-chocolate"
                  }`}
                  style={{
                    transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                    transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: mobileOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span className="inline-block w-2 h-2 bg-olive rounded-full ml-3 align-middle" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA area */}
          <div
            className="space-y-4 pt-6"
            style={{
              transitionDelay: mobileOpen ? "200ms" : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            <a
              href="tel:+13138160037"
              className="block text-center text-caramel text-sm font-medium py-3"
            >
              Call us: (313) 816-0037
            </a>
            <Link
              href={ctaHref}
              onClick={() => setMobileOpen(false)}
              className="block text-center font-semibold rounded-full px-6 py-4 bg-olive text-cream text-lg"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
