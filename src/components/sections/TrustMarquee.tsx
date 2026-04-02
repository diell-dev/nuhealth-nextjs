const defaultBadges = [
  "FDA Compliant",
  "HIPAA Certified",
  "Board-Certified MDs",
  "503B Pharmacy",
  "BBB Accredited",
  "Telemedicine Certified",
  "LegitScript Verified",
];

interface TrustMarqueeProps {
  badges?: string[];
  location?: string;
}

export default function TrustMarquee({ badges = defaultBadges, location = "Royal Oak, MI" }: TrustMarqueeProps) {
  const allBadges = [...badges, location];

  return (
    <section className="bg-latte py-5 overflow-hidden border-y border-[#D8BDA3]/50">
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[...allBadges, ...allBadges].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-olive shrink-0" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-semibold text-chocolate">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
