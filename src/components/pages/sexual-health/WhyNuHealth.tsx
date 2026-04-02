import { CheckIcon } from '@/components/ui/Icons'

export default function WhyNuHealth() {
  const reasons = [
    {
      title: 'Board-Certified Providers',
      description: 'Licensed physicians with experience in sexual health, not just algorithms.',
    },
    {
      title: 'HIPAA Compliant',
      description: 'Your health data is encrypted, private, and never shared without your consent.',
    },
    {
      title: 'Same-Day Prescriptions',
      description: 'No waiting weeks for an appointment. Get prescribed and shipped the same day.',
    },
    {
      title: 'Discreet Packaging',
      description: 'Unmarked boxes. No visible labeling. Your privacy is our priority.',
    },
  ]

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mb-4">
            Why <em className="font-serif font-normal not-italic text-sage italic">NuHealth.</em>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10">
                  <CheckIcon className="h-6 w-6 text-sage" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-chocolate mb-2">{reason.title}</h3>
                <p className="text-caramel leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
