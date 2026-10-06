import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Activity } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

export const SelectedWorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const { setProjectHover, resetCursor } = useCursor();
  const { playHoverSound, playModalOpenSound } = useSound();

  const handleOpenProject = (project: Project) => {
    playModalOpenSound();
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/70">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <SectionHeading
          number="02"
          tag="SELECTED WORK & SYSTEMS"
          title="ENGINEERED INTELLIGENCE."
          subtitle="A curated selection of machine learning architectures, low-latency LLM/RAG pipelines, self-healing systems, and distributed anomaly detection platforms."
          className="mb-0"
        />

        <div className="font-mono text-xs text-muted-foreground flex items-center gap-2 flex-shrink-0">
          <Activity className="w-4 h-4 text-accent" />
          <span>CLICK ANY PROJECT FOR DEEP ARCHITECTURE CASE STUDY</span>
        </div>
      </div>

      {/* Editorial Large Projects Showcase */}
      <div className="space-y-6 md:space-y-8">
        {projectsData.map((project, index) => {
          const isHovered = activeHoverId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => {
                setActiveHoverId(project.id);
                setProjectHover(project.title);
                playHoverSound();
              }}
              onMouseLeave={() => {
                setActiveHoverId(null);
                resetCursor();
              }}
              onClick={() => handleOpenProject(project)}
              className={`group relative p-6 sm:p-8 md:p-12 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                isHovered
                  ? 'border-accent/60 bg-card/90 shadow-2xl shadow-accent/10 translate-y-[-3px]'
                  : 'border-border bg-card/30 hover:border-border/80 hover:bg-card/60'
              }`}
            >
              {/* Background ambient accent on hover */}
              <div
                className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/10 blur-[100px] pointer-events-none transition-opacity duration-700 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Huge Number & Meta */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between items-start">
                  <div className="space-y-2">
                    <span
                      className={`font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter transition-colors duration-300 ${
                        isHovered ? 'text-accent' : 'text-muted-foreground/50'
                      }`}
                    >
                      {project.number}
                    </span>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider block">
                      {project.year} • {project.category}
                    </div>
                  </div>

                  <div className="hidden lg:block mt-8">
                    <span className="font-mono text-[11px] text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      {project.visualTheme.primaryBadge}
                    </span>
                  </div>
                </div>

                {/* Center: Title & Narrative */}
                <div className="lg:col-span-6 space-y-4">
                  <h3
                    className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground transition-all duration-300 ${
                      isHovered ? 'translate-x-1 text-accent' : ''
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-3 py-1 rounded-full border border-border bg-card/60 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border bg-card/60 text-muted-foreground">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Key Stats & Action Arrow */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between items-end lg:items-end w-full space-y-4">
                  {/* Primary Performance Metric */}
                  <div className="text-left lg:text-right">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
                      {project.stats[0]?.label || 'Metric'}
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.stats[0]?.value}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-foreground group-hover:text-accent font-mono text-xs uppercase tracking-wider transition-colors pt-2">
                    <span className="hidden sm:inline">View Case Study</span>
                    <div className="p-3 rounded-full border border-border group-hover:border-accent/60 group-hover:bg-accent group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleCloseProject}
      />
    </section>
  );
};
