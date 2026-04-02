import { StarIcon } from '@/components/ui/Icons'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote:
        '"The whole process took less than 20 minutes. I had my prescription the same day and medication at my door in 48 hours. Nobody knew. That mattered to me."',
      author: 'M.K.',
      age: 42,
      treatment: 'Sildenafil patient',
      initials: 'M.K.',
      bgColor: 'bg-sage/10',
      textColor: 'text-sage',
    },
    {
      id: 2,
      rating: 5,
      quote:
        '"I\'d been putting this off for years. My NuHealth provider made it comfortable and completely judgment-free. I wish I\'d done this sooner. The daily Tadalafil changed everything."',
      author: 'R.T.',
      age: 55,
      treatment: 'Tadalafil patient',
      initials: 'R.T.',
      bgColor: 'bg-caramel/10',
      textColor: 'text-caramel',
    },
    {
      id: 3,
      rating: 5,
      quote:
        '"The cost is straightforward and reasonable. No surprises. The telehealth visit was professional and fast. Honestly the best healthcare experience I\'ve had."',
      author: 'J.P.',
      age: 38,
      treatment: 'Sildenafil patient',
      initials: 'J.P.',
      bgColor: 'bg-olive/10',
      textColor: 'text-olive',
    },
  ]

  return (
    <section className="bg-latte py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mb-4">
            What patients are <em className="font-serif font-normal not-italic text-sage italic">saying.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="reveal bg-white rounded-[1.25rem] p-8 border border-latte relative testimonial-quote"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-chocolate leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-latte">
                <div className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                  <span className={`font-bold ${testimonial.textColor} text-sm`}>{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-chocolate">
                    {testimonial.author}, {testimonial.age}
                  </p>
                  <p className="text-xs text-caramel">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
