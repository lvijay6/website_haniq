import Link from "next/link";
import {
  Sparkles,
  Scan,
  Bot,
  Compass,
  GraduationCap,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "AI SaaS Products & Future Portfolio | HaniQ Labs",
  description:
    "Explore HaniQ Labs software products: HaniScan AI, HaniAssist AI, HaniTravel AI, HaniLearn AI, and HaniAgent AI.",
};

export default function ProductsPage() {
  const products = [
    {
      id: "haniscan-ai",
      name: "HaniScan AI",
      tagline: "Intelligent Document Scanner with OCR & Cloud Storage",
      status: "Available Now",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      icon: Scan,
      description:
        "HaniScan AI transforms legacy paper documents, complex PDFs, and scanned receipts into structured JSON and searchable vector database indices with multi-lingual OCR support.",
      features: [
        "Advanced Multi-Lingual OCR Processing",
        "Automated Form Field & Invoice Data Extraction",
        "Cloud Storage Integration (AWS S3 & Encrypted Vaults)",
        "Instant Export to JSON, CSV & Vector Indices",
      ],
      badge: "OCR & Document AI",
    },
    {
      id: "haniassist-ai",
      name: "HaniAssist AI",
      tagline: "Enterprise Knowledge Assistant using RAG Architecture",
      status: "Enterprise Ready",
      statusColor: "bg-cyanBrand/10 text-cyanBrand border-cyanBrand/30",
      icon: Bot,
      description:
        "HaniAssist AI connects directly to your company's internal documentation, Notion, Slack, and SQL databases using RAG (Retrieval-Augmented Generation) to give accurate, secure answers with zero hallucination.",
      features: [
        "Multi-Source Knowledge Base Integration",
        "Strict Enterprise Access Control & Role Permissions",
        "Zero-Data-Retention LLM Privacy Protection",
        "Interactive Citation Links to Original Documents",
      ],
      badge: "RAG & LLM Assistant",
    },
    {
      id: "hanitravel-ai",
      name: "HaniTravel AI",
      tagline: "Train, Flight & Bus Tracking Assistant",
      status: "Available Now",
      statusColor: "bg-purpleBrand/10 text-purpleBrand border-purpleBrand/30",
      icon: Compass,
      description:
        "HaniTravel AI provides real-time transit schedule intelligence, disruption alerts, and automated itinerary re-booking suggestions across trains, flights, and bus systems worldwide.",
      features: [
        "Real-Time Flight & Train Delay Tracking",
        "Conversational Itinerary Management",
        "Automated Disruption Alerts via WhatsApp/Email",
        "Multi-Modal Route Optimization",
      ],
      badge: "Transit Intelligence",
    },
    {
      id: "hanilearn-ai",
      name: "HaniLearn AI",
      tagline: "Personalized AI-Powered Learning Platform",
      status: "Future Product",
      statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      icon: GraduationCap,
      description:
        "HaniLearn AI generates customized skill pathways, adaptive quizzes, and interactive code tutors tailored to student learning speeds and career objectives.",
      features: [
        "Adaptive Learning Curriculum Generator",
        "Real-Time AI Code Review & Feedback",
        "Interactive Practice Sandboxes",
        "Gamified Skill Tracking & Certificates",
      ],
      badge: "Future Portfolio",
    },
    {
      id: "haniagent-ai",
      name: "HaniAgent AI",
      tagline: "Agentic AI Platform for Enterprise Automation",
      status: "Future Product",
      statusColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
      icon: Layers,
      description:
        "HaniAgent AI deploys autonomous multi-agent systems capable of reasoning, calling external APIs, executing complex workflows, and resolving customer inquiries end-to-end.",
      features: [
        "Multi-Agent Goal Execution Workflows",
        "Human-in-the-Loop Safety Approvals",
        "Custom Tool & Webhook Integration",
        "Audited Execution Logs & Analytics",
      ],
      badge: "Agentic Platform",
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-cyanBrand text-xs font-semibold">
          <Sparkles className="w-4 h-4" /> Product Portfolio
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Intelligent Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanBrand via-blue-400 to-purpleBrand">Products</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          From document intelligence and enterprise knowledge assistants to transit tracking and autonomous agents.
        </p>
      </div>

      {/* Product Cards */}
      <div className="space-y-10">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <div
              key={product.id}
              id={product.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyanBrand/20 to-purpleBrand/20 border border-cyanBrand/30 flex items-center justify-center text-cyanBrand">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">{product.name}</h2>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${product.statusColor}`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-cyanBrand mt-0.5">{product.tagline}</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyanBrand shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-midnight border border-slate-800 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-cyanBrand" />
                    <span>Security: MFA & Google Auth Ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Zap className="w-4 h-4 text-purpleBrand" />
                    <span>Hosted on AWS & Cloudflare</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href="/contact"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyanBrand to-purpleBrand text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Request Demo / Access
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
