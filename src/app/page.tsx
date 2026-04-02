import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site-config";

export default function Home() {
  const serviceList = Object.values(services);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <Image src="/images/NU-png.png" alt="NuHealth Medical Wellness" width={200} height={80} className="mb-8" />
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-chocolate text-center mb-4">
        NuHealth Medical Wellness
      </h1>
      <p className="text-caramel text-lg text-center max-w-xl mb-12">
        Doctor-supervised wellness programs. Telehealth &amp; in-person consultations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
        {serviceList.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="block bg-white rounded-2xl border border-latte p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-chocolate font-serif">{service.name}</h2>
            <p className="text-sm text-caramel mt-2">
              {service.treatments.map((t) => t.name).join(" · ")}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
