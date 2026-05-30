import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "LUMENÉ Portfolio | Emerging Fashion Designer",
  description:
    "Digital fashion portfolio showcasing contemporary womenswear, draping, batik-inspired textile surfaces, emotional storytelling, and conscious craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
