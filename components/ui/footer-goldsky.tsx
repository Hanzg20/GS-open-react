'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function FooterGoldSky() {
  const { t, locale } = useLanguage();

  const footerNavigation = {
    platform: [
      { name: "BaseNestus", href: "/platform#basenestus" },
      { name: "MsgNestus", href: "/platform#msgnestus" },
      { name: "DataNestus", href: "/platform#datanestus" },
      { name: locale === 'zh' ? '架构' : 'Architecture', href: "/platform#architecture" },
    ],
    solutions: [
      { name: locale === 'zh' ? '智能工厂' : 'Smart Factory', href: "/solutions/smart-factory" },
      { name: locale === 'zh' ? '智能零售' : 'Smart Retail', href: "/solutions/smart-retail" },
      { name: locale === 'zh' ? '社区服务' : 'Community Services', href: "/solutions/community" },
    ],
    products: [
      { name: "SmartFactory MES", href: "/products/smartfactory-mes" },
      { name: locale === 'zh' ? '设备监控' : 'Device Monitoring', href: "/products/device-monitoring" },
      { name: "Jinkoo", href: "/products/jinkoo" },
      { name: "JinBean", href: "/products/jinbean" },
    ],
    company: [
      { name: t.footer.links.about, href: "/about" },
      { name: t.footer.links.technology, href: "/technology" },
      { name: t.footer.links.contact, href: "/contact" },
      { name: locale === 'zh' ? '加入我们' : 'Careers', href: "/careers" },
    ],
  };

  const companyName = locale === 'zh' ? '金宏天科技' : 'GoldSky Technologies';

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/goldsky-logo.png"
                alt="GoldSky Technologies"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {companyName}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-2 max-w-md">
              {t.footer.company.description}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              {t.about.company.founded}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/108494899" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors" title={t.contact.social.linkedin}>
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://xhslink.com/m/A8Fj8q4BfOv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors" title={t.contact.social.xiaohongshu}>
                <span className="sr-only">Xiaohongshu</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.5 8.5h-7v7h7v-7zm-1.5 5.5h-4v-4h4v4z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@jinbeanhome?_r=1&_t=ZS-92ZoO9rdhYo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors" title={t.contact.social.tiktok}>
                <span className="sr-only">TikTok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">{t.footer.links.platform}</h3>
              <ul className="space-y-2">
                {footerNavigation.platform.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">{t.footer.links.solutions}</h3>
              <ul className="space-y-2">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">{t.footer.links.products}</h3>
              <ul className="space-y-2">
                {footerNavigation.products.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">{locale === 'zh' ? '公司' : 'Company'}</h3>
              <ul className="space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              {t.footer.copyright}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-yellow-400">
                {locale === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-yellow-400">
                {locale === 'zh' ? '服务条款' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}