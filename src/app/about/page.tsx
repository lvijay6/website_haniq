import { Sparkles, Target, Compass, HeartHandshake, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "About Us | HaniQ Labs",
  description: "Learn about HaniQ Labs company story, vision & mission, founder message, and why organizations choose us as their AI innovation partner.",
};

export default function AboutPage() {
  const values = [
    {
      title: "AI First Thinking",
      desc: "We approach every business bottleneck through the lens of modern generative and agentic AI capabilities.",
      icon: Zap,
    },
    {
      title: "Engineering Excellence",
      desc: "Production-grade code, robust RAG pipelines, high security standards, and scalable cloud architectures.",
      icon: ShieldCheck,
    },
    {
      title: "Human Centric Empowerment",
      desc: "Empowering workforce efficiency rather than replacing it—training teams to master AI tools effortlessly.",
      icon: HeartHandshake,
    },
    {
      title: "Continuous Innovation",
      desc: "Pioneering state-of-the-art developments in vector search, agent workflows, and multi-modal assistants.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-cyanBrand text-xs font-semibold">
          <Sparkles className="w-4 h-4" /> About HaniQ Labs
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanBrand to-purpleBrand">Intelligent Software</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          HaniQ Labs is an AI-first technology company building intelligent software products, delivering expert consulting, and empowering professionals through world-class AI training.
        </p>
      </div>

      {/* Company Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12">
        <div className="space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-cyanBrand font-bold">Our Journey</h2>
          <h3 className="text-3xl font-bold text-white">Company Story</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded by AI practitioners and software architects, HaniQ Labs was born out of a crucial realization: while Artificial Intelligence capabilities were accelerating exponentially, most enterprise organizations struggled to translate research models into production-ready software.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We launched HaniQ Labs to bridge this gap. By building proprietary flagship products like HaniScan AI and HaniAssist AI while offering specialized consulting and engineering academy programs, we empower enterprises and professionals to thrive in an AI-driven economy.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="text-3xl font-black text-cyanBrand">2024</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Lab Inception</div>
            <div className="text-xs text-slate-400">Pioneered multi-modal RAG and custom OCR engines.</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="text-3xl font-black text-purpleBrand">5+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">AI SaaS Suite</div>
            <div className="text-xs text-slate-400">Document scanners, travel assistants, and agentic platforms.</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="text-3xl font-black text-white">100%</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Focus</div>
            <div className="text-xs text-slate-400">Strict data privacy, MFA, and zero-leakage LLMs.</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="text-3xl font-black text-cyanBrand">Global</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Remote Lab Ops</div>
            <div className="text-xs text-slate-400">Serving clients and students across continents.</div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyanBrand/10 border border-cyanBrand/30 flex items-center justify-center text-cyanBrand">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            To become the premier global benchmark in AI technology solutions—where intelligent agentic automation and human ingenuity operate seamlessly in harmony.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purpleBrand/10 border border-purpleBrand/30 flex items-center justify-center text-purpleBrand">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            To accelerate business innovation by engineering top-tier AI software, delivering actionable strategic consulting, and training the next generation of AI engineers.
          </p>
        </div>
      </section>

      {/* Founder Message */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-midnight to-slate-900 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyanBrand to-purpleBrand flex items-center justify-center font-bold text-white text-lg">
              HQ
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Founder Message</h3>
              <p className="text-xs text-cyanBrand">Leadership at HaniQ Labs</p>
            </div>
          </div>

          <blockquote className="text-slate-200 text-base sm:text-lg italic leading-relaxed border-l-2 border-cyanBrand pl-4">
            &quot;Artificial Intelligence is not just a technology upgrade; it represents a fundamental paradigm shift in how businesses create value. At HaniQ Labs, our commitment is simple: we deliver bulletproof AI systems that drive real, measurable impact from Day 1.&quot;
          </blockquote>
        </div>
      </section>

      {/* Why HaniQ Labs */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-cyanBrand font-bold mb-2">Our Core Principles</h2>
          <h3 className="text-3xl font-bold text-white">Why Choose HaniQ Labs</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <Icon className="w-6 h-6 text-cyanBrand" />
                <h4 className="text-lg font-bold text-white">{v.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
