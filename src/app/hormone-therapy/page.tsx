import { Metadata } from "next";
import { Nav, Footer } from "@/components/layout";
import HormoneTherapyHero from "@/components/pages/hormone-therapy/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import BiologySection from "@/components/pages/hormone-therapy/BiologySection";
import TreatmentCards from "@/components/pages/hormone-therapy/TreatmentCards";
import JourneySection from "@/components/pages/hormone-therapy/JourneySection";
import LabsSection from "@/components/pages/hormone-therapy/LabsSection";
import PersonasSection from "@/components/pages/hormone-therapy/PersonasSection";
import WhyNuHealth from "@/components/pages/hormone-therapy/WhyNuHealth";
import TestimonialsSection from "@/components/pages/hormone-therapy/TestimonialsSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/pages/hormone-therapy/FinalCTA";
import HormoneTherapyAnimations from "@/components/pages/hormone-therapy/HormoneTherapyAnimations";

export const metadata: Metadata = {
  title: "Hormone Therapy for Men | TRT, Enclomiphene & DHEA | NuHealth Royal Oak",
  description:
    "Hormone therapy for men in Michigan, Florida, Alabama, and Mississippi. Medically supervised TRT, Enclomiphene, and DHEA programs. Personalized, evidence-based hormone optimization. $50 consultation. Telehealth available.",
  keywords:
    "TRT testosterone replacement therapy Royal Oak MI, hormone therapy men, low testosterone treatment, DHEA, Enclomiphene, hormone optimization",
  openGraph: {
    title: "Hormone Therapy for Men | TRT, Enclomiphene & DHEA | NuHealth Royal Oak",
    description:
      "Restore your energy, libido, and strength. Medically supervised hormone optimization programs from NuHealth.",
    type: "website",
    images: [
      {
        url: "https://nuhealth-wellness.com/images/hormone-therapy-og.jpg",
      },
    ],
    url: "https://nuhealth-wellness.com/hormone-therapy",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://nuhealth-wellness.com/hormone-therapy",
  },
};

const faqItems = [
  {
    question: "What are the signs of low testosterone?",
    answer:
      "Common symptoms include persistent fatigue, brain fog, low libido, difficulty building muscle, weight gain (especially around the midsection), mood changes, and reduced motivation. These often develop gradually over months or years.",
  },
  {
    question: "Is TRT safe? What about side effects?",
    answer:
      "TRT is safe when medically supervised by licensed providers. Common mild side effects include increased hematocrit (managed with bloodwork), acne, or mood swings. Serious side effects are rare. We monitor closely with regular labs and adjust doses to minimize risks. All protocols are personalized to your health profile.",
  },
  {
    question: "What's the difference between TRT, Enclomiphene, and DHEA?",
    answer:
      "TRT: Direct testosterone replacement. Most effective for low T. Works immediately but requires ongoing injections or gels. Enclomiphene: Stimulates your body's natural testosterone production. Preserves fertility. Slower onset but maintains natural function. DHEA: A precursor hormone. Supports testosterone production and energy. Often used as an add-on to amplify benefits.",
  },
  {
    question: "How quickly will I notice results?",
    answer:
      "With TRT: Mood and energy often improve in 2–3 weeks. Sexual function and muscle gains follow by 6–8 weeks. Full benefits by 12 weeks. With Enclomiphene: Results typically show in 4–8 weeks, with continued improvement over 12–16 weeks. Patience pays off. Hormone optimization is a gradual process, and we adjust along the way.",
  },
  {
    question: "Do I need to come into the office?",
    answer:
      "No. Most consultations and follow-ups happen via secure video (telehealth). Labs are done at a local lab near you. We currently serve patients in Michigan, Florida, Alabama, and Mississippi. In-office visits are optional but available if you prefer.",
  },
];

