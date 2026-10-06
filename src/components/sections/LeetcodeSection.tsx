import React from 'react';
import { motion } from 'framer-motion';
import { leetcodeStats } from '../../data/stats';
import { SectionHeading } from '../ui/SectionHeading';

export const LeetcodeSection: React.FC = () => {
  return (
    <section id="algorithms" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/70">
      <SectionHeading
        number="06"
        tag="PROBLEM SOLVING & DSA"
        title="ALGORITHMIC RIGOR & OPTIMIZATION."
        subtitle="Consistent problem-solving across data structures, graph traversals, and dynamic programming paradigms."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Monumental Stat Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-border bg-card/50 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span>LEETCODE PROFILE</span>
              <span className="text-emerald-500 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Solver
              </span>
            </div>

            <div className="my-6">
              <span className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground tracking-tighter block">
                {leetcodeStats.targetSolved}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-accent mt-2 block">
                ALGORITHMIC CHALLENGES SOLVED
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-8">
              Focusing on optimal time/space complexity (Big-O analysis), memory efficiency, and deterministic edge-case handling in Python and C++.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
            {leetcodeStats.highlights.map((h, i) => (
              <div key={i} className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-muted-foreground block">{h.label}</span>
                <span className="font-display font-semibold text-sm text-foreground">{h.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Topic Breakdown Bars */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-border bg-card/30 backdrop-blur-md space-y-6"
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
            <span>DOMAIN BREAKDOWN & VOLUME</span>
            <span>SOLVED COUNT</span>
          </div>

          <div className="space-y-5">
            {leetcodeStats.categories.map((cat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                  <span className="text-foreground">{cat.name}</span>
                  <span className="text-accent font-semibold">{cat.solved} solved</span>
                </div>

                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.percentage * 2.5}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className={`h-full rounded-full ${cat.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border/70 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
            <span>CORE COMPETENCIES: Arrays, Trees, Graphs, DP, Binary Search</span>
            <span className="text-accent">Python / C++</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
