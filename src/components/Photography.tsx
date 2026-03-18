import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

const aestheticImages = [
  "/美学/08830039d20acae4174f4c84187c257.jpg",
  "/美学/1eb25a230bfa8b2703378befd1052c8.jpg",
  "/美学/2de564cc8ceb0a7748d7640533d049a.jpg",
  "/美学/2e1ecf8f1c64f927f2affb2c56f7d67.jpg",
  "/美学/3429466852f030b805a615f02d6bc04.jpg",
  "/美学/35ad9c607982987c85cd2771cb08b9c.jpg",
  "/美学/3f6aafd89641722cb77883d705d53da.jpg",
  "/美学/4015230893c3fc5052ba027b59fb631.jpg"
];

const photographyImages = [
  "/摄影/可.jpg",
  "/摄影/可 (2).jpg",
  "/摄影/可3.jpg",
  "/摄影/可4.jpg",
  "/摄影/可5.jpg",
  "/摄影/可7.jpg"
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

interface DriftingImageProps {
  src: string;
  index: number;
  type: 'aesthetic' | 'photo';
}

function DriftingImage({ src, index, type }: DriftingImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? -60 : 60)]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? -3 : 3)]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springRotate = useSpring(rotate, { stiffness: 100, damping: 30 });

  return (
    <motion.div 
      ref={ref}
      style={{ y: springY, rotate: springRotate }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className={`relative overflow-hidden group border border-accent/20 bg-surface/50 ${type === 'aesthetic' ? 'aspect-[3/4]' : 'aspect-video'} hover-trigger rounded-[20px_5px_20px_5px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(139,0,0,0.3)] transition-shadow duration-700`}
    >
      <div className="absolute inset-0 flex items-center justify-center gothic-text text-[9px] md:text-[10px] opacity-30 text-center p-4 text-accent">
        [LOADING ARCHIVE]
      </div>
      <img 
        src={encodeURI(src)} 
        alt={`${type} ${index + 1}`} 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 z-10 grayscale hover:grayscale-0 mix-blend-luminosity hover:mix-blend-normal"
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={(e) => {
          console.error("Failed to load image:", src);
        }}
      />
      <div className="absolute inset-0 border border-accent/10 pointer-events-none z-20 rounded-[20px_5px_20px_5px]" />
      <div className="absolute top-2 left-2 md:top-3 md:left-3 gothic-text text-[8px] md:text-[9px] bg-bg/90 px-1.5 md:px-2 py-0.5 md:py-1 z-20 uppercase tracking-widest text-accent border border-accent/20 rounded-tl-[10px] rounded-br-[10px]">
        {type === 'aesthetic' ? `REF-${index + 1}` : `SHOT-${index + 1}`}
      </div>
    </motion.div>
  );
}

export default function Photography() {
  return (
    <section id="photography" className="py-16 md:py-24 px-4 md:px-12 lg:px-24 border-t border-accent/20 bg-bg relative overflow-hidden filigree-border">
      <div className="max-w-7xl mx-auto relative z-10 space-y-24 md:space-y-48">
        
        {/* Aesthetic References Section */}
        <div className="flex flex-col items-center">
          <motion.div {...fadeUp} className="flex flex-col items-center text-center mb-16 md:mb-32 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none -z-10" />
            <span className="gothic-text text-xs md:text-sm tracking-widest opacity-60 block mb-4 md:mb-6 text-accent">07 // DOSSIER: AESTHETICS</span>
            <h2 className="gothic-text text-[10vw] md:text-[8vw] leading-[0.8] tracking-tighter mb-4 md:mb-8 text-ink drop-shadow-lg">
              Aesthetic<br/>Reference
            </h2>
            <p className="font-serif text-base md:text-2xl italic opacity-80 max-w-xl text-ink">
              "Visual anchors for world-building."
            </p>
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mt-6 md:mt-8 organic-line"></div>
          </motion.div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-12 perspective-1000">
            {aestheticImages.map((img, idx) => (
              <DriftingImage key={idx} src={img} index={idx} type="aesthetic" />
            ))}
          </div>
        </div>

        {/* My Photography Section */}
        <div className="flex flex-col items-center mt-24 md:mt-48">
          <motion.div {...fadeUp} className="flex flex-col items-center text-center mb-16 md:mb-32 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none -z-10" style={{ animationDelay: '-2s' }} />
            <span className="gothic-text text-xs md:text-sm tracking-widest opacity-60 block mb-4 md:mb-6 text-accent">08 // DOSSIER: PHOTOGRAPHY</span>
            <h2 className="gothic-text text-[10vw] md:text-[8vw] leading-[0.8] tracking-tighter mb-4 md:mb-8 text-ink drop-shadow-lg">
              My<br/>Photography
            </h2>
            <p className="font-serif text-base md:text-2xl italic opacity-80 max-w-xl text-ink">
              "Capturing light and shadow."
            </p>
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mt-6 md:mt-8 organic-line"></div>
          </motion.div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 perspective-1000">
            {photographyImages.map((img, idx) => (
              <DriftingImage key={idx} src={img} index={idx} type="photo" />
            ))}
          </div>
        </div>

      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/5 organic-shape blur-[150px] -z-0 pointer-events-none animate-pulse-slow" />
    </section>
  );
}
