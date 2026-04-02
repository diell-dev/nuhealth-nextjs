export default function NuHealthComparison() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage mb-3 block">Compare</span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mb-4">
            How NuHealth <em className="font-serif font-normal not-italic text-sage italic">compares.</em>
          </h2>
          <p className="text-lg text-caramel max-w-2xl mx-auto">All-in pricing. No hidden fees. No insurance needed.</p>
        </div>

        <div className="reveal max-w-5xl mx-auto overflow-x-auto hide-scrollbar rounded-2xl border border-latte">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-latte/50">
                <th className="text-left p-5 text-sm text-caramel font-semibold w-1/4"></th>
                <th className="text-center p-5 w-1/4">
                  <span className="bg-sage text-chocolate px-4 py-1.5 rounded-full text-sm font-bold">
                    NuHealth
                  </span>
                </th>
                <th className="text-center p-5 text-sm text-caramel font-semibold w-1/4">Retail Pharmacy</th>
                <th className="text-center p-5 text-sm text-caramel font-semibold w-1/4">
                  Online-Only Providers
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-latte">
                <td className="p-5 text-chocolate font-medium">Sildenafil price</td>
                <td className="p-5 text-center font-bold text-chocolate">Starting at $90/mo</td>
                <td className="p-5 text-center text-caramel">$70+/pill</td>
                <td className="p-5 text-center text-caramel">$30-50/mo + consult</td>
              </tr>
              <tr className="border-t border-latte bg-latte/20">
                <td className="p-5 text-chocolate font-medium">Tadalafil price</td>
                <td className="p-5 text-center font-bold text-chocolate">Starting at $100/mo</td>
                <td className="p-5 text-center text-caramel">$50+/pill</td>
                <td className="p-5 text-center text-caramel">$50-80/mo + consult</td>
              </tr>
              <tr className="border-t border-latte">
                <td className="p-5 text-chocolate font-medium">Consultation fee</td>
                <td className="p-5 text-center font-bold text-sage">$50 one-time</td>
                <td className="p-5 text-center text-caramel">$150-300</td>
                <td className="p-5 text-center text-caramel">Free (with subscription)</td>
              </tr>
              <tr className="border-t border-latte bg-latte/20">
                <td className="p-5 text-chocolate font-medium">In-person option</td>
                <td className="p-5 text-center font-bold text-sage">Royal Oak, MI</td>
                <td className="p-5 text-center text-caramel">Yes (office visit)</td>
                <td className="p-5 text-center text-caramel/50">No — virtual only</td>
              </tr>
              <tr className="border-t border-latte">
                <td className="p-5 text-chocolate font-medium">Shipping</td>
                <td className="p-5 text-center font-bold text-chocolate">Free, discreet</td>
                <td className="p-5 text-center text-caramel">N/A (pickup)</td>
                <td className="p-5 text-center text-caramel">Free (with plan)</td>
              </tr>
              <tr className="border-t border-latte bg-latte/20">
                <td className="p-5 text-chocolate font-medium">Includes everything?</td>
                <td className="p-5 text-center font-bold text-sage">Meds + consults + shipping</td>
                <td className="p-5 text-center text-caramel/50">Meds only</td>
                <td className="p-5 text-center text-caramel">Varies by plan</td>
              </tr>
              <tr className="border-t border-latte">
                <td className="p-5 text-chocolate font-medium">Dosage-based pricing</td>
                <td className="p-5 text-center font-bold text-sage">
                  25mg-100mg (Sildenafil)
                  <br />
                  10mg-20mg (Tadalafil)
                </td>
                <td className="p-5 text-center text-caramel/50">Standard dosages</td>
                <td className="p-5 text-center text-caramel">Standard dosages</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
