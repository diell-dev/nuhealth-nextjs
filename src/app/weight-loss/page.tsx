import { Metadata } from 'next';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import TrustMarquee from '@/components/sections/TrustMarquee';
import StickyCta from '@/components/sections/StickyCta';
import FAQAccordion from '@/components/sections/FAQAccordion';

import WeightLossHero from '@/components/pages/weight-loss/WeightLossHero';
import WeightLossStatsBand from '@/components/pages/weight-loss/WeightLossStatsBand';
import WeightLossTreatments from '@/components/pages/weight-loss/WeightLossTreatments';
import WeightLossHowItWorks from '@/components/pages/weight-loss/WeightLossHowItWorks';
import WeightLossComparison from '@/components/pages/weight-loss/WeightLossComparison';
import WeightLossScienceSection from '@/components/pages/weight-loss/WeightLossScienceSection';
import WeightLossMythVsFact from '@/components/pages/weight-loss/WeightLossMythVsFact';
import WeightLossComparisonTable from '@/components/pages/weight-loss/WeightLossComparisonTable';
import WeightLossResults from '@/components/pages/weight-loss/WeightLossResults';
import WeightLossPricing from '@/components/pages/weight-loss/WeightLossPricing';
import WeightLossCertifications from '@/components/pages/weight-loss/WeightLossCertifications';
import WeightLossLocalPresence from '@/components/pages/weight-loss/WeightLossLocalPresence';
import WeightLossConsultationCTA from '@/components/pages/weight-loss/WeightLossConsultationCTA';
import WeightLossFinalCTA from '@/components/pages/weight-loss/WeightLossFinalCTA';
import WeightLossAnimations from '@/components/pages/weight-loss/WeightLossAnimations';

const faqData = [
  {
    question: 'How does Semaglutide work for weight loss?',
    answer: 'Semaglutide is a GLP-1 receptor agonist that reduces hunger signals in your brain, slows stomach emptying so you feel full longer, and improves blood sugar control. Originally developed for type 2 diabetes, it was FDA-approved for weight loss in 2017 after showing an average 15% weight loss in clinical trials. At NuHealth in Royal Oak, MI, compounded semaglutide starts at $125/month.'
  },
  {
    question: 'Am I a candidate for GLP-1 treatment?',
    answer: 'Most adults qualify. You\'re a good candidate if you have a BMI over 27 with weight-related health conditions or BMI over 30, or if traditional dieting hasn\'t worked long-term. NuHealth\'s free consultation includes a 15-minute screening covering your medical history, current medications, and goals.'
  },
  {
    question: 'What are the common side effects of GLP-1 medications?',
    answer: 'Most side effects are mild and temporary. Nausea is the most common, especially during the first 1-2 weeks. Other potential side effects include constipation, fatigue, or mild dizziness. NuHealth\'s titration protocol starts low and increases slowly to minimize side effects.'
  },
  {
    question: 'How quickly will I see weight loss results?',
    answer: 'Most patients notice appetite suppression within days. Measurable weight loss typically appears in weeks 2-3. The average patient loses 1-2 lbs per week initially. Full results take 6+ months. NuHealth patients on the full program see 24% average weight loss vs 18% from medication alone.'
  },
  {
    question: 'Is the medication FDA-approved?',
    answer: 'Yes. Semaglutide (Ozempic, Wegovy) and Tirzepatide (Mounjaro, Zepbound) are both FDA-approved for weight loss. NuHealth\'s compounded versions are manufactured in licensed 503B pharmacies that meet FDA standards, offering significant savings versus brand-name medications.'
  },
  {
    question: 'What\'s included in the monthly plan?',
    answer: 'Your monthly membership includes the medication, initial blood work ordered and reviewed by your provider plus quarterly check-ins, weekly 1-on-1 personalized nutrition plan and workout plan, injectable supplies, access to your board-certified provider, and 24/7 emergency support. Semaglutide plans start at $125/month, Tirzepatide at $265/month.'
  },
  {
    question: 'Does insurance cover GLP-1 weight loss medication in Michigan?',
    answer: 'Coverage has changed significantly. Blue Cross Blue Shield of Michigan dropped GLP-1 coverage for weight loss in January 2025, and Michigan Medicaid severely restricted access in January 2026. NuHealth\'s compounded semaglutide at $125/month is 93% less than brand-name Wegovy ($1,820/month), making treatment accessible without insurance coverage.'
  }
];

export const metadata: Metadata = {
  title: 'Medical Weight Loss in Royal Oak, MI | Semaglutide & Tirzepatide | NuHealth',
  description: 'NuHealth offers doctor-supervised GLP-1 weight loss programs in Royal Oak, Michigan. Compounded Semaglutide from $125/mo, Tirzepatide from $265/mo. Free consultation. Board-certified providers serving Royal Oak, Troy, Birmingham, Berkley & Metro Detroit.',
  keywords: 'medical weight loss Royal Oak, semaglutide Royal Oak MI, tirzepatide Michigan, GLP-1 weight loss Metro Detroit, weight loss clinic Royal Oak, doctor supervised weight loss Michigan, compounded semaglutide near me',
  openGraph: {
    title: 'Medical Weight Loss in Royal Oak, MI | NuHealth',
    description: 'Doctor-supervised GLP-1 weight loss programs. Semaglutide from $125/mo. Free consultation. Serving Royal Oak, Troy, Birmingham & Metro Detroit.',
    type: 'website',
    url: 'https://nuhealth-wellness.com/weight-loss',
    images: [
      {
        url: 'https://nuhealth-wellness.com/images/weight-loss-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NuHealth Medical Weight Loss'
      }
    ]
  },
  alternates: {
    canonical: 'https://nuhealth-wellness.com/weight-loss',
  }
};

