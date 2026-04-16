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
  metadataBase: new URL("https://nuevamodo.com"),
  title: {
    default: "Nueva Modo | Industrial IoT, Smart Monitoring & Software Solutions",
    template: "%s | Nueva Modo",
  },
  description:
    "Nueva Modo delivers turnkey industrial technology solutions across smart metering, industrial IoT, smart monitoring, software systems, and process automation.",
  keywords: [
    "industrial IoT",
    "smart metering",
    "smart monitoring",
    "process control",
    "SCADA",
    "PLC",
    "software solutions",
    "industrial technology",
    "Nueva Modo",
  ],
  openGraph: {
    title: "Nueva Modo | Industrial IoT, Smart Monitoring & Software Solutions",
    description:
      "Turnkey industrial technology solutions across smart metering, IoT, smart monitoring, and software.",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nueva Modo — Turnkey Industrial Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nueva Modo | Industrial IoT, Smart Monitoring & Software Solutions",
    description:
      "Turnkey industrial technology solutions across smart metering, IoT, smart monitoring, and software.",
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
