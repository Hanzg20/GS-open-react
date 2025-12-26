export const metadata = {
  title: "Products - GoldSky Technologies",
  description: "Discover GoldSky's product portfolio including SmartFactory MES, Device Monitoring System, Jinkoo Industrial IM, and JinBean Community Platform.",
};

import HeaderGoldSky from "@/components/ui/header-goldsky";
import FooterGoldSky from "@/components/ui/footer-goldsky";
import Link from "next/link";

const products = [
  {
    id: "smartfactory-mes",
    name: "SmartFactory MES",
    tagline: "Manufacturing Execution System",
    description: "Enterprise-grade MES solution for real-time production management, quality control, and operational excellence in manufacturing environments.",
    icon: "🏭",
    color: "blue",
    category: "Smart Factory",
    status: "Production",
    keyFeatures: [
      "Real-time production tracking and monitoring",
      "Quality management and SPC analysis",
      "Material management and traceability",
      "Equipment integration and OEE tracking",
      "Work order management and scheduling",
      "Electronic batch records and compliance",
    ],
    targetCustomers: [
      "Discrete Manufacturing",
      "Process Manufacturing",
      "Electronics Assembly",
      "Automotive Suppliers",
    ],
    platformModules: ["BaseNestus", "MsgNestus", "DataNestus"],
    href: "/products/smartfactory-mes",
  },
  {
    id: "device-monitoring",
    name: "Device Monitoring System",
    tagline: "Industrial IoT Platform",
    description: "Comprehensive IoT platform for real-time device monitoring, predictive maintenance, and intelligent asset management across distributed operations.",
    icon: "📡",
    color: "green",
    category: "Smart Factory",
    status: "Production",
    keyFeatures: [
      "Real-time device data collection and visualization",
      "Predictive maintenance with AI/ML algorithms",
      "Remote monitoring and control",
      "Alert and notification management",
      "Historical data analysis and reporting",
      "Multi-protocol device connectivity",
    ],
    targetCustomers: [
      "Equipment Manufacturers",
      "Facility Management",
      "Industrial Operations",
      "Service Providers",
    ],
    platformModules: ["BaseNestus", "MsgNestus", "DataNestus", "AI-Nestus"],
    href: "/products/device-monitoring",
  },
  {
    id: "jinkoo",
    name: "Jinkoo",
    tagline: "Industrial Instant Messaging",
    description: "Secure, enterprise-grade instant messaging platform designed for industrial environments with real-time collaboration and workflow integration.",
    icon: "💬",
    color: "purple",
    category: "Communication",
    status: "Production",
    keyFeatures: [
      "Real-time messaging and group chat",
      "File sharing and document collaboration",
      "Workflow integration and approvals",
      "Role-based access control",
      "Message encryption and compliance",
      "Mobile and desktop applications",
    ],
    targetCustomers: [
      "Manufacturing Teams",
      "Field Service Workers",
      "Distributed Operations",
      "Supply Chain Partners",
    ],
    platformModules: ["BaseNestus", "MsgNestus"],
    href: "/products/jinkoo",
  },
  {
    id: "jinbean",
    name: "JinBean App",
    tagline: "Community Services Platform",
    description: "Integrated community services platform connecting residents, local businesses, and service providers for enhanced community living experiences.",
    icon: "🏘️",
    color: "orange",
    category: "Community Services",
    status: "Production",
    keyFeatures: [
      "Local service marketplace and booking",
      "Community announcements and engagement",
      "Neighborhood commerce integration",
      "Event management and participation",
      "Resident feedback and surveys",
      "Multi-language support",
    ],
    targetCustomers: [
      "Residential Communities",
      "Property Management",
      "Local Service Providers",
      "Municipal Services",
    ],
    platformModules: ["BaseNestus", "MsgNestus", "FlowNestus"],
    href: "/products/jinbean",
  },
];

const productCategories = [
  { name: "All Products", value: "all" },
  { name: "Smart Factory", value: "Smart Factory" },
  { name: "Communication", value: "Communication" },
  { name: "Community Services", value: "Community Services" },
];

export default function ProductsPage() {
  return (
    <>
      <HeaderGoldSky />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Products & Applications
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-proven applications built on the GoldSky unified platform,
                delivering immediate value while leveraging enterprise-grade infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Integration Banner */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Built on</div>
                <div className="text-lg font-bold text-gray-900">GoldSky Platform</div>
              </div>
              <div className="text-gray-300">•</div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Deployment</div>
                <div className="text-lg font-bold text-gray-900">Multi-Tenant Ready</div>
              </div>
              <div className="text-gray-300">•</div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Integration</div>
                <div className="text-lg font-bold text-gray-900">API-First</div>
              </div>
              <div className="text-gray-300">•</div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500">Support</div>
                <div className="text-lg font-bold text-gray-900">Enterprise SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex flex-col lg:flex-row gap-8 items-start ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Product Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <span className="text-5xl">{product.icon}</span>
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                {product.status}
                              </span>
                            </div>
                            <p className="text-lg text-gray-500">{product.tagline}</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <svg className="h-5 w-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {product.keyFeatures.map((feature, i) => (
                            <div key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Target Customers & Platform Modules */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Target Industries</h3>
                          <div className="flex flex-wrap gap-2">
                            {product.targetCustomers.map((customer, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                              >
                                {customer}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Platform Modules</h3>
                          <div className="flex flex-wrap gap-2">
                            {product.platformModules.map((module, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-700"
                              >
                                {module}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-3">
                        <Link
                          href={product.href}
                          className="inline-flex items-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all"
                        >
                          Learn More
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                        <Link
                          href={`/contact?product=${product.id}`}
                          className="inline-flex items-center rounded-lg border-2 border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
                        >
                          Request Demo
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Product Visual/Stats */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-full">
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-7xl mb-4 opacity-40">{product.icon}</div>
                          <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm">
                            {product.category}
                          </div>
                        </div>

                        <div className="space-y-4 pt-4">
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">Deployment Model</div>
                            <div className="font-semibold text-gray-900">SaaS / On-Premise</div>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">Pricing Model</div>
                            <div className="font-semibold text-gray-900">Per User / Per Tenant</div>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">Integration</div>
                            <div className="font-semibold text-gray-900">REST API / Webhooks</div>
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

        {/* Platform Advantage Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                The Platform Advantage
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                All products benefit from shared platform capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold text-gray-900 mb-2">Unified Authentication</h3>
                <p className="text-sm text-gray-600">Single sign-on across all products</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Shared Analytics</h3>
                <p className="text-sm text-gray-600">Unified data insights and reporting</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">🔌</div>
                <h3 className="font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                <p className="text-sm text-gray-600">Products work together out of the box</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-sm text-gray-600">Quick setup with platform foundation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Explore Our Products?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a personalized demo to see how GoldSky products can transform your operations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-3 text-base font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all"
              >
                Schedule Demo
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
