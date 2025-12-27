import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "GoldSky Technologies - Unified Technology Platform",
  description: "Building the unified technology platform for Smart Factory, Smart Retail, and Community Services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-white font-inter text-base text-gray-900 antialiased`}
      >
        <ClientProviders>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
