'use client';

import { useLanguage } from "@/i18n/LanguageContext";

export default function PlatformOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.home.platform.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t.home.platform.subtitle}
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative bg-gradient-to-br from-gray-50 to-yellow-50 rounded-2xl p-8 border border-gray-200">
          {/* Application Layer */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-green-100 rounded-lg p-4 text-center border border-green-200">
              <div className="text-sm font-semibold text-green-800 mb-2">{t.home.platform.applications}</div>
              <div className="text-xs text-green-700">SmartFactory MES</div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 text-center border border-green-200">
              <div className="text-sm font-semibold text-green-800 mb-2">{t.home.platform.applications}</div>
              <div className="text-xs text-green-700">Device Monitor</div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 text-center border border-green-200">
              <div className="text-sm font-semibold text-green-800 mb-2">{t.home.platform.applications}</div>
              <div className="text-xs text-green-700">Jinkoo</div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 text-center border border-green-200">
              <div className="text-sm font-semibold text-green-800 mb-2">{t.home.platform.applications}</div>
              <div className="text-xs text-green-700">JinBean</div>
            </div>
          </div>

          {/* Solution Layer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-yellow-100 rounded-lg p-4 text-center border border-yellow-200">
              <div className="text-sm font-semibold text-yellow-800 mb-2">{t.home.platform.smartFactory}</div>
              <div className="text-xs text-yellow-700">{t.home.platform.manufacturingSolutions}</div>
            </div>
            <div className="bg-yellow-100 rounded-lg p-4 text-center border border-yellow-200">
              <div className="text-sm font-semibold text-yellow-800 mb-2">{t.home.platform.smartRetail}</div>
              <div className="text-xs text-yellow-700">{t.home.platform.commerceSolutions}</div>
            </div>
            <div className="bg-yellow-100 rounded-lg p-4 text-center border border-yellow-200">
              <div className="text-sm font-semibold text-yellow-800 mb-2">{t.home.platform.smartCommunity}</div>
              <div className="text-xs text-yellow-700">{t.home.platform.serviceSolutions}</div>
            </div>
          </div>

          {/* Platform Core */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg p-6 text-white">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">GoldSky Platform Core</h3>
              <p className="text-sm opacity-90 mt-1">Unified Technology Foundation</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="bg-white/20 backdrop-blur rounded p-3 text-center">
                <div className="text-xs font-semibold">BaseNestus</div>
                <div className="text-xs opacity-90 mt-1">Core Platform</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded p-3 text-center">
                <div className="text-xs font-semibold">MsgNestus</div>
                <div className="text-xs opacity-90 mt-1">Messaging</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded p-3 text-center">
                <div className="text-xs font-semibold">DataNestus</div>
                <div className="text-xs opacity-90 mt-1">Data Platform</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded p-3 text-center">
                <div className="text-xs font-semibold">FlowNestus</div>
                <div className="text-xs opacity-90 mt-1">Workflow</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded p-3 text-center">
                <div className="text-xs font-semibold">AI-Nestus</div>
                <div className="text-xs opacity-90 mt-1">AI Services</div>
              </div>
            </div>
          </div>

          {/* Infrastructure Layer */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
              <div className="text-xs font-semibold text-gray-700">Cloud Infrastructure</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
              <div className="text-xs font-semibold text-gray-700">Edge Computing</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
              <div className="text-xs font-semibold text-gray-700">IoT & Sensors</div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-yellow-600 mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Multi-Tenant Architecture</h3>
            <p className="mt-2 text-sm text-gray-600">
              Secure isolation with shared infrastructure for optimal resource utilization
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-yellow-600 mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Modular Components</h3>
            <p className="mt-2 text-sm text-gray-600">
              Mix and match modules to create custom solutions for any industry
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-yellow-600 mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Real-time Processing</h3>
            <p className="mt-2 text-sm text-gray-600">
              Event-driven architecture for instant data processing and communication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}