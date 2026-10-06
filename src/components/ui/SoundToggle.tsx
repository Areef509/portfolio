import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { useCursor } from '../../context/CursorContext';
import { motion } from 'framer-motion';

export const SoundToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { soundEnabled, toggleSound, playHoverSound } = useSound();
  const { setButtonHover, resetCursor } = useCursor();

  return (
    <button
      onClick={toggleSound}
      onMouseEnter={() => {
        setButtonHover();
        playHoverSound();
      }}
      onMouseLeave={resetCursor}
      aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
      title={soundEnabled ? 'Mute micro-haptics' : 'Enable micro-haptics'}
      className={`relative p-2 rounded-full border border-border bg-card/60 backdrop-blur-md text-foreground hover:text-accent hover:border-accent/40 transition-all duration-300 flex items-center justify-center ${className}`}
    >
      <motion.div
        key={soundEnabled ? 'on' : 'off'}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {soundEnabled ? (
          <Volume2 className="w-4 h-4 text-accent" />
        ) : (
          <VolumeX className="w-4 h-4 text-muted-foreground" />
        )}
      </motion.div>
    </button>
  );
};
