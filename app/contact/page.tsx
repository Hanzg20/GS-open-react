"use client";

import { useState } from "react";
import HeaderGoldSky from "@/components/ui/header-goldsky";
import FooterGoldSky from "@/components/ui/footer-goldsky";

const contactReasons = [
  { value: "demo", label: "Request a Demo" },
  { value: "sales", label: "Sales Inquiry" },
  { value: "technical", label: "Technical Questions" },
  { value: "support", label: "Customer Support" },
  { value: "partnership", label: "Partnership Opportunities" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

const offices = [
  {
    city: "Ottawa",
    country: "Canada",
    address: "Innovation Centre, Kanata North",
    phone: "+1 613 555 1234",
    email: "ottawa@goldsky.tech",
    icon: "🇨🇦",
  },
  {
    city: "Beijing",
    country: "China",
    address: "Technology Hub, Haidian District",
    phone: "+86 10 1234 5678",
    email: "beijing@goldsky.tech",
    icon: "🇨🇳",
  },
  {
    city: "Harbin",
    country: "China",
    address: "Tech Park, Nangang District",
    phone: "+86 451 1234 5678",
    email: "harbin@goldsky.tech",
    icon: "🇨🇳",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    reason: "demo",
    industry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        reason: "demo",
        industry: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      <HeaderGoldSky />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our platform, products, or services? Our team is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-5xl mb-4">✅</div>
                      <h3 className="text-xl font-semibold text-green-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      {/* Company & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Reason & Industry */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                            Reason for Contact *
                          </label>
                          <select
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                          >
                            {contactReasons.map((reason) => (
                              <option key={reason.value} value={reason.value}>
                                {reason.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                            Industry
                          </label>
                          <input
                            type="text"
                            id="industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                            placeholder="Manufacturing, Retail, etc."
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition resize-none"
                          placeholder="Tell us more about your needs..."
                        />
                      </div>

                      {/* Submit Button */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg px-6 py-3 font-medium hover:from-yellow-600 hover:to-orange-600 focus:ring-4 focus:ring-yellow-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>

                      <p className="text-xs text-gray-500">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-yellow-600 to-orange-700 rounded-2xl shadow-lg p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:contact@goldsky.tech" className="text-yellow-100 hover:text-white">
                          contact@goldsky.tech
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:+862112345678" className="text-yellow-100 hover:text-white">
                          +86 21 1234 5678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-yellow-100">Mon - Fri: 9:00 - 18:00 CST</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Response Time</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Sales Inquiries: &lt; 4 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Technical Questions: &lt; 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-orange-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Support Requests: &lt; 2 hours</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <span className="text-xl">💼</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <span className="text-xl">🐦</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <span className="text-xl">📘</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <span className="text-xl">📸</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Offices</h2>
              <p className="mt-4 text-lg text-gray-600">
                Visit us at one of our global locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-5xl mb-4 text-center">{office.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {office.city}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mb-4">{office.country}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <svg className="h-4 w-4 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-yellow-600 hover:text-yellow-700">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${office.email}`} className="text-yellow-600 hover:text-yellow-700">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Have Questions?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Check out our frequently asked questions or contact us directly
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-4">
                <details className="bg-white rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    How quickly can we get started with GoldSky?
                  </summary>
                  <p className="mt-3 text-sm text-gray-600">
                    Most customers can be onboarded within 2-4 weeks, including initial setup,
                    configuration, and team training. Enterprise deployments may take longer
                    depending on integration requirements.
                  </p>
                </details>
                <details className="bg-white rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    What kind of support do you provide?
                  </summary>
                  <p className="mt-3 text-sm text-gray-600">
                    We offer 24/7 technical support, dedicated account managers, regular training
                    sessions, and comprehensive documentation. Enterprise customers also receive
                    priority support and custom SLAs.
                  </p>
                </details>
                <details className="bg-white rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    Can GoldSky integrate with our existing systems?
                  </summary>
                  <p className="mt-3 text-sm text-gray-600">
                    Yes, GoldSky offers comprehensive APIs and pre-built connectors for common
                    enterprise systems. Our professional services team can assist with custom
                    integrations as needed.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterGoldSky />
    </>
  );
}