export default function WeightLossPage() {
  const jsonLdBlocks = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "NuHealth Medical Wellness",
      "url": "https://nuhealth-wellness.com",
      "telephone": "+1-855-200-0588",
      "email": "hello@nuhealth-wellness.com",
      "description": "Doctor-supervised medical weight loss programs using compounded GLP-1 medications (Semaglutide, Tirzepatide). Telehealth and in-person consultations.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1000 Medical Drive",
        "addressLocality": "Royal Oak",
        "addressRegion": "MI",
        "postalCode": "48073",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Royal Oak",
          "addressRegion": "MI"
        },
        {
          "@type": "City",
          "name": "Troy",
          "addressRegion": "MI"
        },
        {
          "@type": "City",
          "name": "Birmingham",
          "addressRegion": "MI"
        }
      ],
      "medicalSpecialty": "Bariatrics",
      "sameAs": [
        "https://www.facebook.com/nuhealth",
        "https://www.instagram.com/nuhealth"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Sarah Chen",
      "jobTitle": "Chief Medical Officer",
      "medicalSpecialty": "Bariatrics",
      "worksFor": {
        "@type": "MedicalBusiness",
        "name": "NuHealth Medical Wellness",
        "url": "https://nuhealth-wellness.com"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Royal Oak",
        "addressRegion": "MI",
        "addressCountry": "US"
      }
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
          "name": "Weight Loss",
          "item": "https://nuhealth-wellness.com/weight-loss"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Semaglutide & Tirzepatide",
          "item": "https://nuhealth-wellness.com/weight-loss#treatments"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Start Medical Weight Loss at NuHealth",
      "description": "Four steps to begin your personalized GLP-1 weight loss program at NuHealth Medical Wellness in Royal Oak, MI.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Free Consultation",
          "text": "Chat with a board-certified provider. No credit card required. 15-minute assessment of your goals and medical history."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Lab Work & Assessment",
          "text": "Initial bloodwork ordered and reviewed by your provider to ensure you're a good candidate and establish your baseline."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Prescription & Setup",
          "text": "Your prescription is written, sent to our licensed 503B pharmacy, and medication ships within 2-5 business days in discreet packaging."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Ongoing Support",
          "text": "Monthly check-ins with your provider, personalized nutrition and fitness plans, and 24/7 access to support via your patient portal."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Semaglutide work for weight loss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Semaglutide is a GLP-1 receptor agonist that reduces hunger signals in your brain, slows stomach emptying so you feel full longer, and improves blood sugar control. Originally developed for type 2 diabetes, it was FDA-approved for weight loss in 2017 after showing an average 15% weight loss in clinical trials."
          }
        },
        {
          "@type": "Question",
          "name": "Am I a candidate for GLP-1 treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most adults qualify. You're a good candidate if you have a BMI over 27 with weight-related health conditions or BMI over 30, or if traditional dieting hasn't worked long-term. NuHealth's free consultation includes a 15-minute screening covering your medical history, current medications, and goals."
          }
        },
        {
          "@type": "Question",
          "name": "What are the common side effects of GLP-1 medications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most side effects are mild and temporary. Nausea is the most common, especially during the first 1-2 weeks. Other potential side effects include constipation, fatigue, or mild dizziness. NuHealth's titration protocol starts low and increases slowly to minimize side effects."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly will I see weight loss results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most patients notice appetite suppression within days. Measurable weight loss typically appears in weeks 2-3. The average patient loses 1-2 lbs per week initially. Full results take 6+ months. NuHealth patients on the full program see 24% average weight loss."
          }
        },
        {
          "@type": "Question",
          "name": "Is the medication FDA-approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Semaglutide (Ozempic, Wegovy) and Tirzepatide (Mounjaro, Zepbound) are both FDA-approved for weight loss. NuHealth's compounded versions are manufactured in licensed 503B pharmacies that meet FDA standards, offering significant savings versus brand-name medications."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the monthly plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your monthly membership includes the medication, initial blood work ordered and reviewed by your provider plus quarterly check-ins, weekly 1-on-1 personalized nutrition plan and workout plan, injectable supplies, access to your board-certified provider, and 24/7 emergency support."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover GLP-1 weight loss medication in Michigan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coverage has changed significantly. Many insurers have restricted GLP-1 coverage for weight loss. NuHealth's compounded semaglutide at $125/month is significantly less than brand-name alternatives, making treatment accessible without insurance coverage."
          }
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
        links={[
          { label: 'Treatments', href: '#treatments' },
          { label: 'How It Works', href: '#how' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Results', href: '#results' }
        ]}
        ctaText="Start Consultation"
        ctaHref="/weight-loss#consultation"
      />

      <WeightLossAnimations />
      <main className="overflow-hidden">
        <WeightLossHero />
        <TrustMarquee />
        <WeightLossStatsBand />
        <WeightLossTreatments />
        <WeightLossHowItWorks />
        <WeightLossComparison />
        <WeightLossScienceSection />
        <WeightLossMythVsFact />
        <WeightLossComparisonTable />
        <WeightLossResults />
        <WeightLossPricing />
        <WeightLossCertifications />
        <WeightLossLocalPresence />
        <WeightLossConsultationCTA />

        <section id="faq" className="bg-cream py-20 lg:py-28">
          <div className="nh-container">
            <div className="reveal mb-14">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate">
                Common questions. <em className="font-serif font-normal not-italic text-caramel italic">Clear answers.</em>
              </h2>
              <p className="text-lg text-caramel mt-4">Everything you need to know about GLP-1 weight loss at NuHealth.</p>
            </div>
            <FAQAccordion items={faqData} />
          </div>
        </section>

        <WeightLossFinalCTA />
      </main>

      <Footer />
      <StickyCta />
    </>
  );
}
