"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Training Academy", href: "/academy" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-midnight/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyanBrand via-purpleBrand to-cyanBrand p-[2px] shadow-lg shadow-cyanBrand/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-midnight rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyanBrand group-hover:text-purpleBrand transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
                HaniQ<span className="text-cyanBrand">Labs</span>
                <Sparkles className="w-3.5 h-3.5 text-purpleBrand inline-block" />
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-mono -mt-1 uppercase">
                AI Solutions & Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-cyanBrand/10 text-cyanBrand border border-cyanBrand/30 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyanBrand to-purpleBrand hover:opacity-90 shadow-lg shadow-cyanBrand/20 transition-all duration-200 flex items-center gap-2 group"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-midnight/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-cyanBrand/10 text-cyanBrand border border-cyanBrand/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-cyanBrand to-purpleBrand shadow-lg shadow-cyanBrand/20"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
