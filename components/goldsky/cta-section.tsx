'use client';

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-600 to-orange-700">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.home.cta.title}
            </h2>
            <p className="mt-4 text-lg text-yellow-100">
              {t.home.cta.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-orange-600 shadow-lg hover:bg-gray-50 transition-colors"
              >
                {t.home.cta.talkToUs}
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link
                href="/contact?type=demo"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                {t.home.cta.requestDemo}
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{t.home.cta.stat1Value}</div>
                <div className="mt-1 text-sm text-yellow-100">{t.home.cta.stat1Label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{t.home.cta.stat2Value}</div>
                <div className="mt-1 text-sm text-yellow-100">{t.home.cta.stat2Label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{t.home.cta.stat3Value}</div>
                <div className="mt-1 text-sm text-yellow-100">{t.home.cta.stat3Label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}