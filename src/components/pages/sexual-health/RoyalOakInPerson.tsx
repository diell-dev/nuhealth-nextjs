import Link from 'next/link'
import { MapPinIcon, PhoneIcon, ClockIcon } from '@/components/ui/Icons'

export default function RoyalOakInPerson() {
  const serviceAreas = [
    'Royal Oak',
    'Troy',
    'Birmingham',
    'Berkley',
    'Southfield',
    'Detroit',
    'Ferndale',
  ]

  return (
    <section className="bg-chocolate py-20 lg:py-28 relative overflow-hidden noise-overlay">
      <div className="nh-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage mb-4 block">Local Presence</span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-cream mb-6">
              Prefer <em className="font-serif font-normal not-italic text-sage italic">face-to-face?</em>
            </h2>
            <p className="text-lg text-cream/80 leading-relaxed mb-8">
              NuHealth offers something no online-only platform can: a real office with licensed providers you can meet
              in person. For a topic this personal, some patients prefer that.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-sage shrink-0" />
                <span className="text-cream/90">Royal Oak, Michigan</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-sage shrink-0" />
                <span className="text-cream/90">855-200-0588</span>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-sage shrink-0" />
                <span className="text-cream/90">Mon-Fri 9am-6pm • Telehealth 24/7</span>
              </div>
            </div>
            <Link
              href="/sexual-health#locations"
              className="reveal inline-block mt-8 bg-sage text-chocolate font-semibold rounded-full px-8 py-4 hover:bg-[#7aa3b8] transition-all duration-300"
            >
              Book In-Person Visit
            </Link>
          </div>
          <div className="reveal">
            <div className="bg-olive/30 rounded-2xl p-8 border border-sage/20">
              <h3 className="text-xl font-bold text-cream mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-cream/10 text-cream/80 text-sm px-3 py-1.5 rounded-full border border-cream/10"
                  >
                    {area}
                  </span>
                ))}
                <span className="bg-sage/20 text-sage text-sm px-3 py-1.5 rounded-full border border-sage/20 font-semibold">
                  + All of Michigan (telehealth)
                </span>
              </div>
              <div className="mt-6 p-4 bg-olive/20 rounded-xl border border-sage/10">
                <p className="text-sm text-cream/70">
                  <strong className="text-sage">Only NuHealth</strong> offers both in-person and telehealth sexual health
                  consultations in Metro Detroit. Every online-only provider is virtual-only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
