import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-8 right-8 z-[10001] flex items-center gap-3 px-5 py-3.5 rounded-full border border-border bg-card/90 backdrop-blur-xl text-foreground shadow-2xl"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          ) : (
            <Info className="w-4 h-4 text-accent flex-shrink-0" />
          )}
          <span className="font-mono text-xs tracking-wide">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-muted-foreground hover:text-foreground text-xs font-mono"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
