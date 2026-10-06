import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { MagneticButton } from '../ui/MagneticButton';
import { Mail, Copy, Check, ArrowUpRight, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSound } from '../../context/SoundContext';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { setButtonHover, resetCursor } = useCursor();
  const { playSuccessSound, playHoverSound } = useSound();

  const email = 'areef67890srec@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    playSuccessSound();
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    playSuccessSound();
    setFormSubmitted(true);
    onShowToast('Message prepared! Opening your mail client...');
    const mailtoUrl = `mailto:${email}?subject=Collaboration%20Inquiry%20from%20${encodeURIComponent(
      formData.name || 'Portfolio Visitor'
    )}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const opportunities = [
    'AI / ML Engineering Roles',
    'Generative AI & LLM Systems',
    'Applied Research Collaborations',
    'Full-Stack Software Engineering',
  ];

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/70">
      <SectionHeading
        number="08"
        tag="COLLABORATION & CONTACT"
        title="LET'S BUILD SOMETHING USEFUL."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Narrative & Quick Action */}
        <div className="lg:col-span-6 space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            I am actively open to <span className="text-foreground font-medium">full-time AI/ML opportunities</span>, <span className="text-foreground font-medium">GenAI system contracts</span>, and <span className="text-foreground font-medium">research initiatives</span> where deterministic engineering and high performance matter.
          </p>

          {/* Opportunities list */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block">
              AVAILABLE FOR:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {opportunities.map((opp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-border bg-card/40 flex items-center gap-2.5 font-mono text-xs text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>{opp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Email Callout Box */}
          <div className="p-6 md:p-8 rounded-3xl border border-accent/40 bg-card/60 backdrop-blur-md space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block">
              PRIMARY DIRECT INBOX
            </span>

            <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground break-all">
              {email}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton as="a" href={`mailto:${email}`}>
                <div className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-accent-hover shadow-lg shadow-accent/20 transition-all">
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </MagneticButton>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => {
                  setButtonHover();
                  playHoverSound();
                }}
                onMouseLeave={resetCursor}
                className="px-5 py-3 rounded-full border border-border bg-card text-foreground hover:border-accent font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            <a
              href="https://github.com/areef67890"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setButtonHover()}
              onMouseLeave={resetCursor}
              className="px-4 py-2 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-accent transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setButtonHover()}
              onMouseLeave={resetCursor}
              className="px-4 py-2 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-accent transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Direct Interactive Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 p-8 sm:p-10 rounded-3xl border border-border bg-card/50 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>DISPATCH A MESSAGE</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/40 text-foreground text-sm focus:outline-none focus:border-accent transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@company.com"
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/40 text-foreground text-sm focus:outline-none focus:border-accent transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Project Scope / Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your role, project, or collaboration concept..."
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted/40 text-foreground text-sm focus:outline-none focus:border-accent transition-colors font-sans resize-none"
              />
            </div>

            <MagneticButton as="button" className="w-full">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
              >
                {formSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Transmission →</span>
                  </>
                )}
              </button>
            </MagneticButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
