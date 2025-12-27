'use client';

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-200/30 to-orange-200/30 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-100/20 to-orange-100/20 blur-3xl" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-1/4 h-24 w-24 rounded-lg bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rotate-12 animate-float" />
        <div className="absolute bottom-40 left-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-300/10 to-orange-300/10 animate-float-delay" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 mb-8">
            <span className="text-sm font-medium text-yellow-800">
              {t.home.hero.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {t.home.hero.title1}{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {t.home.hero.title2}
            </span>
            <br />
            {t.home.hero.title3}
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 md:text-xl">
            {t.home.hero.description1}
            <br />
            {t.home.hero.description2}
            <br />
            {t.home.hero.description3}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-3 text-base font-medium text-white shadow-sm hover:from-yellow-600 hover:to-orange-600 transition-all"
            >
              {t.home.hero.talkToUs}
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/platform"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              {t.home.hero.explorePlatform}
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
