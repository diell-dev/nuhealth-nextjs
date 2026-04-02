import { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import TrustMarquee from "@/components/sections/TrustMarquee";
import FAQAccordion from "@/components/sections/FAQAccordion";
import {
  HeroSection,
  PerformanceBottlenecks,
  ProtocolCarousel,
  BuildYourStack,
  MetricsSection,
  JourneySection,
  ScienceSection,
  WhoThisIsFor,
  Testimonials,
  FinalCTA,
} from "@/components/pages/performance";
import PerformanceAnimations from "@/components/pages/performance/PerformanceAnimations";

export const metadata: Metadata = {
  title: "Performance Optimization Protocol | NuHealth",
  description:
    "Medically supervised optimization protocols for cognition, recovery, and sustained energy. Glutathione, NAD+, and Sermorelin personalized to your biology.",
  openGraph: {
    title: "Performance Optimization Protocol | NuHealth",
    description:
      "Medically supervised optimization for cognition, recovery, and sustained energy through Glutathione, NAD+, and Sermorelin.",
    type: "website",
    url: "https://nuhealth-wellness.com/performance",
    images: [
      {
        url: "https://nuhealth-wellness.com/images/performance-og.jpg",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is a performance optimization protocol?",
    answer:
      "A performance optimization protocol is a medically supervised regimen of evidence-based interventions designed to address specific biological bottlenecks. Rather than treating disease, we optimize cellular function in healthy adults through personalized combinations of IV infusions and peptide therapy, all monitored via biomarker tracking.",
  },
  {
    question: "How do the three protocols work together?",
    answer:
      "Each protocol targets a complementary pathway. Glutathione addresses oxidative stress and immune function. NAD+ restores mitochondrial energy and cellular repair. Sermorelin optimizes growth hormone for recovery, muscle, and sleep. Together, they create a synergistic effect. Your provider customizes the combination based on your labs and goals.",
  },
  {
    question: "How quickly will I notice results?",
    answer:
      "Results vary by individual. Some patients report improvements in energy and focus within 2-3 weeks. Recovery benefits typically emerge by week 4-6. Biomarker changes (NAD+, glutathione, HGH) become measurable at 6-8 weeks. Most dramatic improvements occur in months 2-4 as protocols are refined based on follow-up labs.",
  },
  {
    question: "Is this safe? What about side effects?",
    answer:
      "All protocols are delivered under medical supervision. Most patients tolerate them well. Common, mild side effects include transient injection site reactions (Sermorelin), mild flushing or metallic taste (IV protocols), and temporary fatigue in the first 24-48 hours. Serious adverse events are rare when prescribed appropriately. Your provider screens for contraindications.",
  },
  {
    question: "Can I combine this with other NuHealth programs?",
    answer:
      "Absolutely. Many patients combine optimization protocols with hormone therapy, weight management, or nutrition coaching. Your provider coordinates care across all programs to ensure safety and synergy.",
  },
];

const trustBadges = [
  "Board-Certified Providers",
  "Evidence-Based Protocols",
  "Biomarker Tracking",
  "Royal Oak, MI",
  "Personalized to Your Biology",
  "Telehealth Available",
];

export default function PerformancePage() {
  const jsonLdBlocks = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "NuHealth Performance",
      "url": "https://nuhealth-wellness.com/performance",
      "telephone": "+1-855-200-0588",
      "email": "hello@nuhealth-wellness.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1000 Medical Drive",
        "addressLocality": "Royal Oak",
        "addressRegion": "MI",
        "postalCode": "48073",
        "addressCountry": "US"
      },
      "serviceArea": {
        "@type": "Place",
        "name": "Michigan and surrounding region"
      },
      "medicalSpecialty": "Performance Medicine",
      "description": "Medically supervised optimization protocols for cognition, recovery, and sustained energy. Glutathione, NAD+, and Sermorelin personalized to your biology."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a performance optimization protocol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A performance optimization protocol is a medically supervised regimen of evidence-based interventions designed to address specific biological bottlenecks. Rather than treating disease, we optimize cellular function in healthy adults through personalized combinations of IV infusions and peptide therapy."
          }
        },
        {
          "@type": "Question",
          "name": "How do the three protocols work together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each protocol targets a complementary pathway. Glutathione addresses oxidative stress and immune function. NAD+ restores mitochondrial energy and cellular repair. Sermorelin optimizes growth hormone for recovery, muscle, and sleep. Together, they create a synergistic effect."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly will I notice results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Results vary by individual. Some patients report improvements in energy and focus within 2-3 weeks. Recovery benefits typically emerge by week 4-6. Biomarker changes become measurable at 6-8 weeks. Most dramatic improvements occur in months 2-4."
          }
        },
        {
          "@type": "Question",
          "name": "Is this safe? What about side effects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All protocols are delivered under medical supervision. Most patients tolerate them well. Common, mild side effects include transient injection site reactions, mild flushing, and temporary fatigue. Serious adverse events are rare when prescribed appropriately."
          }
        },
        {
          "@type": "Question",
          "name": "Can I combine this with other NuHealth programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Many patients combine optimization protocols with hormone therapy, weight management, or nutrition coaching. Your provider coordinates care across all programs to ensure safety and synergy."
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
          "name": "Performance",
          "item": "https://nuhealth-wellness.com/performance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Optimization Protocols",
          "item": "https://nuhealth-wellness.com/performance#protocols"
        }
      ]
    }
  ];

  return (
    <>
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <Nav
        variant="dark"
        links={[
          { label: "Protocols", href: "#protocols" },
          { label: "How It Works", href: "#journey" },
          { label: "FAQ", href: "#faq" },
        ]}
        ctaText="Start Assessment"
        ctaHref="#assessment"
      />

      <PerformanceAnimations />
      <HeroSection />

      <TrustMarquee badges={trustBadges} />

      <PerformanceBottlenecks />

      <ProtocolCarousel />

      <BuildYourStack />

      <MetricsSection />

      <JourneySection />

      <ScienceSection />

      <WhoThisIsFor />

      <Testimonials />

      <FAQAccordion
        items={faqItems}
        title="Frequently Asked Questions"
        subtitle=""
      />

      <FinalCTA />

      <Footer />
    </>
  );
}
