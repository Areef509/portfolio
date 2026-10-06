import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { X, Github, Layers, Sparkles, CheckCircle2, ShieldAlert, Workflow } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { useCursor } from '../../context/CursorContext';
import { MagneticButton } from '../ui/MagneticButton';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { playClickSound } = useSound();
  const { setButtonHover, resetCursor } = useCursor();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
      window.dispatchEvent(new CustomEvent('lenis-stop'));
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
      window.dispatchEvent(new CustomEvent('lenis-start'));
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
      window.dispatchEvent(new CustomEvent('lenis-start'));
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="fixed inset-0 bg-background/90 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 h-[88vh] max-h-[900px] flex flex-col overscroll-contain"
          >
            {/* Modal Header (Fixed at top of modal) */}
            <div className="flex-shrink-0 z-20 flex items-center justify-between px-6 md:px-10 py-5 bg-card/95 backdrop-blur-md border-b border-border">
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                <span className="text-accent font-bold">{project.number}</span>
                <span className="text-border">/</span>
                <span>CASE STUDY ARCHIVE</span>
                <span className="text-border">/</span>
                <span className="hidden sm:inline text-foreground font-medium">{project.category}</span>
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setButtonHover()}
                    onMouseLeave={resetCursor}
                    className="p-2 rounded-full border border-border hover:border-accent hover:text-accent text-muted-foreground transition-all flex items-center justify-center"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => {
                    playClickSound();
                    onClose();
                  }}
                  onMouseEnter={() => setButtonHover()}
                  onMouseLeave={resetCursor}
                  className="p-2 rounded-full border border-border hover:bg-muted text-foreground transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto overscroll-contain px-6 md:px-10 py-8 space-y-12 select-text"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                scrollbarColor: 'var(--border) transparent',
              }}
            >
              {/* Project Hero Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs text-accent">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{project.visualTheme.primaryBadge}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                  {project.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                  {project.tagline}
                </p>
              </div>

              {/* Key Benchmark Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-muted/40 border border-border">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </span>
                    <div className="font-display text-2xl md:text-3xl font-bold text-accent">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* 01 & 02: Problem & Solution Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl border border-border bg-card/60 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rose-500 font-semibold">
                    <ShieldAlert className="w-4 h-4" />
                    <span>01. The Problem</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.overview.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-border bg-card/60 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-500 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>02. The Engineered Solution</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.overview.solution}
                  </p>
                </div>
              </div>

              {/* 03: Architecture & Data Flow */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>03. System Architecture & Pipeline Flow</span>
                </div>

                <p className="text-sm md:text-base text-muted-foreground">
                  {project.architecture.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.architecture.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-border bg-muted/20 relative group hover:border-accent/40 transition-colors"
                    >
                      <div className="font-mono text-xs font-bold text-accent mb-2">
                        {step.title}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {step.desc}
                      </p>
                      <div className="font-mono text-[10px] text-foreground font-semibold px-2 py-1 rounded bg-card border border-border inline-block">
                        {step.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04: AI / ML Workflow & Topology */}
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-gradient-to-b from-card to-muted/20 space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  <Workflow className="w-4 h-4" />
                  <span>04. Machine Learning Topology & Inference Engine</span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-foreground mb-2">
                    {project.mlWorkflow.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.mlWorkflow.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">
                      Key Algorithmic Modules:
                    </span>
                    <ul className="space-y-2">
                      {project.mlWorkflow.components.map((comp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">
                      Evaluation & Performance Metrics:
                    </span>
                    <div className="space-y-2.5">
                      {project.mlWorkflow.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-card border border-border text-xs font-mono"
                        >
                          <span className="text-muted-foreground">{metric.name}</span>
                          <span className="text-accent font-bold">{metric.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 05: Technologies & Stack Breakdown */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">
                  05. Stack & Dependencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full border border-border bg-card font-mono text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 06 & 07: Outcome & Action Buttons */}
              <div className="border-t border-border pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-xs font-mono text-muted-foreground">
                  <span className="text-foreground font-semibold">STATUS:</span> Production Architecture Verified
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {project.githubUrl && (
                    <MagneticButton as="a" href={project.githubUrl} target="_blank" className="w-full sm:w-auto">
                      <div className="w-full sm:w-auto px-6 py-3 rounded-full bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors">
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </div>
                    </MagneticButton>
                  )}
                  <button
                    onClick={() => {
                      playClickSound();
                      onClose();
                    }}
                    className="px-6 py-3 rounded-full border border-border font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
