import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

export const CustomCursor: React.FC = () => {
  const { cursorVariant, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor positioning
  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Trailing dot with slightly looser spring
  const trailingConfig = { damping: 20, stiffness: 250, mass: 0.8 };
  const trailX = useSpring(mouseX, trailingConfig);
  const trailY = useSpring(mouseY, trailingConfig);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || cursorVariant === 'hidden') {
    return null;
  }

  // Variant size and styling
  const isProject = cursorVariant === 'project';
  const isButton = cursorVariant === 'button';
  const isLink = cursorVariant === 'link';
  const isHover = cursorVariant === 'hover';

  return (
    <>
      {/* Outer reactive follower / container */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono text-[10px] uppercase font-semibold tracking-wider"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isProject ? 140 : isButton ? 48 : isLink || isHover ? 38 : 12,
            height: isProject ? 40 : isButton ? 48 : isLink || isHover ? 38 : 12,
            backgroundColor: isProject
              ? 'rgba(0, 102, 255, 0.95)'
              : isButton
              ? 'rgba(0, 102, 255, 0.2)'
              : isLink || isHover
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(0, 102, 255, 0.9)',
            borderColor: isProject
              ? 'rgba(255, 255, 255, 0.4)'
              : isButton || isLink
              ? 'rgba(0, 102, 255, 0.6)'
              : 'transparent',
            borderRadius: isProject ? 20 : 9999,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="flex items-center justify-center text-white border shadow-lg backdrop-blur-sm overflow-hidden"
        >
          {isProject && cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="px-3 whitespace-nowrap tracking-widest text-[9px] font-bold text-white drop-shadow-sm"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Center pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-1.5 h-1.5 rounded-full bg-white dark:bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible && !isProject ? 1 : 0,
        }}
      />
    </>
  );
};
