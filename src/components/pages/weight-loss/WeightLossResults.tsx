export default function WeightLossResults() {
  const testimonials = [
    {
      quote:
        '"I\'ve tried everything. Keto, Ozempic through my PCP, gym 5x/week. NuHealth was the first time I felt like someone actually designed a plan for MY body. Down 47 lbs in 5 months."',
      author: 'Sarah M.',
      location: 'Austin, TX',
      result: '-47 lbs in 5 months',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face',
      accentColor: 'olive',
      accentBg: '#304526/10'
    },
    {
      quote:
        '"The convenience alone is worth it. But what surprised me was how much they actually care. My provider adjusted my dose three times to get it right. That\'s not typical in telehealth."',
      author: 'James R.',
      location: 'Miami, FL',
      result: '-38 lbs in 4 months',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face',
      accentColor: '#5a8da6',
      accentBg: '#8FB7CD/15'
    },
    {
      quote:
        '"I was skeptical about Tirzepatide. My NuHealth provider walked me through the science, the side effects, everything. Zero pressure. I\'m down 52 lbs and I\'ve never felt more like myself."',
      author: 'Linda K.',
      location: 'Denver, CO',
      result: '-52 lbs in 6 months',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face',
      accentColor: 'caramel',
      accentBg: '#AB795A/15'
    }
  ];

  return (
    <section id="results" className="bg-latte py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal mb-14">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate">
            Real results. <em className="font-serif font-normal not-italic text-caramel italic">Real people.</em>
          </h2>
          <p className="text-lg text-caramel mt-4">Hear directly from patients who've transformed their lives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="reveal reveal-d1 relative testimonial-quote bg-white rounded-[1.25rem] p-7 border border-latte shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* 5-star rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-caramel fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-chocolate leading-relaxed mb-6">{testimonial.quote}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-11 h-11 rounded-full shadow-sm object-cover"
                />
                <div>
                  <p className="font-bold text-chocolate">{testimonial.author}</p>
                  <p className="text-xs text-caramel">{testimonial.location}</p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-latte flex items-center justify-between">
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: testimonial.accentBg, color: testimonial.accentColor }}
                >
                  {testimonial.result}
                </span>
                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:transition-colors"
                  style={{ backgroundColor: testimonial.accentBg }}
                  aria-label="Play video testimonial"
                >
                  <svg className="w-3.5 h-3.5 ml-0.5 fill-current" style={{ color: testimonial.accentColor }} viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="reveal mt-10 bg-white rounded-[1.25rem] p-6 text-center shadow-sm border border-latte">
          <div className="flex justify-center mb-4 -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face"
              alt="NuHealth weight loss patient"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face"
              alt="NuHealth weight loss patient"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face"
              alt="NuHealth weight loss patient"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face"
              alt="NuHealth weight loss patient"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          </div>
          <div className="flex justify-center gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-caramel fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-chocolate font-bold">4.9 out of 5 stars</p>
          <p className="text-sm text-caramel">From 2,847 verified patients</p>
        </div>
      </div>
    </section>
  );
}
