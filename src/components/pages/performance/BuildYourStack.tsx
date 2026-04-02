"use client";

import { useState } from "react";

interface Protocol {
  id: string;
  name: string;
  label: string;
  description: string;
  price: number;
  accentColor: string;
  borderColor: string;
}

const protocols: Protocol[] = [
  {
    id: "glutathione",
    name: "Glutathione IV",
    label: "Glutathione",
    description: "Master antioxidant for cellular protection and recovery.",
    price: 90,
    accentColor: "border-sage",
    borderColor: "border-latte",
  },
  {
    id: "nad",
    name: "NAD+ Infusion",
    label: "NAD+",
    description: "Mitochondrial energy and cellular repair.",
    price: 200,
    accentColor: "border-olive",
    borderColor: "border-latte",
  },
  {
    id: "sermorelin",
    name: "Sermorelin Peptide",
    label: "Sermorelin",
    description: "Growth hormone optimization for recovery.",
    price: 150,
    accentColor: "border-caramel",
    borderColor: "border-latte",
  },
];

export default function BuildYourStack() {
  const [selectedProtocols, setSelectedProtocols] = useState<string[]>([]);

  const totalPrice = selectedProtocols.reduce((sum, id) => {
    const protocol = protocols.find((p) => p.id === id);
    return sum + (protocol?.price || 0);
  }, 0);

  const toggleProtocol = (id: string) => {
    setSelectedProtocols((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-latte">
      <div className="nh-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive mb-4">
            Build Your Custom Protocol
          </h2>
          <p className="text-lg text-chocolate/80 max-w-2xl mx-auto">
            Select the protocols that align with your performance goals. Your
            provider will customize dosing based on your labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {protocols.map((protocol) => {
            const isSelected = selectedProtocols.includes(protocol.id);
            return (
              <div
                key={protocol.id}
                className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 card-shine cursor-pointer ${
                  isSelected ? `${protocol.accentColor} shadow-lg` : protocol.borderColor
                }`}
                onClick={() => toggleProtocol(protocol.id)}
              >
                <label className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleProtocol(protocol.id)}
                    className="w-5 h-5 mt-1 rounded accent-sage"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-olive mb-2">{protocol.label}</p>
                    <p className="text-sm text-caramel mb-4">{protocol.description}</p>
                    <p className="text-xl font-bold text-sage">
                      ${protocol.price}
                      <span className="text-sm font-normal text-caramel">/month</span>
                    </p>
                  </div>
                </label>
              </div>
            );
          })}
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-2xl p-8 border-2 border-olive max-w-md mx-auto reveal">
          <p className="text-sm uppercase tracking-widest text-caramel/70 mb-2">
            Your Custom Protocol
          </p>
          <p className="text-sm text-caramel mb-6">
            {selectedProtocols.length === 0
              ? "Select protocols above to create your stack"
              : `Protocols selected: ${selectedProtocols.length}`}
          </p>
          <div className="mb-6 pb-6 border-b border-latte">
            {selectedProtocols.length > 0 ? (
              <p className="text-3xl font-bold text-olive">${totalPrice} / month</p>
            ) : (
              <p className="text-latte">—</p>
            )}
          </div>
          <button className="w-full bg-olive text-cream px-6 py-4 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-50">
            Schedule Consultation
          </button>
          <p className="text-xs text-caramel/70 text-center mt-4">
            Pricing includes provider guidance and monthly follow-up labs.
          </p>
        </div>
      </div>
    </section>
  );
}
