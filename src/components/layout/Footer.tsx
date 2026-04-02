import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="bg-chocolate text-cream/60 pt-16 pb-8">
      <div className="nh-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/NU-png.png"
              alt="NuHealth Medical Wellness"
              width={120}
              height={40}
              className="h-10 w-auto mb-4 brightness-200"
            />
            <p className="text-sm leading-relaxed">
              Doctor-supervised medical wellness. Telehealth &amp; in-person consultations.
            </p>
            <p className="text-sm mt-4">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-cream transition-colors">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/weight-loss" className="hover:text-cream transition-colors">Weight Loss</Link></li>
              <li><Link href="/sexual-health" className="hover:text-cream transition-colors">Sexual Health</Link></li>
              <li><Link href="/hormone-therapy" className="hover:text-cream transition-colors">Hormone Therapy</Link></li>
              <li><Link href="/performance" className="hover:text-cream transition-colors">Performance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-cream transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-cream transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-cream transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-4">Service Area</h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.serviceStates.map((state) => (
                <li key={state}>{state}</li>
              ))}
            </ul>
            <p className="text-xs mt-6 text-cream/40">
              Telehealth available in all listed states. In-person visits in Michigan.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} NuHealth Medical Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
            <Link href="/hipaa" className="hover:text-cream transition-colors">HIPAA Notice</Link>
          </div>
        </div>

        <p className="text-[10px] text-cream/25 mt-8 max-w-3xl">
          Disclaimer: NuHealth Medical Wellness provides telehealth and in-person medical services. All treatments require a medical consultation and are prescribed at the discretion of licensed providers. Results may vary. This website does not provide medical advice and is for informational purposes only.
        </p>
      </div>
    </footer>
  );
}
