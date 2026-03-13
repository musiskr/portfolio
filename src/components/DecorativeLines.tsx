import { motion, useScroll, useTransform } from 'motion/react';

export default function DecorativeLines() {
  const { scrollY } = useScroll();
  const rotate1 = useTransform(scrollY, [0, 5000], [0, 90]);
  const rotate2 = useTransform(scrollY, [0, 5000], [0, -90]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {/* Gothic Organic Flourish 1 */}
      <motion.svg 
        style={{ rotate: rotate1 }}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        viewBox="0 0 1000 1000" 
        className="absolute -top-40 -left-40 w-[800px] h-[800px] text-accent fill-none stroke-current stroke-[0.5] filter drop-shadow-[0_0_10px_rgba(139,0,0,0.5)]"
      >
        {/* Intricate Gothic Curves */}
        <path d="M500,100 C600,100 650,200 700,300 C750,400 850,450 900,500 C850,550 750,600 700,700 C650,800 600,900 500,900 C400,900 350,800 300,700 C250,600 150,550 100,500 C150,450 250,400 300,300 C350,200 400,100 500,100 Z" />
        <path d="M500,200 C550,200 600,250 650,350 C700,450 750,480 800,500 C750,520 700,550 650,650 C600,750 550,800 500,800 C450,800 400,750 350,650 C300,550 250,520 200,500 C250,480 300,450 350,350 C400,250 450,200 500,200 Z" strokeWidth="0.2" />
        <path d="M500,300 C520,300 550,350 600,450 C620,480 650,490 700,500 C650,510 620,520 600,550 C550,650 520,700 500,700 C480,700 450,650 400,550 C380,520 350,510 300,500 C350,490 380,480 400,450 C450,350 480,300 500,300 Z" strokeWidth="0.1" />
      </motion.svg>

      {/* Gothic Organic Flourish 2 */}
      <motion.svg 
        style={{ rotate: rotate2 }}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
        viewBox="0 0 1000 1000" 
        className="absolute -bottom-60 -right-60 w-[1000px] h-[1000px] text-accent/20 fill-none stroke-current stroke-[0.3]"
      >
        <path d="M500,100 C600,100 650,200 700,300 C750,400 850,450 900,500 C850,550 750,600 700,700 C650,800 600,900 500,900 C400,900 350,800 300,700 C250,600 150,550 100,500 C150,450 250,400 300,300 C350,200 400,100 500,100 Z" />
        <path d="M500,200 C550,200 600,250 650,350 C700,450 750,480 800,500 C750,520 700,550 650,650 C600,750 550,800 500,800 C450,800 400,750 350,650 C300,550 250,520 200,500 C250,480 300,450 350,350 C400,250 450,200 500,200 Z" />
      </motion.svg>

      {/* Gothic Filigree Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0 C70 30 90 30 120 0 M0 0 C30 30 50 30 60 0 M60 120 C70 90 90 90 120 120 M0 120 C30 90 50 90 60 120 M0 60 C30 50 30 30 0 0 M120 60 C90 50 90 30 120 0 M0 60 C30 70 30 90 0 120 M120 60 C90 70 90 90 120 120' fill='none' stroke='%238b0000' stroke-width='0.5'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
}
