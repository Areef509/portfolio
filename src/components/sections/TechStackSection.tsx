import React from 'react';
import { motion } from 'framer-motion';
import { marqueeTechnologies, techCategories } from '../../data/techStack';
import { SectionHeading } from '../ui/SectionHeading';
import { Brain, Sparkles, MessageSquareText, Layers, Server, Terminal } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Sparkles,
  MessageSquareText,
  Layers,
  Server,
};

export const TechStackSection: React.FC = () => {
  const { setLinkHover, resetCursor } = useCursor();
  const { playHoverSound } = useSound();

  return (
    <section id="stack" className="py-24 md:py-32 max-w-7xl mx-auto border-t border-border/70 overflow-hidden">
      <div className="px-6 md:px-12">
        <SectionHeading
          number="05"
          tag="TECHNICAL IDENTITY"
          title="SYSTEM ARCHITECTURE & CORE STACK."
          subtitle="A principled inventory of algorithms, frameworks, vector retrieval pipelines, and full-stack cloud tooling."
        />
      </div>

      {/* Infinite Scrolling Horizontal Marquee 1 (Left to Right) */}
      <div className="my-10 relative w-full overflow-hidden py-4 border-y border-border/60 bg-muted/20">
        <div className="flex whitespace-nowrap animate-marquee-slow font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground/80 uppercase select-none">
          {marqueeTechnologies.concat(marqueeTechnologies).map((tech, idx) => (
            <span key={idx} className="flex items-center gap-6 mx-4">
              <span className="hover:text-accent transition-colors">{tech}</span>
              <span className="text-accent text-sm font-mono">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Categorized Matrix Grid */}
      <div className="px-6 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => {
          const IconComponent = iconMap[category.iconName] || Terminal;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => {
                setLinkHover();
                playHoverSound();
              }}
              onMouseLeave={resetCursor}
              className="p-6 md:p-8 rounded-3xl border border-border bg-card/40 backdrop-blur-sm hover:border-accent/40 hover:bg-card/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    0{index + 1} // DOMAIN
                  </span>
                  <IconComponent className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-sans">
                  {category.description}
                </p>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-lg border transition-colors ${
                      skill.highlight
                        ? 'border-accent/40 bg-accent/10 text-accent font-semibold'
                        : 'border-border bg-card text-muted-foreground'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
