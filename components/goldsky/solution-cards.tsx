'use client';

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SolutionCards() {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t.home.solutions.factory.title,
      icon: "🏭",
      description: t.home.solutions.factory.description,
      features: [
        t.home.solutions.factory.feature1,
        t.home.solutions.factory.feature2,
        t.home.solutions.factory.feature3,
        t.home.solutions.factory.feature4,
      ],
      href: "/solutions/smart-factory",
      color: "blue",
    },
    {
      title: t.home.solutions.retail.title,
      icon: "🏪",
      description: t.home.solutions.retail.description,
      features: [
        t.home.solutions.retail.feature1,
        t.home.solutions.retail.feature2,
        t.home.solutions.retail.feature3,
        t.home.solutions.retail.feature4,
      ],
      href: "/solutions/smart-retail",
      color: "green",
    },
    {
      title: t.home.solutions.community.title,
      icon: "🏘️",
      description: t.home.solutions.community.description,
      features: [
        t.home.solutions.community.feature1,
        t.home.solutions.community.feature2,
        t.home.solutions.community.feature3,
        t.home.solutions.community.feature4,
      ],
      href: "/solutions/community",
      color: "purple",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.home.solutions.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t.home.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              <div className="relative h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-all">
                <div className="mb-6">
                  <span className="text-4xl">{solution.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>

                <div className="mb-6 space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={solution.href}
                  className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-700"
                >
                  {t.home.solutions.learnMore}
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}