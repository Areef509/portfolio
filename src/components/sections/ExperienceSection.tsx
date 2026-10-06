import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';
import { Calendar, ChevronRight, MapPin } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

export const ExperienceSection: React.FC = () => {
  const [activeExpIndex, setActiveExpIndex] = useState<number | null>(0);
  const { setLinkHover, resetCursor } = useCursor();
  const { playHoverSound, playClickSound } = useSound();

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/70">
      <SectionHeading
        number="03"
        tag="PROFESSIONAL EXPERIENCE"
        title="INDUSTRY APPRENTICESHIP & ENGINEERING."
        subtitle="Hands-on software development and cloud computing internships focusing on high-performance web systems and AWS architecture."
      />

      {/* Editorial Timeline Grid */}
      <div className="space-y-6">
        {experienceData.map((exp, index) => {
          const isOpen = activeExpIndex === index;

          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => {
                setLinkHover();
                playHoverSound();
              }}
              onMouseLeave={resetCursor}
              onClick={() => {
                playClickSound();
                setActiveExpIndex(isOpen ? null : index);
              }}
              className={`p-6 sm:p-8 md:p-10 rounded-3xl border transition-all duration-400 cursor-pointer ${
                isOpen
                  ? 'border-accent/60 bg-card/80 shadow-xl'
                  : 'border-border bg-card/30 hover:border-border/80 hover:bg-card/60'
              }`}
            >
              {/* Timeline Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 font-mono text-xs text-accent uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                    <span className="text-border">•</span>
                    <span className="text-muted-foreground">{exp.type}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  <div className="text-left md:text-right">
                    <span className="font-display font-semibold text-lg text-foreground block">
                      {exp.role}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground flex items-center md:justify-end gap-1">
                      <MapPin className="w-3 h-3 text-accent" />
                      {exp.location}
                    </span>
                  </div>

                  <div
                    className={`p-2 rounded-full border border-border text-foreground transition-transform duration-300 ${
                      isOpen ? 'rotate-90 bg-accent text-white border-accent' : ''
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Collapsible Details & Achievements */}
              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-8 mt-6 border-t border-border/70 space-y-6">
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">
                      Key Engineering Responsibilities & Impact:
                    </span>
                    <ul className="space-y-3">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="font-mono text-xs text-muted-foreground mr-2">TECH STACK:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-card text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