const trustBadges = [
  "Board-Certified Providers",
  "Comprehensive Lab Work",
  "Evidence-Based Protocols",
  "Telehealth Available",
  "Michigan, Florida, Alabama, Mississippi",
  "Personalized to Your Biology",
];

export default function HormoneTherapyPage() {
  const jsonLdBlocks = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "NuHealth Medical Wellness",
      "description": "Hormone optimization and testosterone replacement therapy for men",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1000 Medical Drive",
        "addressLocality": "Royal Oak",
        "addressRegion": "MI",
        "postalCode": "48073",
        "addressCountry": "US"
      },
      "telephone": "+1-855-200-0588",
      "email": "hello@nuhealth-wellness.com",
      "url": "https://nuhealth-wellness.com/hormone-therapy",
      "medicalSpecialty": "Endocrinology",
      "areaServed": [
        {
          "@type": "State",
          "name": "Michigan"
        },
        {
          "@type": "State",
          "name": "Florida"
        },
        {
          "@type": "State",
          "name": "Alabama"
        },
        {
          "@type": "State",
          "name": "Mississippi"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the signs of low testosterone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common symptoms include persistent fatigue, brain fog, low libido, difficulty building muscle, weight gain, mood changes, and reduced motivation."
          }
        },
        {
          "@type": "Question",
          "name": "Is TRT safe? What about side effects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TRT is safe when medically supervised by licensed providers. Common mild side effects include increased hematocrit (managed with bloodwork), acne, or mood swings. Serious side effects are rare. We monitor closely with regular labs and adjust doses to minimize risks."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between TRT, Enclomiphene, and DHEA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TRT: Direct testosterone replacement. Most effective for low T. Enclomiphene: Stimulates your body's natural testosterone production. Preserves fertility. DHEA: A precursor hormone. Supports testosterone production and energy. Often used as an add-on."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly will I notice results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With TRT: Mood and energy often improve in 2–3 weeks. Sexual function and muscle gains follow by 6–8 weeks. Full benefits by 12 weeks. With Enclomiphene: Results typically show in 4–8 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to come into the office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Most consultations and follow-ups happen via secure video (telehealth). Labs are done at a local lab near you. We currently serve patients in Michigan, Florida, Alabama, and Mississippi."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nuhealth-wellness.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hormone Therapy",
          "item": "https://nuhealth-wellness.com/hormone-therapy"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "TRT & Optimization",
          "item": "https://nuhealth-wellness.com/hormone-therapy#treatments"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Your Hormone Optimization Journey",
      "description": "A medically supervised process for hormone restoration",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Assessment & Consultation",
          "text": "Complete symptom questionnaire and health history. Provider review via telehealth. 30 minutes."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Comprehensive Blood Work",
          "text": "Full hormone panel including testosterone, estradiol, LH/FSH, and metabolic markers ordered at a local lab."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Personalized Protocol",
          "text": "Based on labs, your provider designs a custom protocol with TRT, Enclomiphene, DHEA, or a combination."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Ongoing Monitoring",
          "text": "Regular follow-up labs, symptom tracking, and dose adjustments to optimize results and safety."
        }
      ]
    }
  ];

  return (
    <main className="bg-cream">
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <Nav
        links={[
          { label: "Why NuHealth", href: "#why" },
          { label: "Treatments", href: "#treatments" },
          { label: "How It Works", href: "#journey" },
          { label: "FAQ", href: "#faq" },
        ]}
        ctaText="Start Assessment"
        ctaHref="/hormone-therapy#assessment"
        variant="light"
      />

      <HormoneTherapyAnimations />
      <HormoneTherapyHero />

      <TrustMarquee badges={trustBadges} location="Royal Oak, MI" />

      <BiologySection />

      <TreatmentCards />

      <JourneySection />

      <LabsSection />

      <PersonasSection />

      <WhyNuHealth />

      <TestimonialsSection />

      <FAQAccordion items={faqItems} title="Frequently Asked Questions" />

      <FinalCTA />

      <Footer />
    </main>
  );
}
