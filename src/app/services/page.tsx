import Link from "next/link";
import {
  Sparkles,
  Bot,
  BrainCircuit,
  GraduationCap,
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "AI & Tech Services | HaniQ Labs",
  description: "Explore HaniQ Labs core services: AI Development, AI Consulting, Corporate Training, Data Engineering, and Cloud Solutions.",
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: "ai-development",
      title: "AI Software Development",
      category: "Core Engineering",
      icon: Bot,
      description:
        "We engineer end-to-end intelligent software solutions, including autonomous AI agents, fine-tuned LLMs, RAG applications, and custom machine learning pipelines.",
      deliverables: [
        "Custom LLM Fine-Tuning & Prompt Pipelines",
        "Agentic Autonomous Workflow Automation",
        "RAG (Retrieval-Augmented Generation) Systems",
        "RESTful API & Microservice Integration",
      ],
      techStack: ["Python FastAPI", "LangChain / LlamaIndex", "Next.js 15", "PyTorch"],
    },
    {
      id: "ai-consulting",
      title: "Strategic AI Consulting",
      category: "Advisory & ROI",
      icon: BrainCircuit,
      description:
        "Guide your organization through AI adoption. We audit existing workflows, design technical architectures, select optimal models, and ensure maximum ROI.",
      deliverables: [
        "AI Opportunity Assessment & Roadmap",
        "Model Selection & Cost Optimization",
        "Enterprise Data Governance & Compliance Audit",
        "AI Architecture Blueprinting",
      ],
      techStack: ["OpenAI API", "Anthropic Claude", "Custom Benchmarks", "AWS AI"],
    },
    {
      id: "corporate-training",
      title: "Corporate AI Training",
      category: "Workforce Upskilling",
      icon: GraduationCap,
      description:
        "Transform your engineering and product teams with world-class hands-on AI workshops covering Generative AI, Prompt Engineering, and RAG architectures.",
      deliverables: [
        "Custom Hands-on Enterprise Workshops",
        "Developer Upskilling & Code Reviews",
        "Prompt Engineering Best Practices",
        "Interactive Coding Exercises & Certifications",
      ],
      techStack: ["Live Sandbox", "GitHub Workflows", "Python Notebooks"],
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Vector Stores",
      category: "Data Infrastructure",
      icon: Database,
      description:
        "Build resilient, high-speed data pipelines and vector databases optimized for LLM search, semantic querying, and real-time knowledge retrieval.",
      deliverables: [
        "Vector Database Setup & Optimization (Pinecone/Qdrant)",
        "Automated Data Ingestion & Chunking ETLs",
        "PostgreSQL & MongoDB Schema Design",
        "High-Throughput Data Caching",
      ],
      techStack: ["PostgreSQL", "MongoDB", "Pinecone", "Redis", "Apache Kafka"],
    },
    {
      id: "cloud-solutions",
      title: "Cloud & AI Infrastructure",
      category: "DevOps & Cloud",
      icon: Cloud,
      description:
        "Deploy and scale your AI applications securely on modern cloud infrastructure with zero downtime, robust MFA, and automated CI/CD pipelines.",
      deliverables: [
        "AWS & Vercel Enterprise Deployment",
        "Cloudflare Edge Security & CDN",
        "MFA & Google OAuth Authentication",
        "Kubernetes & Docker Container Orchestration",
      ],
      techStack: ["AWS", "Vercel", "Cloudflare", "Docker", "Terraform"],
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-cyanBrand text-xs font-semibold">
          <Sparkles className="w-4 h-4" /> Enterprise Services
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanBrand via-blue-400 to-purpleBrand">AI Services & Solutions</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          From custom software engineering to executive consulting and team workshops, we empower organizations to innovate rapidly with AI.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-10">
        {serviceList.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.id}
              id={svc.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyanBrand/20 to-purpleBrand/20 border border-cyanBrand/30 flex items-center justify-center text-cyanBrand">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-cyanBrand uppercase tracking-wider">
                      {svc.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{svc.title}</h2>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {svc.description}
                </p>

                <div className="pt-2">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Key Deliverables</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {svc.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyanBrand shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar with Tech Stack & CTA */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-midnight border border-slate-800 space-y-6 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {svc.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <Link
                    href="/contact"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyanBrand to-purpleBrand text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Inquire About {svc.title}
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
