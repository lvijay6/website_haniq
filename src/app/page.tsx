"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Scan,
  Bot,
  Compass,
  GraduationCap,
  Layers,
  Code,
  Server,
  Database,
  ShieldCheck,
  Cloud,
  ChevronRight,
  Building2,
  TrendingUp,
  Award,
  Users,
  MessageSquareQuote,
  Zap,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const featuredProducts = [
    {
      name: "HaniScan AI",
      tagline: "Document Intelligence & OCR",
      description: "Intelligent document scanner with OCR and cloud storage.",
      icon: Scan,
      badge: "Flagship Product",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "HaniAssist AI",
      tagline: "RAG Enterprise Assistant",
      description: "Enterprise knowledge assistant using RAG architecture.",
      icon: Bot,
      badge: "Enterprise Ready",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "HaniTravel AI",
      tagline: "Multi-modal Transit Assistant",
      description: "Train, flight, and bus tracking assistant.",
      icon: Compass,
      badge: "Popular",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "HaniLearn AI",
      tagline: "Personalized AI Tutor",
      description: "Personalized AI-powered learning platform.",
      icon: GraduationCap,
      badge: "Future Portfolio",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "HaniAgent AI",
      tagline: "Autonomous Agentic Automation",
      description: "Agentic AI platform for enterprise automation.",
      icon: Layers,
      badge: "Future Portfolio",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const services = [
    {
      title: "AI Development",
      description: "Custom AI model integration, LLM fine-tuning, autonomous agents, and end-to-end intelligent software creation.",
      icon: Zap,
      link: "/services",
    },
    {
      title: "AI Consulting",
      description: "Strategic AI roadmapping, architecture design, tech stack selection, and enterprise ROI optimization.",
      icon: TrendingUp,
      link: "/services",
    },
    {
      title: "Corporate Training",
      description: "Upskilling enterprise engineering and product teams in Generative AI, RAG architecture, and Prompt Engineering.",
      icon: Users,
      link: "/academy",
    },
    {
      title: "Data Engineering",
      description: "High-throughput vector databases, data pipelines, ETL workflows, and secure knowledge indexing.",
      icon: Database,
      link: "/services",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable AI infrastructure deployment on AWS, serverless architectures, and edge deployment with Cloudflare.",
      icon: Cloud,
      link: "/services",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: Code,
      items: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Python FastAPI", "REST & GraphQL APIs", "Celery Tasks", "PyTorch / Transformers"],
    },
    {
      category: "Database & Vector Stores",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "Pinecone / Qdrant", "Redis Cache"],
    },
    {
      category: "Security & Auth",
      icon: ShieldCheck,
      items: ["Google Login", "MFA (Multi-Factor)", "OAuth 2.0 / JWT", "AES-256 Data Encryption"],
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      items: ["AWS", "Vercel", "Cloudflare", "Docker & Kubernetes"],
    },
  ];

  const roadmapPhases = [
    {
      phase: "Phase 1",
      duration: "2 Weeks",
      title: "Corporate Website & Launch",
      items: ["Corporate Website", "Contact Form", "Blog", "SEO Setup"],
      status: "Active / Deployed",
    },
    {
      phase: "Phase 2",
      duration: "1 Month",
      title: "Training Portal & LMS",
      items: ["Training Portal", "Course Management", "User Authentication"],
      status: "In Progress",
    },
    {
      phase: "Phase 3",
      duration: "2 Months",
      title: "AI Product Marketplace",
      items: ["AI Product Marketplace", "Subscription Plans", "Customer Dashboard"],
      status: "Upcoming",
    },
    {
      phase: "Phase 4",
      duration: "Ongoing",
      title: "SaaS Ecosystem & Scaling",
      items: ["AI SaaS Products", "Enterprise Solutions", "Global Expansion"],
      status: "Visionary",
    },
  ];

  const testimonials = [
    {
      quote: "HaniQ Labs helped us deploy a custom RAG architecture that slashed our customer support response time by 75%. Their AI expertise is second to none.",
      author: "David Miller",
      role: "CTO, FinTech Matrix",
      avatar: "DM",
    },
    {
      quote: "The Generative AI corporate workshop delivered by HaniQ Labs transformed our engineering workflow. Our team is now building AI features 3x faster.",
      author: "Sarah Jenkins",
      role: "VP of Engineering, CloudScale Solutions",
      avatar: "SJ",
    },
    {
      quote: "HaniScan AI completely automated our document validation pipeline. What used to take days now finishes in seconds with incredible accuracy.",
      author: "Marcus Vance",
      role: "Operations Director, Global Logistics Corp",
      avatar: "MV",
    },
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyanBrand/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purpleBrand/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">

            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/60 text-cyanBrand text-xs sm:text-sm font-medium tracking-wide shadow-md">
              <Sparkles className="w-4 h-4 text-cyanBrand" />
              <span>Next-Gen Artificial Intelligence Company</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
              Transforming Businesses Through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyanBrand via-blue-400 to-purpleBrand">
                Artificial Intelligence
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              HaniQ Labs delivers AI software products, consulting services, and professional training programs that help organizations innovate, automate, and grow.
            </p>

            {/* Positioning Statement Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl max-w-2xl mx-auto text-sm text-slate-300 italic border-l-4 border-l-cyanBrand">
              &quot;HaniQ Labs is an AI-first technology company building intelligent software products, delivering expert consulting, and empowering professionals through world-class AI training.&quot;
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyanBrand to-purpleBrand text-white font-bold text-base shadow-xl shadow-cyanBrand/20 hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800/90 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                Book Consultation
              </button>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-800/80">
              <div className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">5+</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">AI SaaS Products</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">99.9%</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Accuracy OCR & RAG</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">100+</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Engineers Trained</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Agentic Automation</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-cyanBrand font-bold mb-2">Capabilities</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Services Overview</h3>
          </div>
          <Link href="/services" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-cyanBrand hover:text-white font-medium transition-colors">
            Explore all services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const IconComp = svc.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyanBrand/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyanBrand/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700/60 flex items-center justify-center text-cyanBrand group-hover:text-purpleBrand group-hover:scale-110 transition-all mb-6">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyanBrand transition-colors">
                  {svc.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>
                <Link
                  href={svc.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyanBrand hover:text-white transition-colors"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 rounded-3xl bg-slate-900/40 border border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-cyanBrand font-bold mb-2">Innovation Lab</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Featured & Future Products</h3>
          <p className="text-slate-400">
            Intelligent software built from the ground up to empower enterprise workflows and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, idx) => {
            const Icon = product.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {product.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1">{product.name}</h4>
                  <div className="text-xs text-cyanBrand font-mono mb-3">{product.tagline}</div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                <Link
                  href="/products"
                  className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyanBrand/10 hover:text-cyanBrand text-slate-300 text-xs font-semibold text-center border border-slate-700 transition-colors"
                >
                  View Product Details
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-cyanBrand font-bold mb-2">Modern Architecture</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Technology Stack</h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered with modern, resilient, high-speed technologies for web applications and AI backends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-cyanBrand" />
                  <h4 className="font-bold text-white text-sm">{tech.category}</h4>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyanBrand shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Launch Roadmap Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-cyanBrand font-bold mb-2">Strategic Execution</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Launch Roadmap</h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Clear milestones guiding HaniQ Labs from baseline corporate web presence to scalable AI SaaS ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapPhases.map((phase, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono text-cyanBrand uppercase">{phase.phase} ({phase.duration})</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyanBrand/10 text-cyanBrand border border-cyanBrand/20">
                    {phase.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-4">{phase.title}</h4>
                <ul className="space-y-2.5 mb-6">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyanBrand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries & Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs uppercase tracking-widest text-cyanBrand font-bold">Industry Focus</h2>
            <h3 className="text-3xl font-extrabold text-white">Empowering Sectors Across the Globe</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              From automated financial document verification to personalized healthcare knowledge indexing, HaniQ Labs delivers tailored AI solutions across key verticals.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {["FinTech", "Healthcare", "E-Commerce", "Logistics", "EdTech", "Enterprise SaaS"].map((ind, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
                  <Building2 className="w-4 h-4 text-cyanBrand" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <MessageSquareQuote className="w-5 h-5 text-purpleBrand" />
              <span className="text-sm font-semibold text-white">Client Feedback</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <p className="text-slate-300 text-sm italic">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyanBrand to-purpleBrand text-white flex items-center justify-center font-bold text-xs">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{t.author}</div>
                      <div className="text-[11px] text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-midnight to-slate-900 border border-slate-800 p-8 sm:p-14 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyanBrand/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-cyanBrand/10 border border-cyanBrand/30 flex items-center justify-center text-cyanBrand mx-auto">
              <Award className="w-6 h-6" />
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Accelerate Your AI Strategy?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base">
              Whether you need automated AI software products, strategic consulting, or enterprise corporate workshops, HaniQ Labs is your dedicated AI innovation partner.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyanBrand to-purpleBrand text-white font-bold text-sm shadow-xl shadow-cyanBrand/20 hover:opacity-90 transition-all"
              >
                Schedule Consultation
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
