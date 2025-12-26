"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Platform", href: "/platform" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Technology", href: "/technology" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function HeaderGoldSky() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                GoldSky
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <Link
              href="/contact?type=demo"
              className="text-sm font-medium text-gray-700 hover:text-yellow-600"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 text-sm font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all shadow-sm hover:shadow-md"
            >
              Talk to Us
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
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2">
                <Link
                  href="/contact?type=demo"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Demo
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-yellow-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}