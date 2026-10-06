import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

export const Footer: React.FC = () => {
  const { setLinkHover, resetCursor } = useCursor();
  const { playClickSound, playHoverSound } = useSound();

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/70 py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-border/60">
        {/* Left Col */}
        <div className="md:col-span-6 space-y-3">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>MOHAMMED AREEF A</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            AI/ML • Generative AI • LLM/RAG • Systems • Chennai, India
          </p>
          <p className="text-sm text-muted-foreground max-w-md pt-2">
            Engineering scalable intelligent systems, deterministic LLM pipelines, and resilient cloud architectures.
          </p>
        </div>

        {/* Center Links */}
        <div className="md:col-span-4 space-y-3 font-mono text-xs">
          <span className="uppercase text-muted-foreground tracking-wider block">NAVIGATION</span>
          <div className="grid grid-cols-2 gap-2 text-foreground/80">
            <a href="#about" className="hover:text-accent transition-colors">01 / About</a>
            <a href="#work" className="hover:text-accent transition-colors">02 / Selected Work</a>
            <a href="#experience" className="hover:text-accent transition-colors">03 / Experience</a>
            <a href="#research" className="hover:text-accent transition-colors">04 / Research</a>
            <a href="#stack" className="hover:text-accent transition-colors">05 / Tech Stack</a>
            <a href="#contact" className="hover:text-accent transition-colors">06 / Contact</a>
          </div>
        </div>

        {/* Right Col: Back to top */}
        <div className="md:col-span-2 flex md:justify-end">
          <button
            onClick={scrollToTop}
            onMouseEnter={() => {
              setLinkHover();
              playHoverSound();
            }}
            onMouseLeave={resetCursor}
            className="p-3 rounded-full border border-border bg-card/60 hover:border-accent hover:text-accent text-foreground transition-all flex items-center justify-center group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Copyright and Meta */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div>
          © 2026 Mohammed Areef A. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/areef67890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:areef67890srec@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
