import React from 'react';
import { motion } from 'framer-motion';
import { githubRepositories, githubActivity } from '../../data/stats';
import { SectionHeading } from '../ui/SectionHeading';
import { Github, Star, GitFork, ArrowUpRight, GitCommit, Code2 } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

export const GithubSection: React.FC = () => {
  const { setButtonHover, resetCursor } = useCursor();
  const { playHoverSound } = useSound();

  return (
    <section id="github" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/70">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <SectionHeading
          number="07"
          tag="OPEN SOURCE & REPOSITORIES"
          title="CODE CRAFT & REPOSITORIES."
          subtitle="Open-source architectures, deep learning prototypes, and full-stack implementations hosted on GitHub."
          className="mb-0"
        />

        <a
          href={githubActivity.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => {
            setButtonHover();
            playHoverSound();
          }}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/60 font-mono text-xs text-foreground hover:border-accent hover:text-accent transition-colors flex-shrink-0"
        >
          <Github className="w-4 h-4" />
          <span>github.com/{githubActivity.username}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Repositories 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {githubRepositories.map((repo, idx) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onMouseEnter={() => {
              setButtonHover();
              playHoverSound();
            }}
            onMouseLeave={resetCursor}
            className="p-6 md:p-8 rounded-3xl border border-border bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:bg-card/70 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-accent font-semibold flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>{repo.language}</span>
                </span>
                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2 group-hover:text-accent group-hover:translate-x-1 transition-all">
                {repo.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-sans">
                {repo.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/60">
              <div className="flex flex-wrap gap-1.5">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* GitHub Language Breakdown Bar */}
      <div className="mt-8 p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <GitCommit className="w-4 h-4 text-accent" />
          <span>PRIMARY LANGUAGES:</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {githubActivity.primaryLanguages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
              <span className="text-foreground">{lang.name}</span>
              <span className="text-muted-foreground">({lang.percent}%)</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
