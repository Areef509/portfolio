import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.35,
  as = 'button',
  href,
  target,
  rel,
  download,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setButtonHover, resetCursor } = useCursor();
  const { playHoverSound, playClickSound } = useSound();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * strength;
    const distanceY = (clientY - centerY) * strength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseEnter = () => {
    setButtonHover();
    playHoverSound();
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    resetCursor();
  };

  const handleClick = () => {
    playClickSound();
    if (onClick) onClick();
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.2 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
};
