"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function HeaderGoldSky() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.platform, href: "/platform" },
    { name: t.nav.solutions, href: "/solutions" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.industries, href: "/industries" },
    { name: t.nav.technology, href: "/technology" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const companyName = locale === 'zh' ? '金宏天' : 'GoldSky';

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/goldsky-logo.png"
                alt="GoldSky Technologies"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {companyName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <LanguageSwitcher />
            <Link
              href="/contact?type=demo"
              className="text-sm font-medium text-gray-700 hover:text-yellow-600"
            >
              {locale === 'zh' ? '申请演示' : 'Request Demo'}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 text-sm font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all shadow-sm hover:shadow-md"
            >
              {t.common.contactUs}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2 space-y-2">
                <div className="px-3 py-2">
                  <LanguageSwitcher />
                </div>
                <Link
                  href="/contact?type=demo"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {locale === 'zh' ? '申请演示' : 'Request Demo'}
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-yellow-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.common.contactUs}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}