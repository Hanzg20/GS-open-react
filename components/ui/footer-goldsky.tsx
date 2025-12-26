import Link from "next/link";
import Image from "next/image";

const footerNavigation = {
  platform: [
    { name: "BaseNestus", href: "/platform#basenestus" },
    { name: "MsgNestus", href: "/platform#msgnestus" },
    { name: "DataNestus", href: "/platform#datanestus" },
    { name: "Architecture", href: "/platform#architecture" },
  ],
  solutions: [
    { name: "Smart Factory", href: "/solutions/smart-factory" },
    { name: "Smart Retail", href: "/solutions/smart-retail" },
    { name: "Community Services", href: "/solutions/community" },
  ],
  products: [
    { name: "SmartFactory MES", href: "/products/smartfactory-mes" },
    { name: "Device Monitoring", href: "/products/device-monitoring" },
    { name: "Jinkoo", href: "/products/jinkoo" },
    { name: "JinBean", href: "/products/jinbean" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
};

export default function FooterGoldSky() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/goldsky-logo.png"
                alt="GoldSky Technologies"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                GoldSky Technologies
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Building the unified technology platform for Smart Factory, Smart Retail, and Community Services.
              Engineering-driven solutions for the future of industry.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/108494899" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/goldsky-technologies" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Platform</h3>
              <ul className="space-y-2">
                {footerNavigation.platform.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Solutions</h3>
              <ul className="space-y-2">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Products</h3>
              <ul className="space-y-2">
                {footerNavigation.products.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} GoldSky Technologies Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-yellow-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-yellow-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}