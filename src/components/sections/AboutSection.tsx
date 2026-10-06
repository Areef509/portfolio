import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Award, BookOpen, Cpu, Globe2, ShieldCheck, Zap } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

export const AboutSection: React.FC = () => {
  const { setLinkHover, resetCursor } = useCursor();
  const { playHoverSound } = useSound();

  const manifestoPoints = [
    {
      num: '01',
      title: 'DETERMINISTIC SYSTEMS OVER BRITTLE DEMOS',
      description:
        'AI prototypes are easy; dependable production systems are hard. I focus on schema constraints, fallback policies, rigorous latency budgets, and end-to-end evaluation metrics so models behave predictably in mission-critical environments.',
      icon: ShieldCheck,
    },
    {
      num: '02',
      title: 'LATENCY-CONSCIOUS RETRIEVAL & INFERENCE',
      description:
        'Whether tuning Groq LPU streaming or architecting hybrid BM25 + dense vector RAG with Reciprocal Rank Fusion across 850+ documents, speed and contextual precision dictate whether an AI tool is genuinely useful.',
      icon: Zap,
    },
    {
      num: '03',
      title: 'FULL-STACK SYNERGY FROM KERNEL TO CANVAS',
      description:
        'A model is only as effective as the infrastructure executing it and the interface delivering it. I build the complete chain: OS daemons, PyTorch neural models, asynchronous Python gateways, and reactive UI dashboards.',
      icon: Cpu,
    },
  ];

  const highlights = [
    { label: 'Degree & Institution', value: 'B.E. AI & ML', sub: 'Sriram Engineering College, Chennai' },
    { label: 'Algorithm Mastery', value: '300+ Problems', sub: 'LeetCode DSA & Dynamic Programming' },
    { label: 'Research Publication', value: 'ICNKAI-2025', sub: 'Multilingual NLP & Intent Recognition' },
    { label: 'Engineering Core', value: 'Full-Stack AI', sub: 'PyTorch • GenAI/RAG • React • Cloud' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/70">
      <SectionHeading
        number="01"
        tag="MANIFESTO & PROFILE"
        title="AI IS ONLY USEFUL WHEN IT SOLVES SOMETHING REAL."
      />

      {/* Editorial 2-Column Manifesto Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative & Bio */}
        <div className="lg:col-span-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-sans"
          >
            <p className="text-foreground font-medium text-xl md:text-2xl leading-snug font-display">
              I’m Mohammed Areef A, an AI/ML engineer and full-stack developer based in Chennai, India.
            </p>
            <p>
              I am pursuing my Bachelor of Engineering in <span className="text-foreground font-semibold">Artificial Intelligence & Machine Learning</span> at <span className="text-foreground font-semibold">Sriram Engineering College</span>. My work spans generative AI, low-latency LLM/RAG architectures, multilingual NLP, self-healing systems, and scalable cloud microservices.
            </p>
            <p>
              I bridge the gap between abstract academic research and battle-tested production software—designing intelligent systems that diagnose clinical data at sub-400ms speeds, autonomously heal distributed cloud servers, and retrieve exact answers across large technical knowledge bases.
            </p>
          </motion.div>

          {/* Quick Academic & Professional Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4 flex flex-wrap gap-2.5 font-mono text-xs text-muted-foreground"
          >
            <span className="px-3.5 py-1.5 rounded-full border border-border bg-card/60 flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-accent" />
              Chennai, India (IST)
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-border bg-card/60 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              B.E. AI & ML (Final Year)
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-border bg-card/60 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-accent" />
              ICNKAI-2025 Author
            </span>
          </motion.div>
        </div>

        {/* Right Column: Key Stats Matrix */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => {
                setLinkHover();
                playHoverSound();
              }}
              onMouseLeave={resetCursor}
              className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-accent/40 hover:bg-card/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
                {item.label}
              </span>
              <div className="mt-4">
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:translate-x-1 transition-transform">
                  {item.value}
                </div>
                <div className="font-sans text-xs text-muted-foreground mt-1">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3 Engineering Principles / Pillars */}
      <div className="mt-20 pt-16 border-t border-border/70">
        <div className="mb-10 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ENGINEERING CREED & ARCHITECTURAL VALUES
          </span>
          <span className="font-mono text-xs text-accent">03 PRINCIPLES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {manifestoPoints.map((point, idx) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:bg-card/60 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-accent font-semibold px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                    {point.num}
                  </span>
                  <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
