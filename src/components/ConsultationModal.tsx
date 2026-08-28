"use client";

import { useState } from "react";
import { X, Send, Calendar, CheckCircle } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI Consulting",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <CheckCircle className="h-16 w-16 text-cyanBrand mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-2">Consultation Booked!</h3>
            <p className="text-slate-300">
              Thank you for reaching out. An AI Specialist from HaniQ Labs will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-cyanBrand to-purpleBrand text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Book an AI Consultation</h3>
                <p className="text-sm text-slate-400">Speak directly with HaniQ Labs AI Engineers</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyanBrand"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyanBrand"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyanBrand"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Interested Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-white focus:outline-none focus:border-cyanBrand"
                >
                  <option value="AI Consulting">AI Consulting</option>
                  <option value="AI Software Development">AI Software Development</option>
                  <option value="Corporate AI Training">Corporate AI Training</option>
                  <option value="Data Engineering">Data Engineering</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Project Details / Goals</label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly about your AI goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyanBrand"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyanBrand to-purpleBrand text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" /> Schedule Consultation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
