import { Metadata } from 'next'
import TrustMarquee from '@/components/sections/TrustMarquee'
import FAQAccordion from '@/components/sections/FAQAccordion'
import Hero from '@/components/pages/sexual-health/Hero'
import TrustBadges from '@/components/pages/sexual-health/TrustBadges'
import TreatmentSelector from '@/components/pages/sexual-health/TreatmentSelector'
import ComparisonTable from '@/components/pages/sexual-health/ComparisonTable'
import NuHealthComparison from '@/components/pages/sexual-health/NuHealthComparison'
import HowItWorks from '@/components/pages/sexual-health/HowItWorks'
import PricingSummary from '@/components/pages/sexual-health/PricingSummary'
import Science from '@/components/pages/sexual-health/Science'
import WhyNuHealth from '@/components/pages/sexual-health/WhyNuHealth'
import RoyalOakInPerson from '@/components/pages/sexual-health/RoyalOakInPerson'
import Testimonials from '@/components/pages/sexual-health/Testimonials'
import FinalCTA from '@/components/pages/sexual-health/FinalCTA'
import AIAssistant from '@/components/pages/sexual-health/AIAssistant'
import SexualHealthAnimations from '@/components/pages/sexual-health/SexualHealthAnimations'

export const metadata: Metadata = {
  title: 'Sexual Health for Men | Sildenafil & Tadalafil | NuHealth Medical Wellness',
  description: 'NuHealth offers discreet, doctor-supervised ED treatment programs in Royal Oak, Michigan. Compounded Sildenafil from $90/mo, Tadalafil from $100/mo. $50 consultation fee. Board-certified providers. Telehealth & in-person.',
  keywords: 'erectile dysfunction treatment Royal Oak, sildenafil Michigan, tadalafil telehealth, ED medication near me, men\'s sexual health Royal Oak MI, discreet ED treatment, compounded sildenafil, online ED prescription Michigan',
  openGraph: {
    title: 'Men\'s Sexual Health | Sildenafil & Tadalafil | NuHealth',
    description: 'Doctor-supervised ED treatment programs. Sildenafil from $90/mo. $50 consultation fee. Discreet telehealth from Royal Oak, MI.',
    type: 'website',
    url: 'https://nuhealth-wellness.com/sexual-health',
    images: [
      {
        url: 'https://nuhealth-wellness.com/images/sexual-health-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NuHealth Sexual Health Treatment',
      },
    ],
  },
  alternates: {
    canonical: 'https://nuhealth-wellness.com/sexual-health',
  },
}

const faqItems = [
  {
    id: 1,
    question: 'What is the difference between Sildenafil and Tadalafil?',
    answer: 'Sildenafil (generic Viagra) works within 30-60 minutes and lasts 4-6 hours. Best for planned moments. Tadalafil (generic Cialis) takes 1-2 hours to peak but lasts up to 36 hours. It can also be taken daily at a low dose for continuous readiness — no timing needed. Both are PDE5 inhibitors that work by increasing blood flow. Your NuHealth provider will recommend the best option based on your lifestyle and preferences.',
  },
  {
    id: 2,
    question: 'How do I get started?',
    answer: 'Start with a 15-minute telehealth consultation for a $50 fee (one-time) — entirely from your phone or computer. Your board-certified provider reviews your medical history, discusses your goals, and determines the right medication and dose. If clinically appropriate, your prescription is submitted the same day. Medication arrives in discreet, unmarked packaging within 2-5 business days.',
  },
  {
    id: 3,
    question: 'Are there side effects?',
    answer: 'The most common side effects are mild: headache, facial flushing, nasal congestion, and occasional indigestion. These typically diminish with continued use. PDE5 inhibitors are contraindicated if you take nitrates for chest pain or certain alpha-blockers. Your NuHealth provider will review all your medications for safety before prescribing. Serious side effects are rare.',
  },
  {
    id: 4,
    question: 'Is everything really private?',
    answer: 'Absolutely. NuHealth is fully HIPAA-compliant. All consultations are conducted via private telehealth. Medication is shipped in completely unmarked, discreet packaging with no indication of contents. Your health records are encrypted and stored securely. We never share your information with anyone without your explicit consent.',
  },
  {
    id: 5,
    question: 'How much does it cost?',
    answer: 'Compounded Sildenafil starts at $90/month (25mg-100mg dosage range) and Tadalafil starts at $100/month (10mg-20mg dosage range). The consultation fee is $50, which is a one-time charge. Your monthly medication includes the medication, provider consultation, and discreet shipping. No insurance required. No hidden fees. No subscription trap. It\'s significantly less than brand-name Viagra ($70 per pill) or Cialis ($50 per pill).',
  },
]

export default function SexualHealthPage() {
  const jsonLdBlocks = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "NuHealth Medical Wellness — Sexual Health",
      "url": "https://nuhealth-wellness.com/sexual-health",
      "telephone": "+1-855-200-0588",
      "email": "hello@nuhealth-wellness.com",
      "description": "Doctor-supervised sexual health programs using compounded PDE5 inhibitors (Sildenafil, Tadalafil). Discreet telehealth and in-person consultations in Royal Oak, MI.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1000 Medical Drive",
        "addressLocality": "Royal Oak",
        "addressRegion": "MI",
        "postalCode": "48073",
        "addressCountry": "US"
      },
      "medicalSpecialty": "Urology",
      "areaServed": [
        {
          "@type": "City",
          "name": "Royal Oak",
          "addressRegion": "MI"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Sildenafil and Tadalafil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sildenafil (generic Viagra) works for 4-6 hours and is taken as needed before activity. Tadalafil (generic Cialis) lasts up to 36 hours and can be taken daily at a lower dose for continuous readiness. Both are PDE5 inhibitors. NuHealth offers compounded versions of both at significantly lower cost than brand names."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with a 15-minute telehealth consultation for a $50 fee. Your board-certified provider reviews your medical history and determines the right medication. If appropriate, your prescription is submitted the same day. Medication arrives in discreet packaging within 2-5 business days."
          }
        },
        {
          "@type": "Question",
          "name": "Are there side effects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common side effects are mild: headache, facial flushing, nasal congestion, and occasional indigestion. These typically diminish with continued use. Your NuHealth provider will review all medications for safety before prescribing."
          }
        },
        {
          "@type": "Question",
          "name": "Is everything really private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. NuHealth is fully HIPAA-compliant. All consultations are private via telehealth. Medication ships in completely unmarked, discreet packaging. Your health records are encrypted and stored securely."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compounded Sildenafil starts at $90/month and Tadalafil starts at $100/month. The consultation fee is $50 (one-time). No insurance required. No hidden fees. Significantly less than brand-name alternatives."
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
          "name": "Sexual Health",
          "item": "https://nuhealth-wellness.com/sexual-health"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sildenafil & Tadalafil",
          "item": "https://nuhealth-wellness.com/sexual-health#treatments"
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
      <SexualHealthAnimations />
      <Hero />
      <TrustMarquee />
      <TrustBadges />
      <TreatmentSelector />
      <ComparisonTable />
      <NuHealthComparison />
      <HowItWorks />
      <PricingSummary />
      <Science />
      <WhyNuHealth />
      <RoyalOakInPerson />
      <Testimonials />
      <FAQAccordion items={faqItems} />
      <FinalCTA />
      <AIAssistant />
    </>
  )
}
