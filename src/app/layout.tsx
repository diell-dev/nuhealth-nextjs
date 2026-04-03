import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | NuHealth Medical Wellness",
    default: "NuHealth Medical Wellness",
  },
  description: "Doctor-supervised medical wellness programs. Weight loss, hormone therapy, sexual health, and performance optimization. Telehealth and in-person in Michigan, Florida, Alabama, and Mississippi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-cream text-chocolate">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
