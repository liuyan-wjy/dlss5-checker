import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DLSS 5 GPU Compatibility Checker — Is Your GPU Ready for DLSS 5?",
  description:
    "Instantly check if your NVIDIA GPU supports DLSS 5. See FPS boost estimates for top games, compare DLSS 5 vs DLSS 4, and find the best upgrade path.",
  keywords: [
    "DLSS 5",
    "DLSS 5 supported cards",
    "DLSS 5 compatible GPUs",
    "DLSS 5 GPU list",
    "DLSS 5 vs DLSS 4",
    "RTX 5090 DLSS 5",
    "multi frame generation",
    "NVIDIA DLSS checker",
  ],
  metadataBase: new URL("https://dlss5.net"),
  openGraph: {
    title: "DLSS 5 GPU Compatibility Checker",
    description: "Check if your GPU supports DLSS 5 and how much FPS boost you can expect.",
    type: "website",
    locale: "en_US",
    url: "https://dlss5.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 GPU Compatibility Checker",
    description: "Instantly check DLSS 5 support for your NVIDIA GPU.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
