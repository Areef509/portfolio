import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { researchData } from '../../data/research';
import { SectionHeading } from '../ui/SectionHeading';
import { Copy, Check, Award, Quote } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

interface ResearchSectionProps {
  onShowToast: (msg: string) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onShowToast }) => {
  const [citationCopied, setCitationCopied] = useState(false);
  const { setButtonHover, resetCursor } = useCursor();
  const { playSuccessSound, playHoverSound } = useSound();

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(researchData.citationText);
    setCitationCopied(true);
    playSuccessSound();
    onShowToast('BibTeX citation copied to clipboard!');
    setTimeout(() => setCitationCopied(false), 3000);
  };

  return (
    <section id="research" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/70">
      <SectionHeading
        number="04"
        tag="PEER-REVIEWED PUBLICATION"
        title="ACADEMIC RESEARCH & SCHOLARSHIP."
        subtitle="Contributing to natural language processing and transformer manifold alignment for automated multilingual customer support systems."
      />

      {/* Editorial Academic Paper Layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 md:p-14 rounded-3xl border border-border bg-card/40 backdrop-blur-md relative overflow-hidden"
      >
        {/* Academic watermark styling */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/70 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2 text-accent font-semibold">
            <Award className="w-4 h-4" />
            <span>{researchData.status}</span>
          </div>
          <div>{researchData.conference}</div>
        </div>

        {/* Paper Title & Authors */}
        <div className="my-8 space-y-4">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {researchData.title}
          </h3>
          <div className="font-mono text-xs text-muted-foreground">
            Authors: <span className="text-foreground font-semibold">Mohammed Areef A</span>, Research Collaborators, Faculty Advisors
          </div>
        </div>

        {/* Abstract Box */}
        <div className="p-6 md:p-8 rounded-2xl bg-muted/30 border border-border space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-bold">
            <Quote className="w-4 h-4" />
            <span>Abstract</span>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
            {researchData.abstract}
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-mono text-xs text-muted-foreground mr-1">INDEX TERMS:</span>
            {researchData.keywords.map((kw) => (
              <span
                key={kw}
                className="font-mono text-[11px] px-3 py-1 rounded-full border border-border bg-card text-foreground"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <div className="my-10 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">
            Core Contributions & Findings:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchData.keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-border bg-card/60 flex items-start gap-3"
              >
                <span className="font-mono text-xs text-accent font-bold mt-0.5">0{idx + 1}.</span>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">{finding}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions: Citation Copy & Read Research */}
        <div className="pt-6 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            Conference: <span className="text-foreground">ICNKAI-2025</span> (International)
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyCitation}
              onMouseEnter={() => {
                setButtonHover();
                playHoverSound();
              }}
              onMouseLeave={resetCursor}
              className="px-5 py-3 rounded-full border border-border bg-card text-foreground hover:border-accent hover:text-accent font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
            >
              {citationCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{citationCopied ? 'Citation Copied' : 'Copy BibTeX'}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
