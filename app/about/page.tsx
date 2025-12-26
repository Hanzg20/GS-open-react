export const metadata = {
  title: "About Us - GoldSky Technologies",
  description: "Learn about GoldSky Technologies - our mission, values, and team building the unified platform for smart industries.",
};

import HeaderGoldSky from "@/components/ui/header-goldsky";
import FooterGoldSky from "@/components/ui/footer-goldsky";
import Link from "next/link";

const values = [
  {
    title: "Engineering Excellence",
    description: "We believe in building robust, scalable, and maintainable software through best practices and continuous learning.",
    icon: "⚙️",
  },
  {
    title: "Platform Thinking",
    description: "We design for reusability and modularity, creating solutions that benefit multiple industries and use cases.",
    icon: "🏗️",
  },
  {
    title: "Customer Success",
    description: "Our success is measured by the tangible value and outcomes we deliver to our customers.",
    icon: "🎯",
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and approaches to solve complex industry challenges.",
    icon: "💡",
  },
  {
    title: "Transparency",
    description: "We build trust through honest communication and clear documentation of our technology and processes.",
    icon: "🔍",
  },
  {
    title: "Collaboration",
    description: "We work closely with customers and partners to understand needs and co-create solutions.",
    icon: "🤝",
  },
];

const milestones = [
  {
    year: "2013",
    title: "Company Founded",
    description: "GoldSky Technologies established with a vision to build unified technology platforms for smart industries.",
  },
  {
    year: "2015",
    title: "BaseNestus Launch",
    description: "Released our foundational platform with multi-tenant architecture and core services.",
  },
  {
    year: "2017",
    title: "Smart Factory Entry",
    description: "Launched SmartFactory MES, entering the manufacturing execution systems market.",
  },
  {
    year: "2019",
    title: "Platform Expansion",
    description: "Introduced MsgNestus for real-time communication and expanded to retail solutions.",
  },
  {
    year: "2021",
    title: "Community Services",
    description: "Launched JinBean App, expanding into community services and local commerce.",
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Integrated AI-Nestus for predictive analytics and intelligent automation across all products.",
  },
];

const team = [
  {
    name: "Engineering Team",
    description: "Full-stack engineers, architects, and DevOps specialists building scalable solutions",
    count: "50+",
    icon: "👨‍💻",
  },
  {
    name: "Product Team",
    description: "Product managers and designers creating user-centered experiences",
    count: "15+",
    icon: "🎨",
  },
  {
    name: "Industry Experts",
    description: "Domain specialists in manufacturing, retail, and community services",
    count: "20+",
    icon: "🏭",
  },
  {
    name: "Customer Success",
    description: "Dedicated support and success teams ensuring customer value",
    count: "25+",
    icon: "🎯",
  },
];

const stats = [
  { label: "Years of Engineering Excellence", value: "10+", icon: "📅" },
  { label: "Enterprise Customers", value: "100+", icon: "🏢" },
  { label: "Platform Uptime", value: "99.9%", icon: "⚡" },
  { label: "Team Members", value: "110+", icon: "👥" },
];

export default function AboutPage() {
  return (
    <>
      <HeaderGoldSky />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                About GoldSky Technologies
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Building the unified technology platform for smart industries since 2013.
                Engineering excellence meets industry expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses across manufacturing, retail, and community services
                  with a unified technology platform that drives operational excellence,
                  innovation, and sustainable growth. We believe in building once and
                  benefiting many through our platform-first approach.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading unified technology platform for smart industries,
                  recognized for engineering excellence, industry expertise, and customer
                  success. We envision a future where businesses leverage shared innovation
                  to accelerate digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              <p className="mt-4 text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Journey */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              <p className="mt-4 text-lg text-gray-600">
                A decade of innovation and growth
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200 hidden lg:block" />

              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-600">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 border-4 border-white shadow" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
              <p className="mt-4 text-lg text-gray-600">
                Talented professionals driving innovation and customer success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {team.map((group, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                  <div className="text-5xl mb-4">{group.icon}</div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{group.count}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{group.name}</h3>
                  <p className="text-sm text-gray-600">{group.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-yellow-600 to-orange-700 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="mb-6 text-yellow-100">
                We're always looking for talented engineers, product managers, and industry
                experts who share our passion for building great software.
              </p>
              <Link
                href="/contact?type=careers"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-medium text-yellow-600 hover:bg-gray-50 transition-all"
              >
                View Open Positions
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">By the Numbers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners & Ecosystem */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Partners & Ecosystem</h2>
              <p className="mt-4 text-lg text-gray-600">
                Collaborating with leading technology and industry partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">☁️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Cloud Partners</h3>
                <p className="text-sm text-gray-600 mb-4">
                  AWS, Alibaba Cloud for infrastructure and services
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="font-semibold text-gray-900 mb-2">Technology Partners</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Leading software and hardware vendors in IoT, AI, and analytics
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Partners</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Manufacturing, retail, and community service organizations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Want to Learn More About GoldSky?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with our team to discuss how we can help transform your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-3 text-base font-medium text-white hover:from-yellow-600 hover:to-orange-600 transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                Explore Our Platform
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterGoldSky />
    </>
  );
}
