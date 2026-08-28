import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HaniQ Labs | AI Software Development, Consulting & Training",
  description:
    "HaniQ Labs helps businesses accelerate innovation through AI software development, Generative AI solutions, consulting, and professional training programs.",
  keywords: [
    "HaniQ Labs",
    "AI Development",
    "AI Consulting",
    "Generative AI",
    "RAG Architecture",
    "Agentic AI",
    "AI Training",
    "HaniScan AI",
    "HaniAssist AI",
    "HaniTravel AI",
  ],
  authors: [{ name: "HaniQ Labs Team" }],
  openGraph: {
    title: "HaniQ Labs | AI Software Development, Consulting & Training",
    description:
      "HaniQ Labs delivers AI software products, consulting services, and professional training programs that help organizations innovate, automate, and grow.",
    type: "website",
    locale: "en_US",
    siteName: "HaniQ Labs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-midnight text-snow antialiased selection:bg-cyanBrand selection:text-midnight min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
