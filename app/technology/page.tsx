export const metadata = {
  title: "Technology - GoldSky Technologies",
  description: "Explore GoldSky's modern technology stack, cloud-native architecture, and engineering excellence powering enterprise solutions.",
};

import HeaderGoldSky from "@/components/ui/header-goldsky";
import FooterGoldSky from "@/components/ui/footer-goldsky";
import Link from "next/link";

const techStack = {
  backend: [
    { name: "Spring Boot", description: "Enterprise Java framework", icon: "🍃" },
    { name: "Node.js", description: "High-performance runtime", icon: "🟢" },
    { name: "Python", description: "AI/ML and data processing", icon: "🐍" },
    { name: "Go", description: "Microservices and APIs", icon: "🔷" },
  ],
  frontend: [
    { name: "React", description: "Modern UI library", icon: "⚛️" },
    { name: "Next.js", description: "Full-stack framework", icon: "▲" },
    { name: "TypeScript", description: "Type-safe development", icon: "📘" },
    { name: "Tailwind CSS", description: "Utility-first styling", icon: "🎨" },
  ],
  data: [
    { name: "PostgreSQL", description: "Relational database", icon: "🐘" },
    { name: "MongoDB", description: "Document database", icon: "🍃" },
    { name: "Redis", description: "Caching and queuing", icon: "🔴" },
    { name: "Elasticsearch", description: "Search and analytics", icon: "🔍" },
  ],
  cloud: [
    { name: "Kubernetes", description: "Container orchestration", icon: "☸️" },
    { name: "Docker", description: "Containerization", icon: "🐳" },
    { name: "AWS / Alibaba Cloud", description: "Cloud infrastructure", icon: "☁️" },
    { name: "CI/CD", description: "Automated deployment", icon: "🚀" },
  ],
};

const architecturePrinciples = [
  {
    title: "Microservices Architecture",
    description: "Independently deployable services with clear boundaries, enabling scalability and team autonomy.",
    benefits: [
      "Independent scaling of components",
      "Technology flexibility per service",
      "Faster development cycles",
      "Improved fault isolation",
    ],
    icon: "🧩",
  },
  {
    title: "Event-Driven Design",
    description: "Asynchronous communication between services using message queues and event streams for loose coupling.",
    benefits: [
      "Real-time data processing",
      "Decoupled service interactions",
      "Better system resilience",
      "Audit trail and replay capability",
    ],
    icon: "⚡",
  },
  {
    title: "API-First Development",
    description: "Well-defined REST and GraphQL APIs with comprehensive documentation and versioning support.",
    benefits: [
      "Easy third-party integrations",
      "Contract-driven development",
      "Consistent developer experience",
      "API gateway for security and rate limiting",
    ],
    icon: "🔌",
  },
  {
    title: "Multi-Tenant Architecture",
    description: "Secure data isolation with shared infrastructure, optimizing resources while ensuring privacy.",
    benefits: [
      "Cost-effective resource utilization",
      "Centralized updates and maintenance",
      "Tenant-specific customization",
      "Enterprise-grade data isolation",
    ],
    icon: "🏢",
  },
];

const securityFeatures = [
  {
    title: "Identity & Access Management",
    features: [
      "OAuth 2.0 / OIDC authentication",
      "Role-based access control (RBAC)",
      "Multi-factor authentication (MFA)",
      "Single sign-on (SSO) support",
    ],
    icon: "🔐",
  },
  {
    title: "Data Security",
    features: [
      "Encryption at rest and in transit",
      "Database field-level encryption",
      "Secure key management",
      "Regular security audits",
    ],
    icon: "🛡️",
  },
  {
    title: "Compliance & Governance",
    features: [
      "Audit logging and tracking",
      "GDPR and data privacy compliance",
      "Compliance reporting",
      "Data retention policies",
    ],
    icon: "📋",
  },
  {
    title: "Network Security",
    features: [
      "WAF and DDoS protection",
      "VPC and network isolation",
      "API rate limiting",
      "Intrusion detection",
    ],
    icon: "🌐",
  },
];

