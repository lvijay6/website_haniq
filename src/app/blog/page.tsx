"use client";

import { useState } from "react";
import { Sparkles, Calendar, Clock, Tag, ArrowRight, X, User } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: "AI Articles" | "Tutorials" | "Case Studies" | "Industry Trends";
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string;
  tags: string[];
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ["All", "AI Articles", "Tutorials", "Case Studies", "Industry Trends"];

  const articles: Article[] = [
    {
      id: "rag-architecture-guide",
      title: "Building Enterprise-Grade RAG Systems with Hybrid Vector Search",
      category: "Tutorials",
      date: "August 24, 2024",
      readTime: "7 min read",
      author: "HaniQ Labs Engineering",
      summary:
        "Learn how combining sparse BM25 and dense vector embeddings solves data retrieval challenges and eliminates LLM hallucinations in production.",
      content:
        "Retrieval-Augmented Generation (RAG) has emerged as the standard pattern for bringing custom enterprise knowledge to Large Language Models. However, naive dense vector search often fails when users search for specific acronyms, invoice IDs, or rare keywords. In this tutorial, we demonstrate how HaniAssist AI leverages hybrid search combining BM25 keyword matching with Pinecone dense vectors to achieve 99.4% precision.",
      tags: ["RAG Architecture", "Vector Databases", "Python FastAPI", "OpenAI"],
    },
    {
      id: "agentic-ai-future-automation",
      title: "The Shift from Passive Chatbots to Autonomous Agentic AI",
      category: "AI Articles",
      date: "August 18, 2024",
      readTime: "5 min read",
      author: "Dr. H. Qureshi",
      summary:
        "Why single-prompt chatbots are being replaced by multi-agent workflows that can execute multi-step tools, audit results, and self-correct.",
      content:
        "The era of simple chat interfaces is rapidly giving way to Agentic AI. Autonomous agents do not just output text—they plan actions, trigger external APIs, query SQL databases, and continuously verify their own work. In this article, we break down the core architectural patterns of HaniAgent AI and how enterprises are automating back-office operations.",
      tags: ["Agentic AI", "Autonomous Workflows", "Enterprise SaaS"],
    },
    {
      id: "haniscan-ocr-case-study",
      title: "Case Study: How HaniScan AI Reduced Document Verification Time by 85%",
      category: "Case Studies",
      date: "August 10, 2024",
      readTime: "6 min read",
      author: "Solutions Architecture Team",
      summary:
        "A deep dive into how a global logistics firm integrated HaniScan AI OCR to parse complex multi-page bills of lading automatically.",
      content:
        "Processing paper bills of lading and shipping invoices manually used to cost Global Freight Systems over 120 hours per week. By integrating HaniScan AI's specialized document vision pipeline, document data extraction accuracy jumped to 99.2%, while total processing time plummeted from 45 minutes down to 3 seconds per document batch.",
      tags: ["Case Study", "OCR", "HaniScan AI", "Logistics"],
    },
    {
      id: "llm-trends-2025",
      title: "Top 5 Generative AI Trends Shaping Enterprise Tech in 2025",
      category: "Industry Trends",
      date: "July 29, 2024",
      readTime: "8 min read",
      author: "HaniQ Labs Research",
      summary:
        "From small specialized local models to multi-modal reasoning and edge deployment, explore the key trends driving AI strategy.",
      content:
        "As LLMs mature, the enterprise focus is moving away from raw parameter count toward latency reduction, multi-modal comprehension (vision + audio + text), and strict data privacy compliance. In this trend report, HaniQ Labs highlights 5 pivotal shifts every CTO should prepare for.",
      tags: ["AI Trends", "Generative AI", "Strategy", "AWS"],
    },
    {
      id: "prompt-engineering-best-practices",
      title: "Practical Prompt Engineering: Guaranteeing Structured JSON Outputs",
      category: "Tutorials",
      date: "July 15, 2024",
      readTime: "4 min read",
      author: "Academy Instruction Team",
      summary:
        "A step-by-step developer guide on using Pydantic, JSON mode, and schema validation techniques for deterministic LLM outputs.",
      content:
        "Relying on LLMs to return reliable JSON without syntax errors used to be a gamble. Using modern Pydantic schema constraints and strict system prompts, developers can consistently force models to format responses as validated TypeScript/Python objects.",
      tags: ["Prompt Engineering", "TypeScript", "Python"],
    },
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-cyanBrand text-xs font-semibold">
          <Sparkles className="w-4 h-4" /> AI Research & Insights
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          HaniQ Labs <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanBrand via-blue-400 to-purpleBrand">Blog & Tutorials</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Deep dives into Generative AI, RAG architectures, agentic automation, and industry case studies.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-cyanBrand to-purpleBrand text-white shadow-md"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-cyanBrand/10 text-cyanBrand font-medium border border-cyanBrand/20">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-cyanBrand transition-colors">
                {article.title}
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-4">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-purpleBrand" /> {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {article.date}
                </span>
              </div>

              <button
                onClick={() => setActiveArticle(article)}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Read Full Article <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute right-6 top-6 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-cyanBrand/10 text-cyanBrand text-xs font-semibold border border-cyanBrand/30">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 border-t border-b border-slate-800 py-6">
              <p>{activeArticle.content}</p>
              <p className="text-slate-400 text-xs italic">
                Published by HaniQ Labs Research & Technical Editorial Team. Contact us for custom whitepapers or enterprise consulting.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-cyanBrand" />
              {activeArticle.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
