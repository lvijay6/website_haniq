import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Cpu,
  Layers,
  Database,
  Terminal,
  Building,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Training Academy | HaniQ Labs",
  description:
    "HaniQ Labs Training Academy offers professional courses in Generative AI, Agentic AI, RAG & Vector Databases, Prompt Engineering, and Corporate Workshops.",
};

export default function AcademyPage() {
  const courses = [
    {
      id: "generative-ai",
      title: "Generative AI Engineering",
      category: "Core AI",
      duration: "4 Weeks",
      level: "Intermediate to Advanced",
      icon: Cpu,
      description:
        "Master building Generative AI applications using LLMs, fine-tuning techniques, OpenAI API, Anthropic Claude, and custom local models with Ollama.",
      topics: [
        "LLM Architectures & Transformers Basics",
        "Fine-tuning Open-Source Models (Llama-3, Mistral)",
        "API Integration & Streaming Responses",
        "Cost & Latency Optimization",
      ],
    },
    {
      id: "agentic-ai",
      title: "Agentic AI & Multi-Agent Systems",
      category: "Advanced AI",
      duration: "4 Weeks",
      level: "Advanced",
      icon: Layers,
      description:
        "Learn how to construct autonomous agentic workflows, multi-agent collaboration frameworks (AutoGen, CrewAI), and self-correcting agent loops.",
      topics: [
        "ReAct & Tool Use Patterns for Autonomous Agents",
        "Multi-Agent Orchestration & Communication",
        "Human-in-the-Loop Safeguards",
        "Stateful Memory & Execution Auditing",
      ],
    },
    {
      id: "rag-vector-db",
      title: "RAG & Vector Databases",
      category: "Data & Search",
      duration: "3 Weeks",
      level: "Intermediate",
      icon: Database,
      description:
        "Engineers guide to Retrieval-Augmented Generation. Build hybrid search engines using Pinecone, Qdrant, Pgvector, and advanced chunking strategies.",
      topics: [
        "Embedding Generation & Metric Selection",
        "Hybrid Keyword + Semantic Vector Search",
        "Advanced RAG: Query Rewriting & Re-ranking",
        "Enterprise Knowledge Base Connectors",
      ],
    },
    {
      id: "prompt-engineering",
      title: "Enterprise Prompt Engineering",
      category: "Applied AI",
      duration: "2 Weeks",
      level: "All Levels",
      icon: Terminal,
      description:
        "Systematic prompt engineering strategies, Few-Shot prompting, Chain-of-Thought reasoning, and evaluation metrics for reliable LLM responses.",
      topics: [
        "System Prompt Structuring & Role Prompting",
        "Chain-of-Thought (CoT) & Tree-of-Thought (ToT)",
        "JSON/Structured Output Guarantee Techniques",
        "Automated Evaluation & Benchmark Pipelines",
      ],
    },
    {
      id: "corporate-workshops",
      title: "Corporate AI Workshops",
      category: "Enterprise Custom",
      duration: "Custom (1 to 3 Days)",
      level: "Executive & Dev Teams",
      icon: Building,
      description:
        "Tailored on-site or remote corporate workshops designed to accelerate AI literacy, prototype enterprise MVPs, and align technical strategy.",
      topics: [
        "Executive AI Strategy & Policy Alignment",
        "Hands-on Developer Hackathons & MVPs",
        "Security, Privacy & Data Compliance",
        "Custom Workflow Automation Blueprints",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-cyanBrand text-xs font-semibold">
          <Sparkles className="w-4 h-4" /> Professional Upskilling
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          HaniQ Labs <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanBrand via-blue-400 to-purpleBrand">Training Academy</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Empowering developers, architects, and corporate teams with cutting-edge AI engineering skills.
        </p>
      </div>

      {/* Highlights Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 text-center">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyanBrand/10 border border-cyanBrand/30 text-cyanBrand flex items-center justify-center mx-auto">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">Hands-on Sandbox Projects</h3>
          <p className="text-xs text-slate-400">Build production RAG pipelines and autonomous agents during class.</p>
        </div>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purpleBrand/10 border border-purpleBrand/30 text-purpleBrand flex items-center justify-center mx-auto">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">Industry Certification</h3>
          <p className="text-xs text-slate-400">Receive verifiable certificates upon course and capstone completion.</p>
        </div>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <Building className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">Tailored for Enterprises</h3>
          <p className="text-xs text-slate-400">Customized curricula for corporate engineering and product teams.</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="space-y-8">
        {courses.map((course) => {
          const Icon = course.icon;
          return (
            <div
              key={course.id}
              id={course.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyanBrand/20 to-purpleBrand/20 border border-cyanBrand/30 flex items-center justify-center text-cyanBrand">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-cyanBrand uppercase tracking-wider">
                      {course.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{course.title}</h2>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {course.description}
                </p>

                <div className="pt-2">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Syllabus Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {course.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyanBrand shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-midnight border border-slate-800 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-2.5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-cyanBrand" /> Duration
                    </span>
                    <span className="font-semibold text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-2.5">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-purpleBrand" /> Target Level
                    </span>
                    <span className="font-semibold text-white">{course.level}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyanBrand to-purpleBrand text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Enroll / Inquire Now
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
