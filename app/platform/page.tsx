export const metadata = {
  title: "Platform - GoldSky Technologies",
  description: "Discover GoldSky's unified technology platform with modular architecture, multi-tenant capabilities, and industry-specific solutions.",
};

import HeaderGoldSky from "@/components/ui/header-goldsky";
import FooterGoldSky from "@/components/ui/footer-goldsky";

const platformModules = [
  {
    id: "basenestus",
    name: "BaseNestus",
    subtitle: "Core Platform Foundation",
    description: "The foundational layer providing authentication, authorization, multi-tenancy, and core services across all applications.",
    features: [
      "Multi-tenant Architecture",
      "Identity & Access Management",
      "API Gateway & Service Mesh",
      "Configuration Management",
      "Audit & Compliance",
    ],
    icon: "🏗️",
    status: "Production",
  },
  {
    id: "msgnestus",
    name: "MsgNestus",
    subtitle: "Real-time Messaging & Communication",
    description: "High-performance messaging infrastructure for real-time communication, notifications, and event-driven architecture.",
    features: [
      "WebSocket Support",
      "Message Queuing",
      "Push Notifications",
      "Event Streaming",
      "Chat & Collaboration",
    ],
    icon: "💬",
    status: "Production",
  },
  {
    id: "datanestus",
    name: "DataNestus",
    subtitle: "Data Platform & Analytics",
    description: "Comprehensive data management, analytics, and business intelligence capabilities for data-driven decision making.",
    features: [
      "Data Warehouse",
      "Real-time Analytics",
      "ETL Pipeline",
      "Business Intelligence",
      "Machine Learning Ready",
    ],
    icon: "📊",
    status: "Planning",
  },
  {
    id: "flownestus",
    name: "FlowNestus",
    subtitle: "Workflow & Automation",
    description: "Visual workflow designer and automation engine for business process management and orchestration.",
    features: [
      "Visual Workflow Designer",
      "Process Automation",
      "Task Management",
      "Integration Connectors",
      "Rule Engine",
    ],
    icon: "⚡",
    status: "Planning",
  },
  {
    id: "ainestus",
    name: "AI-Nestus",
    subtitle: "Artificial Intelligence Services",
    description: "AI and machine learning capabilities integrated across the platform for intelligent automation and insights.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Anomaly Detection",
      "AI Model Management",
    ],
    icon: "🤖",
    status: "Planning",
  },
];

const designPrinciples = [
  {
    title: "Modular Architecture",
    description: "Each component is independently deployable and scalable, allowing flexible configuration for different industries.",
    icon: "🧩",
  },
  {
    title: "Multi-Tenant by Design",
    description: "Built from the ground up with secure data isolation and resource optimization for multiple clients.",
    icon: "🏢",
  },
  {
    title: "Industry Extensible",
    description: "Core platform capabilities can be extended with industry-specific modules without affecting the base system.",
    icon: "🔧",
  },
  {
    title: "Cloud Native",
    description: "Designed for modern cloud infrastructure with containerization, microservices, and auto-scaling.",
    icon: "☁️",
  },
  {
    title: "API First",
    description: "Every capability is exposed through well-documented APIs enabling seamless integration and customization.",
    icon: "🔌",
  },
  {
    title: "Security Built-In",
    description: "Enterprise-grade security with encryption, compliance, and audit capabilities at every layer.",
    icon: "🔒",
  },
];

export default function PlatformPage() {
  return (
    <>
      <HeaderGoldSky />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                The GoldSky Platform
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                A unified technology foundation that powers smart industries with modular,
                scalable, and secure infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Modules */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Platform Modules</h2>
              <p className="mt-4 text-lg text-gray-600">
                Core components that work together to deliver comprehensive solutions
              </p>
            </div>

            <div className="space-y-8">
              {platformModules.map((module) => (
                <div
                  key={module.id}
                  id={module.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-4xl mr-4">{module.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{module.name}</h3>
                          <p className="text-sm text-gray-500">{module.subtitle}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        module.status === 'Production'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {module.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{module.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {module.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <svg className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Design Principles */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Design Principles</h2>
              <p className="mt-4 text-lg text-gray-600">
                Built with best practices for enterprise-grade performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designPrinciples.map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterGoldSky />
    </>
  );
}