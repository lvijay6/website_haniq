"use client";

import { useState } from "react";
import {
  Sparkles,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  Globe,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "General Inquiry",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-cyanBrand text-xs font-semibold">
          <Sparkles className="w-4 h-4" /> Connect With Us
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanBrand via-blue-400 to-purpleBrand">HaniQ Labs</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Have questions about our AI SaaS products, corporate training, or custom engineering? Our AI team is standing by.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Reach out via your preferred communication channel or fill out the form. We respond to all inquiries within 24 business hours.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:contact@haniqlabs.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-midnight border border-slate-800 hover:border-cyanBrand/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-cyanBrand/10 text-cyanBrand group-hover:bg-cyanBrand group-hover:text-midnight transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Us</div>
                  <div className="text-sm font-semibold text-white">contact@haniqlabs.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/18005554264"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-midnight border border-slate-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-midnight transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">WhatsApp Direct</div>
                  <div className="text-sm font-semibold text-white">+1 (800) 555-HANI</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-midnight border border-slate-800">
                <div className="p-3 rounded-xl bg-purpleBrand/10 text-purpleBrand">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Global Hub & Labs</div>
                  <div className="text-sm font-semibold text-white">Innovation Way, Silicon Valley & Remote Labs</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-midnight border border-slate-800">
                <div className="p-3 rounded-xl bg-cyanBrand/10 text-cyanBrand">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Business Hours</div>
                  <div className="text-sm font-semibold text-white">Mon - Fri: 8:00 AM - 6:00 PM PST</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 relative">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-cyanBrand mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm">
                Thank you for contacting HaniQ Labs. An AI consultant will review your request and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alice Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanBrand"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alice@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanBrand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white text-sm focus:outline-none focus:border-cyanBrand"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="AI Software Products">AI SaaS Products (HaniScan, HaniAssist, etc.)</option>
                    <option value="AI Consulting & Strategy">AI Consulting & Strategy</option>
                    <option value="Training Academy Enrollment">Training Academy Enrollment</option>
                    <option value="Partnerships & Media">Partnerships & Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Inquiry regarding HaniScan AI"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanBrand"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can HaniQ Labs help your organization?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanBrand"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanBrand to-purpleBrand text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-cyanBrand/20"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Google Maps Visual Interactive Component */}
      <section className="rounded-3xl bg-slate-900 border border-slate-800 p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyanBrand" /> Google Maps & Headquarters
            </h3>
            <p className="text-xs text-slate-400">
              Interactive location overview of HaniQ Labs headquarters and global research hub.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyanBrand">
            <Globe className="w-4 h-4" /> 37.7749° N, 122.4194° W
          </div>
        </div>

        {/* Styled Simulated Google Map Frame */}
        <div className="relative w-full h-72 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
          {/* Map Grid Pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 text-center space-y-3 p-6 bg-slate-900/90 border border-slate-700/80 rounded-2xl max-w-sm shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-cyanBrand/20 border border-cyanBrand text-cyanBrand flex items-center justify-center mx-auto animate-pulse">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-white text-base">HaniQ Labs Headquarters</h4>
            <p className="text-xs text-slate-300">
              100 Innovation Parkway, Suite 400<br />Silicon Valley, CA 94025
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-cyanBrand/10 hover:bg-cyanBrand/20 text-cyanBrand text-xs font-semibold border border-cyanBrand/30 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
