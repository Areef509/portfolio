import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { setButtonHover, resetCursor } = useCursor();
  const { playClickSound, playHoverSound } = useSound();

  const handleToggle = () => {
    playClickSound();
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={() => {
        setButtonHover();
        playHoverSound();
      }}
      onMouseLeave={resetCursor}
      aria-label="Toggle dark/light theme"
      className={`relative p-2 rounded-full border border-border bg-card/60 backdrop-blur-md text-foreground hover:text-accent hover:border-accent/40 transition-all duration-300 flex items-center justify-center ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 text-foreground hover:text-accent transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-foreground hover:text-accent transition-colors" />
        )}
      </motion.div>
    </button>
  );
};