const devOps = [
  {
    title: "Continuous Integration",
    description: "Automated build, test, and code quality checks on every commit",
    tools: ["GitHub Actions", "SonarQube", "Unit Testing"],
  },
  {
    title: "Continuous Deployment",
    description: "Automated deployment pipelines with blue-green and canary strategies",
    tools: ["Kubernetes", "Helm Charts", "ArgoCD"],
  },
  {
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring, logging, and distributed tracing",
    tools: ["Prometheus", "Grafana", "ELK Stack"],
  },
  {
    title: "Infrastructure as Code",
    description: "Declarative infrastructure management and version control",
    tools: ["Terraform", "Ansible", "CloudFormation"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <HeaderGoldSky />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Technology & Architecture
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Built with modern, cloud-native technologies and engineering best practices
                for scalability, security, and performance.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Technology Stack</h2>
              <p className="mt-4 text-lg text-gray-600">
                Modern, proven technologies powering our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Backend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚙️</span>
                  Backend
                </h3>
                <div className="space-y-3">
                  {techStack.backend.map((tech, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-1">
                        <span className="text-xl mr-2">{tech.icon}</span>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </div>
                      <p className="text-xs text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎨</span>
                  Frontend
                </h3>
                <div className="space-y-3">
                  {techStack.frontend.map((tech, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-1">
                        <span className="text-xl mr-2">{tech.icon}</span>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </div>
                      <p className="text-xs text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">💾</span>
                  Data & Storage
                </h3>
                <div className="space-y-3">
                  {techStack.data.map((tech, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-1">
                        <span className="text-xl mr-2">{tech.icon}</span>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </div>
                      <p className="text-xs text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">☁️</span>
                  Cloud & DevOps
                </h3>
                <div className="space-y-3">
                  {techStack.cloud.map((tech, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-1">
                        <span className="text-xl mr-2">{tech.icon}</span>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </div>
                      <p className="text-xs text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Principles */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Architecture Principles</h2>
              <p className="mt-4 text-lg text-gray-600">
                Design patterns that ensure scalability and maintainability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {architecturePrinciples.map((principle, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-4xl mr-4">{principle.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {principle.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Security & Compliance</h2>
              <p className="mt-4 text-lg text-gray-600">
                Enterprise-grade security built into every layer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="mt-3 font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs">
                        <div className="h-1 w-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Security Certifications */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Security Standards & Compliance
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔒</div>
                    <div className="text-sm font-medium text-gray-900">ISO 27001</div>
                    <div className="text-xs text-gray-600">Information Security</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🛡️</div>
                    <div className="text-sm font-medium text-gray-900">SOC 2</div>
                    <div className="text-xs text-gray-600">Security Controls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🇪🇺</div>
                    <div className="text-sm font-medium text-gray-900">GDPR</div>
                    <div className="text-xs text-gray-600">Data Privacy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔐</div>
                    <div className="text-sm font-medium text-gray-900">OWASP</div>
                    <div className="text-xs text-gray-600">Security Best Practices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps & Operations */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">DevOps Excellence</h2>
              <p className="mt-4 text-lg text-gray-600">
                Automated processes for reliable and rapid delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {devOps.map((practice, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{practice.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{practice.description}</p>
                  <div className="space-y-2">
                    {practice.tools.map((tool, i) => (
                      <div key={i} className="text-xs bg-gray-50 rounded px-2 py-1 inline-block mr-1">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Deployment Metrics */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600">99.9%</div>
                <div className="text-sm text-gray-600 mt-2">Platform Uptime</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600">&lt;1hr</div>
                <div className="text-sm text-gray-600 mt-2">Deployment Time</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600">24/7</div>
                <div className="text-sm text-gray-600 mt-2">Monitoring</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600">Auto</div>
                <div className="text-sm text-gray-600 mt-2">Scaling</div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation & Future */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Innovation Pipeline</h2>
              <p className="mt-4 text-lg text-gray-600">
                Continuously evolving with emerging technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-600">
                  Predictive analytics, anomaly detection, and intelligent automation
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Edge Computing</h3>
                <p className="text-sm text-gray-600">
                  Low-latency processing for IoT and real-time applications
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔗</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blockchain Integration</h3>
                <p className="text-sm text-gray-600">
                  Supply chain traceability and secure transaction records
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Want to Learn More About Our Technology?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a technical deep-dive session with our engineering team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=technical"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-3 text-base font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all"
              >
                Schedule Technical Session
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
