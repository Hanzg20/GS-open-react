export const metadata = {
  title: "Industries - GoldSky Technologies",
  description: "GoldSky serves Manufacturing, Retail, and Community Services industries with tailored technology solutions built on our unified platform.",
};

import HeaderGoldSky from "@/components/ui/header-goldsky";
import FooterGoldSky from "@/components/ui/footer-goldsky";
import Link from "next/link";

const industries = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "Digital Transformation for Industry 4.0",
    description: "Empowering manufacturers with smart factory solutions, real-time visibility, and data-driven decision making to achieve operational excellence.",
    icon: "🏭",
    color: "blue",
    challenges: [
      "Lack of real-time production visibility",
      "Equipment downtime and maintenance costs",
      "Quality control and compliance tracking",
      "Manual processes and data silos",
      "Supply chain coordination",
    ],
    solutions: [
      "SmartFactory MES for production management",
      "Device Monitoring System for predictive maintenance",
      "Real-time quality control and traceability",
      "Integrated workflow automation",
      "End-to-end supply chain visibility",
    ],
    metrics: [
      { label: "Downtime Reduction", value: "30%" },
      { label: "OEE Improvement", value: "25%" },
      { label: "Quality Defects", value: "-40%" },
    ],
    segments: [
      "Discrete Manufacturing",
      "Process Manufacturing",
      "Electronics Assembly",
      "Automotive & Aerospace",
      "Food & Beverage",
    ],
    href: "/industries/manufacturing",
  },
  {
    id: "retail",
    name: "Retail & Commerce",
    tagline: "Smart Solutions for Modern Commerce",
    description: "Transform retail operations with intelligent inventory management, customer insights, and seamless omnichannel experiences.",
    icon: "🏪",
    color: "green",
    challenges: [
      "Inventory optimization and stockouts",
      "Fragmented customer data across channels",
      "Manual operations and inefficiencies",
      "Limited real-time business insights",
      "Competition from e-commerce giants",
    ],
    solutions: [
      "Unified inventory management system",
      "Customer analytics and personalization",
      "Omnichannel commerce platform",
      "Automated replenishment and pricing",
      "Real-time business intelligence",
    ],
    metrics: [
      { label: "Inventory Costs", value: "-20%" },
      { label: "Customer Retention", value: "+35%" },
      { label: "Sales Conversion", value: "+28%" },
    ],
    segments: [
      "Specialty Retail",
      "Department Stores",
      "Grocery & Convenience",
      "Fashion & Apparel",
      "Consumer Electronics",
    ],
    href: "/industries/retail",
  },
  {
    id: "community",
    name: "Community Services",
    tagline: "Building Connected Communities",
    description: "Enable thriving communities with integrated service platforms, local commerce enablement, and resident engagement tools.",
    icon: "🏘️",
    color: "purple",
    challenges: [
      "Fragmented service delivery systems",
      "Low resident engagement and satisfaction",
      "Inefficient resource allocation",
      "Lack of local business support",
      "Communication gaps between stakeholders",
    ],
    solutions: [
      "JinBean App for community services",
      "Integrated service request management",
      "Local commerce marketplace",
      "Community engagement platform",
      "Real-time communication tools",
    ],
    metrics: [
      { label: "Service Utilization", value: "+50%" },
      { label: "Resident Satisfaction", value: "+45%" },
      { label: "Response Time", value: "-60%" },
    ],
    segments: [
      "Residential Communities",
      "Property Management",
      "Municipal Services",
      "Co-working Spaces",
      "Educational Campuses",
    ],
    href: "/industries/community-services",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <HeaderGoldSky />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Industries We Serve
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Deep industry expertise combined with our unified technology platform
                delivers transformative results across manufacturing, retail, and community services.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Overview Cards */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{industry.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">{industry.tagline}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {industry.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-yellow-600">{metric.value}</div>
                          <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-700"
                    >
                      Learn More
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

        {/* Detailed Industry Sections */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  className={`flex flex-col lg:flex-row gap-12 items-start ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl">{industry.icon}</span>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{industry.name}</h2>
                        <p className="text-lg text-gray-500">{industry.tagline}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Challenges & Solutions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      {/* Challenges */}
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          Industry Challenges
                        </h3>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <div className="h-1.5 w-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              <span className="text-gray-700">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Our Solutions
                        </h3>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Segments Served */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">Segments We Serve</h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.segments.map((segment, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800"
                          >
                            {segment}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <Link
                        href={industry.href}
                        className="inline-flex items-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-base font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all"
                      >
                        Explore {industry.name} Solutions
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link
                        href={`/contact?industry=${industry.id}`}
                        className="inline-flex items-center rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
                      >
                        Talk to Expert
                      </Link>
                    </div>
                  </div>

                  {/* Metrics Visualization */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h3 className="font-semibold text-gray-900 mb-6 text-center">
                        Impact Metrics
                      </h3>
                      <div className="space-y-6">
                        {industry.metrics.map((metric, idx) => (
                          <div key={idx}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                              <span className="text-2xl font-bold text-yellow-600">{metric.value}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                                style={{ width: metric.value.replace('-', '').replace('+', '') }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Additional Info */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Proven Track Record</div>
                              <div className="text-xs text-gray-600 mt-1">10+ years serving {industry.name.toLowerCase()} clients</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Industry Expertise</div>
                              <div className="text-xs text-gray-600 mt-1">Deep domain knowledge and best practices</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Industry Benefits */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Cross-Industry Platform Benefits
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Leverage capabilities developed across industries for maximum value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-semibold text-gray-900 mb-2">Shared Innovation</h3>
                <p className="text-sm text-gray-600">
                  Best practices and features from one industry benefit all others
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
                <p className="text-sm text-gray-600">
                  Shared platform reduces development and maintenance costs
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Faster Deployment</h3>
                <p className="text-sm text-gray-600">
                  Proven components accelerate time-to-value
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Customization</h3>
                <p className="text-sm text-gray-600">
                  Industry-specific features on a solid foundation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Transform Your Industry?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Connect with our industry experts to discuss how GoldSky can address
              your specific challenges and opportunities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-3 text-base font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all"
              >
                Talk to Industry Expert
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterGoldSky />
    </>
  );
}
