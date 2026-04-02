import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Kaleidoscope from './Kaleidoscope';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const nameScale = useTransform(scrollYProgress, [0, 0.4], [1.1, 0.4]);
  const nameY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-50%"]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const avatarOpacity = useTransform(scrollYProgress, [0.03, 0.1], [0, 1]);
  const avatarY = useTransform(scrollYProgress, [0.03, 0.1], [40, 0]);

  const bioOpacity = useTransform(scrollYProgress, [0.08, 0.15], [0, 1]);
  const bioY = useTransform(scrollYProgress, [0.08, 0.15], [40, 0]);

  const sectionOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-transparent">
      <motion.div 
        style={{ opacity: sectionOpacity }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <Kaleidoscope />
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/5 organic-shape blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-white/5 organic-shape blur-3xl animate-float" style={{ animationDelay: '-5s' }} />
        </div>

        {/* Massive Name */}
        <motion.div 
          style={{ scale: nameScale, y: nameY, opacity: nameOpacity }}
          className="relative z-10 flex flex-col items-center justify-center w-full transform-origin-center"
        >
          <h1 className="gothic-text leading-[0.85] text-white drop-shadow-[0_0_30px_rgba(139,0,0,0.5)] text-center flex flex-col items-center">
            <motion.span 
              initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[22vw] md:text-[18vw] tracking-widest ml-[0.15em] inline-block"
            >
              KEEN
            </motion.span>
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[5vw] md:text-[4vw] font-serif italic mt-4 md:mt-6 tracking-normal text-ink"
            >
              ZHOU JING YI
            </motion.span>
          </h1>
        </motion.div>

        {/* Avatar and Bio — smaller + stacked on mobile */}
        <div className="absolute bottom-6 md:bottom-24 left-4 right-4 md:left-12 md:right-auto z-20 max-w-2xl flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          <motion.div 
            style={{ opacity: avatarOpacity, y: avatarY }}
            className="w-20 h-20 md:w-40 md:h-40 shrink-0 overflow-hidden border border-accent/30 bg-surface p-1 organic-shape shadow-[0_0_20px_rgba(139,0,0,0.3)]"
          >
            <img 
              src="/keen.jpg" 
              alt="Keen Zhou" 
              className="w-full h-full object-cover organic-shape transition-all duration-700 hover:scale-110"
            />
          </motion.div>
          
          <motion.div 
            style={{ opacity: bioOpacity, y: bioY }}
            className="flex flex-col justify-center bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-[40px_10px_40px_10px] border border-white/5"
          >
            <p className="font-serif text-lg md:text-3xl italic leading-relaxed text-ink drop-shadow-md text-center md:text-left">
              Hello! I'm a Narrative Architect & Interaction Designer.
            </p>
            <p className="font-serif text-sm md:text-xl italic text-ink/70 mt-2 md:mt-4 leading-relaxed text-center md:text-left">
              Exploring the boundaries between human emotion and the digital world.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator — hidden on mobile to avoid overlap */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-4 hidden md:flex"
        >
          <span className="gothic-text text-[10px] opacity-60 tracking-[0.3em]">DESCEND</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent/80 to-transparent organic-line" />
        </motion.div>
      </motion.div>
    </section>
  );
}
