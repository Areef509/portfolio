import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SoundToggle } from '../ui/SoundToggle';

interface NavigationProps {
  activeSection?: string;
}

const navLinks = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'work', number: '02', label: 'Work' },
  { id: 'experience', number: '03', label: 'Experience' },
  { id: 'research', number: '04', label: 'Research' },
  { id: 'stack', number: '05', label: 'Tech Matrix' },
  { id: 'contact', number: '06', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const { setLinkHover, resetCursor } = useCursor();
  const { playHoverSound, playClickSound } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Update Chennai / IST Time
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    playClickSound();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            onMouseEnter={() => {
              setLinkHover();
              playHoverSound();
            }}
            onMouseLeave={resetCursor}
            className="group flex items-center gap-3 text-foreground"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse group-hover:scale-125 transition-transform" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm md:text-base tracking-tight group-hover:text-accent transition-colors">
                MOHAMMED AREEF A
              </span>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                AI / ML • GENAI • SYSTEMS
              </span>
            </div>
          </a>

          {/* Center Info: Live Time & Status (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-muted-foreground border-x border-border/60 px-6 py-1">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{currentTime || '14:30:00'} IST (CHENNAI)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-foreground/90">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={() => {
                  setLinkHover();
                  playHoverSound();
                }}
                onMouseLeave={resetCursor}
                className="group relative px-3 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <span className="text-[10px] text-accent/80 mr-1.5 font-mono">{link.number}</span>
                <span className="tracking-wide uppercase">{link.label}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            ))}

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
              <ThemeToggle />
              <SoundToggle />
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <SoundToggle />
            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle menu"
              className="p-2 rounded-lg border border-border bg-card/60 text-foreground"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Fullscreen Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-28 pb-10 px-8"
          >
            <div className="flex flex-col space-y-6">
              <div className="font-mono text-xs uppercase text-accent tracking-widest mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Editorial Navigation</span>
              </div>
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 + 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center justify-between py-3 border-b border-border/40 text-left group"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">{link.number}</span>
                    <span className="font-display text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.button>
              ))}
            </div>

            <div className="border-t border-border pt-6 font-mono text-xs text-muted-foreground space-y-2">
              <div className="flex items-center justify-between">
                <span>LOCAL TIME:</span>
                <span className="text-foreground">{currentTime} IST (CHENNAI)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>STATUS:</span>
                <span className="text-emerald-500 font-semibold">OPEN TO OPPORTUNITIES</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
