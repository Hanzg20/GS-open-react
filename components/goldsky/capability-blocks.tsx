const capabilities = [
  {
    title: "Platform Foundation",
    subtitle: "Nestus Core",
    description: "Enterprise-grade infrastructure with multi-tenant architecture, secure data isolation, and scalable microservices.",
    features: ["Multi-tenant", "Microservices", "API Gateway", "Security Layer"],
    color: "blue",
  },
  {
    title: "Industry Solutions",
    subtitle: "Vertical Integration",
    description: "Pre-built modules for Manufacturing, Retail, and Community Services with industry-specific workflows and compliance.",
    features: ["Smart Factory", "Smart Retail", "Smart Community", "Custom Solutions"],
    color: "indigo",
  },
  {
    title: "Applications & Products",
    subtitle: "Ready to Deploy",
    description: "Production-ready applications including MES, Device Monitoring, Jinkoo messaging, and JinBean community platform.",
    features: ["SmartFactory MES", "Device Monitor", "Jinkoo", "JinBean"],
    color: "purple",
  },
];

export default function CapabilityBlocks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Three Pillars of Innovation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive ecosystem that transforms industries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-2 bg-gradient-to-r from-${capability.color}-500 to-${capability.color}-600`} />
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>
                  <p className="text-sm font-medium text-gray-500">{capability.subtitle}</p>
                </div>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}