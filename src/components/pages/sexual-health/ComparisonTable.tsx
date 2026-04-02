export default function ComparisonTable() {
  return (
    <section className="bg-chocolate py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-cream mb-4">
            Side-by-side <em className="font-serif font-normal not-italic text-sage italic">comparison.</em>
          </h2>
        </div>

        <div className="reveal max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-olive/40">
                  <th className="text-left py-4 px-6 text-cream font-bold text-lg">Sildenafil</th>
                  <th className="text-center py-4 px-6 text-cream/60 text-xs font-semibold uppercase tracking-wide">
                    vs
                  </th>
                  <th className="text-right py-4 px-6 text-cream font-bold text-lg">Tadalafil</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-olive/30">
                  <td className="py-4 px-6 text-cream/90 font-medium">Works in 30-60 minutes</td>
                  <td className="text-center"></td>
                  <td className="py-4 px-6 text-right text-cream/90 font-medium">Works in 1-2 hours</td>
                </tr>
                <tr className="bg-olive/10 border-b border-olive/30">
                  <td className="py-4 px-6 text-cream/90 font-medium">Lasts 4-6 hours</td>
                  <td className="text-center"></td>
                  <td className="py-4 px-6 text-right text-cream/90 font-medium">Lasts up to 36 hours</td>
                </tr>
                <tr className="border-b border-olive/30">
                  <td className="py-4 px-6 text-cream/90 font-medium">Take as needed</td>
                  <td className="text-center"></td>
                  <td className="py-4 px-6 text-right text-cream/90 font-medium">Take daily at low dose</td>
                </tr>
                <tr className="bg-olive/10 border-b border-olive/30">
                  <td className="py-4 px-6 text-cream/90 font-medium">Best for planned moments</td>
                  <td className="text-center"></td>
                  <td className="py-4 px-6 text-right text-cream/90 font-medium">Best for spontaneity</td>
                </tr>
                <tr className="border-b border-olive/30">
                  <td className="py-4 px-6 text-cream/90 font-medium">Starting at $90/mo</td>
                  <td className="text-center"></td>
                  <td className="py-4 px-6 text-right text-cream/90 font-medium">Starting at $100/mo</td>
                </tr>
                <tr className="bg-olive/10">
                  <td className="py-4 px-6 text-cream/90 font-medium">No timing needed</td>
                  <td className="text-center"></td>
                  <td className="py-4 px-6 text-right text-cream/90 font-medium">Always available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
