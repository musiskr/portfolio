import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { MessageCircle, Mail, Volume2, VolumeX, ArrowRight } from 'lucide-react';

const menuItems = [
  { num: '01', label: 'ABOUT', href: '#about' },
  { num: '02', label: 'WORK', href: '#work' },
  { num: '03', label: 'WRITING', href: '#writing' },
  { num: '04', label: 'ARCHIVE', href: '#archive' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCapsuleOpen, setIsCapsuleOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const capsuleRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 1]);
  const headerY = useTransform(scrollY, [0, 300], [0, 0]);

  useEffect(() => { setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches); }, []);

  useEffect(() => {
    if (!isTouchDevice || !isCapsuleOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (capsuleRef.current && !capsuleRef.current.contains(e.target as Node)) setIsCapsuleOpen(false);
    };
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside);
    return () => { document.removeEventListener('touchstart', handleClickOutside); document.removeEventListener('mousedown', handleClickOutside); };
  }, [isTouchDevice, isCapsuleOpen]);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=dark-ambient-128598.mp3');
    audio.loop = true; audio.volume = 0.5; audioRef.current = audio;
    const playAudio = () => { if (audioRef.current?.paused) audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {}); };
    playAudio();
    const handleInteraction = () => { playAudio(); document.removeEventListener('click', handleInteraction); document.removeEventListener('touchstart', handleInteraction); document.removeEventListener('scroll', handleInteraction); };
    document.addEventListener('click', handleInteraction); document.addEventListener('touchstart', handleInteraction); document.addEventListener('scroll', handleInteraction);
    return () => { if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; } document.removeEventListener('click', handleInteraction); document.removeEventListener('touchstart', handleInteraction); document.removeEventListener('scroll', handleInteraction); };
  }, []);

  const toggleAudio = () => { if (isPlaying) audioRef.current?.pause(); else audioRef.current?.play().catch(() => {}); setIsPlaying(!isPlaying); };
  const scrollToSection = (href: string) => { setIsMenuOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <motion.header style={{ opacity: isMenuOpen ? 1 : headerOpacity, y: isMenuOpen ? 0 : headerY }} className="fixed top-0 left-0 w-full z-[100010] pointer-events-none p-3 md:p-12 flex justify-between items-start">
        <div className="pointer-events-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative z-[100010] w-12 h-12 md:w-14 md:h-14 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500 backdrop-blur-md bg-bg/60 hover-trigger shadow-[0_0_15px_rgba(139,0,0,0.2)]">
            <div className="flex flex-col gap-[4px] md:gap-[5px] items-center justify-center w-5 h-5 md:w-6 md:h-6">
              <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0, width: '100%' }} className="h-[2px] bg-current block" />
              <motion.span animate={{ opacity: isMenuOpen ? 0 : 1, width: isMenuOpen ? '100%' : '70%' }} className="h-[2px] bg-current block" />
              <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0, width: '100%' }} className="h-[2px] bg-current block" />
            </div>
          </button>
        </div>

        <div className="pointer-events-auto flex justify-end">
          <div ref={capsuleRef} onClick={() => { if (isTouchDevice) setIsCapsuleOpen(!isCapsuleOpen); }}
            className={`group flex items-center border border-accent/20 rounded-full h-12 md:h-14 backdrop-blur-md bg-bg/60 gothic-text text-[10px] md:text-xs tracking-widest shadow-[0_5px_15px_rgba(0,0,0,0.3)] text-ink overflow-hidden transition-all duration-500 ${isCapsuleOpen ? 'w-[220px] md:w-[380px] border-accent/50' : 'w-12 md:w-14 hover:w-[380px] hover:border-accent/50'}`}>
            <div className="w-12 md:w-14 h-12 md:h-14 shrink-0 flex items-center justify-center cursor-pointer group-hover:bg-accent/10 transition-colors">
              {isPlaying ? <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-accent animate-pulse" /> : <VolumeX className="w-4 h-4 md:w-5 md:h-5 opacity-70" />}
            </div>
            <div className={`flex items-center gap-3 md:gap-6 px-2 md:px-4 transition-opacity duration-500 whitespace-nowrap ${isCapsuleOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              <a href="weixin://dl/chat?ejzz233" className="flex items-center gap-1.5 hover:text-accent transition-colors"><MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" /><span className="hidden md:inline">WeChat</span></a>
              <div className="w-px h-3 bg-accent/30"></div>
              <a href="mailto:musiskr@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="w-3.5 h-3.5 md:w-4 md:h-4" /><span className="hidden md:inline">Email</span></a>
              <div className="w-px h-3 bg-accent/30"></div>
              <button onClick={(e) => { e.stopPropagation(); toggleAudio(); }} className="flex items-center gap-1.5 hover:text-accent transition-colors">
                {isPlaying ? <Volume2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" /> : <VolumeX className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                <span className="hidden md:inline">{isPlaying ? 'On' : 'Off'}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div key="fullscreen-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ zIndex: 100005 }} className="fixed inset-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(10,5,5,0.98)] backdrop-blur-xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 organic-shape blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />
            <nav className="w-full max-w-4xl px-4 md:px-6 relative z-10 mt-12">
              <div className="flex flex-col border-t border-accent/20">
                {menuItems.map((item, i) => (
                  <motion.a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    className="group flex items-center justify-between py-5 md:py-10 border-b border-accent/10 hover:bg-accent/5 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-[40px_10px_40px_10px] relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-center gap-4 md:gap-16 relative z-10">
                      <span className="gothic-text text-xs opacity-50 italic text-accent">({item.num})</span>
                      <span className="font-serif italic text-2xl md:text-6xl text-ink group-hover:text-accent transition-all duration-500">{item.label}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 text-accent relative z-10" />
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
