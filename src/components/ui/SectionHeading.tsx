import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'right' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-20 ${className}`}>
      {/* Editorial top indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4"
      >
        <span className="text-accent font-semibold">{number}</span>
        <span className="w-6 h-[1px] bg-border inline-block" />
        <span>{tag}</span>
      </motion.div>

      {/* Main monumental title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] ${
          align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
        }`}
      >
        {title}
      </motion.h2>

      {/* Optional subtitle/descriptor */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
