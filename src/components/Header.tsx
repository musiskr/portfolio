import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Plus, X, MessageCircle, Mail, Volume2, VolumeX, ArrowRight } from 'lucide-react';

const menuItems = [
  { num: '01', label: 'ABOUT', href: '#about' },
  { num: '02', label: 'SERVICES', href: '#services' },
  { num: '03', label: 'WORK', href: '#work' },
  { num: '04', label: 'ARCHIVE', href: '#archive' },
  { num: '05', label: 'PERSPECTIVE', href: '#perspective' },
  { num: '06', label: 'PHOTOGRAPHY', href: '#photography' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 1]); // Always visible now
  const headerY = useTransform(scrollY, [0, 300], [0, 0]); // Always at top now

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Royalty-free dark ambient/gothic track
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=dark-ambient-128598.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Attempt autoplay
    const playAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Autoplay prevented:", e));
      }
    };

    playAudio();

    // Add interaction listeners to start audio if autoplay was blocked
    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('scroll', handleInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.error("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Header Elements */}
      <motion.header 
        style={{ 
          opacity: isMenuOpen ? 1 : headerOpacity, 
          y: isMenuOpen ? 0 : headerY 
        }}
        className="fixed top-0 left-0 w-full z-[100010] pointer-events-none p-6 md:p-12 flex justify-between items-start transition-opacity duration-300"
      >
        {/* Top Left: Menu Button */}
        <div className="pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[100010] w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500 backdrop-blur-md bg-bg/60 hover-trigger shadow-[0_0_15px_rgba(139,0,0,0.2)] hover:shadow-[0_0_25px_rgba(139,0,0,0.6)]"
          >
            <div className="flex flex-col gap-[5px] items-center justify-center w-6 h-6">
              <motion.span 
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0, 
                  y: isMenuOpen ? 7 : 0,
                  width: '100%'
                }} 
                className="h-[2px] bg-current block transition-all duration-300"
              />
              <motion.span 
                animate={{ 
                  opacity: isMenuOpen ? 0 : 1,
                  width: isMenuOpen ? '100%' : '70%'
                }} 
                className="h-[2px] bg-current block transition-all duration-300"
              />
              <motion.span 
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0, 
                  y: isMenuOpen ? -7 : 0,
                  width: '100%'
                }} 
                className="h-[2px] bg-current block transition-all duration-300"
              />
            </div>
          </button>
        </div>

        {/* Top Right: Contact & Audio Capsule (Collapsible) */}
        <div className="pointer-events-auto flex justify-end">
          <div className="group flex items-center border border-accent/20 rounded-full h-14 backdrop-blur-md bg-bg/60 gothic-text text-xs tracking-widest shadow-[0_5px_15px_rgba(0,0,0,0.3)] text-ink overflow-hidden transition-all duration-500 hover:shadow-[0_5px_25px_rgba(139,0,0,0.4)] hover:border-accent/50 w-14 hover:w-[380px]">
            
            {/* Default Icon (Always visible) */}
            <div className="w-14 h-14 shrink-0 flex items-center justify-center cursor-pointer group-hover:bg-accent/10 transition-colors">
              {isPlaying ? <Volume2 className="w-5 h-5 text-accent animate-pulse" /> : <VolumeX className="w-5 h-5 opacity-70" />}
            </div>

            {/* Expanded Content */}
            <div className="flex items-center gap-6 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
              <a href="weixin://dl/chat?ejzz233" className="flex items-center gap-2 hover:text-accent transition-colors hover-trigger" title="WeChat: ejzz233">
                <MessageCircle className="w-4 h-4" />
                <span>WeChat</span>
              </a>
              <div className="w-px h-4 bg-accent/30"></div>
              <a href="mailto:musiskr@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors hover-trigger" title="Email">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <div className="w-px h-4 bg-accent/30"></div>
              <button onClick={toggleAudio} className="flex items-center gap-2 hover:text-accent transition-colors hover-trigger" title="Toggle Audio">
                {isPlaying ? <Volume2 className="w-4 h-4 text-accent" /> : <VolumeX className="w-4 h-4" />}
                <span>{isPlaying ? 'Playing' : 'Audio'}</span>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            key="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ zIndex: 100005 }}
            className="fixed inset-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(10,5,5,0.98)] backdrop-blur-xl"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 organic-shape blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />

            <nav className="w-full max-w-4xl px-6 relative z-10 mt-12">
              <div className="flex flex-col border-t border-accent/20">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    className="group flex items-center justify-between py-8 md:py-10 border-b border-accent/10 hover:bg-accent/5 transition-all duration-500 hover-trigger px-8 -mx-8 rounded-[40px_10px_40px_10px] relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-[40px]" />
                    <div className="flex items-center gap-8 md:gap-16 relative z-10">
                      <span className="gothic-text text-sm opacity-50 italic text-accent">({item.num})</span>
                      <span className="font-serif italic text-4xl md:text-6xl text-ink group-hover:text-accent group-hover:translate-x-4 transition-all duration-500 drop-shadow-sm">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent relative z-10" />
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
