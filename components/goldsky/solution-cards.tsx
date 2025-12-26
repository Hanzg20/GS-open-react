import Link from "next/link";

const solutions = [
  {
    title: "Smart Factory",
    icon: "🏭",
    description: "Transform manufacturing with real-time monitoring, predictive maintenance, and intelligent production planning.",
    features: ["MES Integration", "IoT Monitoring", "Quality Control", "Production Analytics"],
    href: "/solutions/smart-factory",
    color: "blue",
  },
  {
    title: "Smart Retail",
    icon: "🏪",
    description: "Revolutionize retail operations with intelligent inventory, customer insights, and omnichannel experiences.",
    features: ["Inventory Management", "Customer Analytics", "POS Integration", "Marketing Automation"],
    href: "/solutions/smart-retail",
    color: "green",
  },
  {
    title: "Community Services",
    icon: "🏘️",
    description: "Build connected communities with integrated service platforms, local commerce, and resident engagement.",
    features: ["Service Platform", "Local Commerce", "Community Engagement", "Resource Management"],
    href: "/solutions/community",
    color: "purple",
  },
];

export default function SolutionCards() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Industry Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tailored solutions built on our unified platform
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
                  Learn more
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