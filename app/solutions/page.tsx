export const metadata = {
  title: "Solutions - GoldSky Technologies",
  description: "Industry-specific solutions for Smart Factory, Smart Retail, and Community Services built on GoldSky's unified platform.",
};

import HeaderGoldSky from "@/components/ui/header-goldsky";
import FooterGoldSky from "@/components/ui/footer-goldsky";
import Link from "next/link";

const solutions = [
  {
    id: "smart-factory",
    title: "Smart Factory",
    subtitle: "Manufacturing Excellence",
    description: "Transform your manufacturing operations with real-time monitoring, predictive maintenance, and intelligent production optimization.",
    icon: "🏭",
    color: "blue",
    painPoints: [
      "Lack of real-time visibility into production",
      "Unplanned equipment downtime",
      "Quality control challenges",
      "Inefficient resource utilization",
    ],
    benefits: [
      "30% reduction in downtime",
      "25% improvement in OEE",
      "Real-time production tracking",
      "Predictive maintenance alerts",
    ],
    modules: [
      "SmartFactory MES",
      "Device Monitoring System",
      "Quality Management",
      "Production Analytics",
    ],
    href: "/solutions/smart-factory",
  },
  {
    id: "smart-retail",
    title: "Smart Retail",
    subtitle: "Commerce Innovation",
    description: "Revolutionize retail operations with intelligent inventory management, customer insights, and seamless omnichannel experiences.",
    icon: "🏪",
    color: "green",
    painPoints: [
      "Inventory management complexity",
      "Lack of customer insights",
      "Disconnected sales channels",
      "Manual operational processes",
    ],
    benefits: [
      "20% reduction in inventory costs",
      "35% increase in customer retention",
      "Unified omnichannel experience",
      "Automated replenishment",
    ],
    modules: [
      "Inventory Management",
      "Customer Analytics",
      "POS Integration",
      "Marketing Automation",
    ],
    href: "/solutions/smart-retail",
  },
  {
    id: "community-services",
    title: "Community Services",
    subtitle: "Connected Communities",
    description: "Build thriving communities with integrated service platforms, local commerce enablement, and resident engagement tools.",
    icon: "🏘️",
    color: "purple",
    painPoints: [
      "Fragmented community services",
      "Limited resident engagement",
      "Inefficient resource allocation",
      "Lack of local commerce support",
    ],
    benefits: [
      "50% increase in service utilization",
      "Enhanced community engagement",
      "Streamlined service delivery",
      "Support for local businesses",
    ],
    modules: [
      "JinBean Platform",
      "Service Management",
      "Community Portal",
      "Local Commerce Hub",
    ],
    href: "/solutions/community-services",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <HeaderGoldSky />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Industry Solutions
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored solutions that address specific industry challenges while leveraging
                our unified platform capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className="text-5xl mr-4">{solution.icon}</span>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
                        <p className="text-lg text-gray-500">{solution.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{solution.description}</p>

                    {/* Pain Points & Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Pain Points Addressed</h3>
                        <ul className="space-y-2">
                          {solution.painPoints.map((point, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Modules */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Solution Components</h3>
                      <div className="flex flex-wrap gap-2">
                        {solution.modules.map((module, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={solution.href}
                      className="inline-flex items-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-base font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all"
                    >
                      Explore {solution.title}
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-9xl opacity-20">{solution.icon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Not Sure Which Solution Fits Your Needs?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our experts can help you identify the right combination of platform capabilities
              and industry solutions for your specific requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-3 text-base font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all"
              >
                Talk to an Expert
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterGoldSky />
    </>
  );
}