import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { StructuredData } from "@/components/ui/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuevamodo.co.za"),
  title: {
    default: "Nueva Modo | Electrical Engineering & Industrial Technology",
    template: "%s | Nueva Modo",
  },
  description:
    "Nueva Modo is a South African electrical engineering and industrial technology company delivering protection & testing, commissioning, process control, industrial IoT, software, and licensed nano-material cleaning technology.",
  keywords: [
    "electrical engineering",
    "protection and testing",
    "plant commissioning",
    "process control",
    "instrumentation",
    "SCADA",
    "PLC",
    "industrial IoT",
    "smart metering",
    "nano-material cleaning",
    "thermographic survey",
    "energy audit",
    "South Africa",
    "Kempton Park",
    "Nueva Modo",
  ],
  openGraph: {
    title: "Nueva Modo | Electrical Engineering & Industrial Technology",
    description:
      "Turnkey electrical engineering and industrial technology — protection & testing, commissioning, process control, IoT, software, and nano-material cleaning.",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nueva Modo — Electrical Engineering & Industrial Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nueva Modo | Electrical Engineering & Industrial Technology",
    description:
      "Turnkey electrical engineering and industrial technology solutions, delivered end-to-end.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <StructuredData />
        <Navbar />
        <main className="pt-16 lg:pt-18">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
