import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import Kaleidoscope from './Kaleidoscope';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const patternOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.8]);
  const textScale = useTransform(scrollYProgress, [0.3, 0.7], [0.5, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.7], [100, 0]);
  const bottomOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const bottomY = useTransform(scrollYProgress, [0.8, 1], [50, 0]);

  return (
    <footer ref={containerRef} className="relative h-[150vh] bg-bg filigree-border">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end pb-8 md:pb-12 px-4 md:px-12 lg:px-24">
        
        <motion.div 
          style={{ opacity: patternOpacity }} 
          className="absolute inset-0 pointer-events-none z-0 mix-blend-screen text-accent flex items-center justify-center"
        >
          <Kaleidoscope density="high" interactive={false} opacity="opacity-[0.65]" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.div style={{ scale: textScale, opacity: textOpacity, y: textY }} className="text-center px-4">
            <h2 className="gothic-text text-[12vw] md:text-[6vw] leading-[0.8] tracking-tighter text-ink drop-shadow-lg">
              Let's build
            </h2>
            <h2 className="gothic-text text-[12vw] md:text-[6vw] leading-[0.8] tracking-tighter text-accent italic drop-shadow-lg">
              worlds together.
            </h2>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: bottomOpacity, y: bottomY }} 
          className="w-full max-w-7xl mx-auto relative z-20 flex flex-col items-center pointer-events-auto"
        >
          {/* Email button — tap-friendly on mobile */}
          <div className="flex justify-center items-center h-16 md:h-24 mb-8 md:mb-16">
            <a 
              href="mailto:musiskr@gmail.com" 
              className="group relative flex items-center h-12 md:h-16 bg-surface/50 border border-accent/30 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-[280px] md:w-16 md:hover:w-[320px] hover:bg-accent/10 hover-trigger shadow-[0_0_15px_rgba(139,0,0,0.2)] hover:shadow-[0_0_25px_rgba(139,0,0,0.6)] rounded-full md:rounded-none"
              style={{ borderRadius: window.innerWidth >= 768 ? '60% 40% 30% 70% / 60% 30% 70% 40%' : '9999px' }}
            >
              <div className="absolute left-0 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center shrink-0">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-accent flex items-center justify-center group-hover:rotate-45 transition-transform duration-700 shadow-[0_0_10px_rgba(139,0,0,0.5)]">
                  <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </div>
              </div>
              <span className="pl-12 md:pl-16 pr-6 md:pr-8 gothic-text text-xs md:text-base text-ink tracking-widest whitespace-nowrap md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                musiskr@gmail.com
              </span>
            </a>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 gothic-text text-[9px] md:text-xs tracking-widest opacity-60 border-t border-accent/20 pt-6 md:pt-8 text-ink">
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors hover-trigger">Pinterest</a>
              <a href="/周婧仪_简历.pdf" target="_blank" className="hover:text-accent transition-colors hover-trigger">Resume ↓</a>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-6 text-center md:text-right">
              <span>Last Updated: 2026.03</span>
              <span>© 2026 Keen Zhou. All rights reserved.</span>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
