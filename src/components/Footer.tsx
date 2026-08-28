import Link from "next/link";
import { Cpu, Mail, Phone, MapPin, Globe, Share2, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyanBrand to-purpleBrand p-[2px]">
                <div className="w-full h-full bg-midnight rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyanBrand" />
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                HaniQ<span className="text-cyanBrand">Labs</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              HaniQ Labs is an AI-first technology company building intelligent software products, delivering expert consulting, and empowering professionals through world-class AI training.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyanBrand hover:border-cyanBrand/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://haniqlabs.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyanBrand hover:border-cyanBrand/40 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyanBrand hover:border-cyanBrand/40 transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-cyanBrand transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyanBrand transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyanBrand transition-colors">Services Overview</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyanBrand transition-colors">Featured Products</Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-cyanBrand transition-colors">Training Academy</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyanBrand transition-colors">Blog & Resources</Link>
              </li>
            </ul>
          </div>

          {/* AI Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">AI Products</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products" className="hover:text-cyanBrand transition-colors">HaniScan AI</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyanBrand transition-colors">HaniAssist AI</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyanBrand transition-colors">HaniTravel AI</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyanBrand transition-colors">HaniLearn AI</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyanBrand transition-colors">HaniAgent AI</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyanBrand shrink-0 mt-0.5" />
                <span>contact@haniqlabs.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyanBrand shrink-0 mt-0.5" />
                <span>+1 (800) 555-HANI</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyanBrand shrink-0 mt-0.5" />
                <span>Global AI Hub & Remote Labs</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HaniQ Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
