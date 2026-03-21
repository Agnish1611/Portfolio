import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Merienda } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agnish Bhattacharya | Software Engineer & Web3 Developer",
  description:
    "I am Agnish Bhattacharya, a Full-Stack Software Engineer from India specializing in Next.js, scalable system architectures, and Web3 blockchain solutions.",
  metadataBase: new URL("https://agnishbhattacharya.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agnish Bhattacharya | Software Engineer",
    description: "Full-Stack Software Engineer and Web3 Developer.",
    url: "https://agnishbhattacharya.in",
    siteName: "Agnish Bhattacharya",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agnish Bhattacharya | Software Engineer",
    description: "Full-Stack Software Engineer and Web3 Developer.",
    creator: "@AgnishBhat",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${merienda.variable} antialiased transition-colors duration-300`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
