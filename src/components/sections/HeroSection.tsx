import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Cpu, Terminal } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';
import { MagneticButton } from '../ui/MagneticButton';

export const HeroSection: React.FC = () => {
  const { setButtonHover, resetCursor } = useCursor();
  const { playClickSound } = useSound();

  const scrollToWork = () => {
    playClickSound();
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    playClickSound();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Massive Editorial Headline & Statement */}
      <div className="my-auto py-10 md:py-14">
        {/* Kinetic Tag Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-md mb-8"
        >
          <Cpu className="w-3.5 h-3.5 text-accent" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            AI/ML • Generative AI • LLM/RAG • NLP • Systems
          </span>
        </motion.div>

        {/* Oversized Typography Statement */}
        <div className="space-y-1 md:space-y-3 font-display">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-extrabold tracking-tighter leading-[0.95] text-foreground uppercase">
              I BUILD INTELLIGENT
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden flex flex-wrap items-baseline gap-x-4 md:gap-x-6"
          >
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-extrabold tracking-tighter leading-[0.95] text-foreground uppercase">
              SYSTEMS FOR REAL
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden flex flex-wrap items-baseline gap-x-4 md:gap-x-6"
          >
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-extrabold tracking-tighter leading-[0.95] text-accent uppercase">
              WORLD PROBLEMS.
            </span>
          </motion.div>
        </div>

        {/* Supporting Narrative & Editorial Description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              Artificial Intelligence & Machine Learning engineer turning complex neural algorithms,
              low-latency LLM/RAG pipelines, and full-stack systems into high-impact, deterministic
              applications.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <MagneticButton onClick={scrollToWork}>
              <div className="px-7 py-4 rounded-full bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-3 hover:bg-accent-hover shadow-lg shadow-accent/20 transition-all">
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </div>
            </MagneticButton>

            <MagneticButton onClick={scrollToContact}>
              <div className="px-6 py-4 rounded-full border border-border bg-card/60 backdrop-blur-md text-foreground font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:border-accent/60 transition-all">
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Meta Bar & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="border-t border-border/70 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-foreground">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>SPECIALIZATION:</span>
          </div>
          <span>LLM/RAG • AIOps • Autonomous Agents • NLP</span>
        </div>

        <button
          onClick={scrollToWork}
          onMouseEnter={() => setButtonHover()}
          onMouseLeave={resetCursor}
          className="group flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer"
        >
          <span className="tracking-widest uppercase text-[11px] group-hover:text-accent transition-colors">
            [SCROLL TO EXPLORE ↓]
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-accent group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};
