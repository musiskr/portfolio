import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

interface KaleidoscopeProps {
  density?: 'low' | 'high';
  interactive?: boolean;
  opacity?: string;
  variant?: 'default' | 'heart';
  intensity?: 'normal' | 'high';
}

export default function Kaleidoscope({ 
  density = 'high', 
  interactive = false, 
  opacity = 'opacity-40',
  variant = 'default',
  intensity = 'normal'
}: KaleidoscopeProps) {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    setMounted(true);
    if (interactive) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        mouseX.set(x * 45);
        mouseY.set(y * 45);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [interactive, mouseX, mouseY]);

  // Base rotations for the kaleidoscope effect
  const rotateBase = useTransform(scrollY, [0, 5000], [0, 360]);
  const rotateReverse = useTransform(scrollY, [0, 5000], [0, -360]);
  
  // Scale effect for breathing
  const scale = useTransform(scrollY, [0, 1000, 2000, 3000, 4000, 5000], [1, 1.2, 0.9, 1.1, 0.95, 1.15]);

  if (!mounted) return null;

  // The core pattern (a heart-like gothic curve)
  const patternPath = "M500,200 C600,100 750,150 800,300 C850,450 700,600 500,800 C300,600 150,450 200,300 C250,150 400,100 500,200 Z";
  const innerPatternPath = "M500,300 C550,250 650,280 680,380 C710,480 600,550 500,680 C400,550 290,480 320,380 C350,280 450,250 500,300 Z";

  const strokeClass = intensity === 'high' ? 'stroke-accent/80' : 'stroke-accent/30';
  const fillClass = intensity === 'high' ? 'fill-accent/20' : 'fill-accent/5';
  const blendClass = intensity === 'high' ? 'mix-blend-normal' : 'mix-blend-screen';

  const numLayers = variant === 'heart' ? 1 : (density === 'low' ? 4 : 8);
  const angleStep = 360 / numLayers;

  // Create rotated instances for the kaleidoscope
  const layers = Array.from({ length: numLayers }).map((_, i) => {
    const angle = i * angleStep;
    return (
      <g key={i} transform={`rotate(${angle} 500 500)`}>
        <path 
          d={patternPath} 
          className={`${strokeClass} fill-transparent`} 
          strokeWidth={intensity === 'high' ? "4" : (density === 'low' ? "1" : "2")}
        />
        <path 
          d={innerPatternPath} 
          className={`${strokeClass} ${fillClass}`} 
          strokeWidth={intensity === 'high' ? "2" : "1"}
        />
        {/* Additional filigree details */}
        {variant !== 'heart' && (
          <>
            <circle cx="500" cy="150" r="10" className="fill-accent/40" />
            <path d="M490,100 L510,100 L500,80 Z" className="fill-accent/30" />
          </>
        )}
      </g>
    );
  });

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center ${blendClass} ${opacity}`}>
      <motion.div 
        style={{ 
          scale,
          rotateX: interactive ? smoothMouseY : 0,
          rotateY: interactive ? smoothMouseX : 0,
        }}
        className="relative w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] max-w-[1200px] max-h-[1200px] flex items-center justify-center"
      >
        {/* Layer 1: Clockwise */}
        <motion.svg 
          style={{ rotate: rotateBase }}
          viewBox="0 0 1000 1000" 
          className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(139,0,0,0.3)]"
        >
          {layers}
        </motion.svg>

        {/* Layer 2: Counter-Clockwise (slightly smaller for depth) */}
        <motion.svg 
          style={{ rotate: rotateReverse }}
          viewBox="0 0 1000 1000" 
          className="absolute inset-0 w-[80%] h-[80%] m-auto drop-shadow-[0_0_20px_rgba(139,0,0,0.5)]"
        >
          {layers}
        </motion.svg>
        
        {/* Center glowing core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-slow" />
      </motion.div>
    </div>
  );
}
