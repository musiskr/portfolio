import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const aestheticTags = [
  "Gothic",
  "Baroque",
  "Cyber",
  "Dossier",
  "Art Deco",
  "Art Nouveau",
  "Egyptian",
  "American Vintage",
  "Y2K",
  "Sci-Fi Retro",
  "Lolita",
  "ASCII Art"
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 border-t border-accent/20 bg-bg relative filigree-border overflow-hidden">
      {/* Background decorative text & shapes */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/4 -right-20 text-[20vw] gothic-text text-accent/[0.03] whitespace-nowrap pointer-events-none z-0"
      >
        Narrative
      </motion.div>
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-center gap-4 mb-24 border-b border-accent/20 pb-8">
          <span className="gothic-text text-sm tracking-widest opacity-60 text-accent">01 // DOSSIER: SUBJECT PROFILE</span>
          <h2 className="gothic-text text-5xl md:text-7xl tracking-widest ml-auto">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div style={{ y: y1 }} className="lg:col-span-6 space-y-12 relative">
            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-accent/10 to-transparent hidden lg:block organic-line" />
            
            <motion.div {...fadeUp} transition={{...fadeUp.transition, delay: 0.1}} className="space-y-8">
              <h3 className="font-serif text-5xl md:text-6xl italic mb-8 text-ink/90 drop-shadow-md">
                <motion.span
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="inline-block origin-bottom"
                >
                  你好 —
                </motion.span>
              </h3>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl font-light leading-relaxed text-ink/80"
              >
                我是一名<strong className="font-serif italic font-medium text-accent text-2xl md:text-3xl mx-2 relative inline-block group">
                  <span className="relative z-10">叙事架构师与交互设计师</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-accent/20 -z-10 group-hover:h-full transition-all duration-500 rounded-sm"></span>
                </strong>。在过去的时间里，我始终致力于探索人类情感与数字世界之间的边界。环境艺术设计的背景赋予了我对空间、光影与信息层级的敏锐直觉，而 AI 技术的爆发则为我提供了重塑这些维度的工具。
              </motion.p>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl font-light leading-relaxed text-ink/80"
            >
              深度使用 AI 工具 2.5 年，独立创作跨题材 IP 角色卡与世界书 20+ 套。我不只是在设计界面，我是在构建一个又一个能够让人沉浸、共鸣甚至寄托情感的「世界」。从赛博朋克的霓虹废墟到古典庄严的巴洛克殿堂，每一个像素、每一段文本、每一次交互，都是叙事的一部分。
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="pt-8"
            >
              <strong className="font-serif italic text-3xl md:text-4xl text-ink block border-l-2 border-accent pl-8 py-4 bg-gradient-to-r from-accent/10 to-transparent rounded-r-[40px]">
                我始终在做同一件事：<br/>构建让人沉浸其中的世界。
              </strong>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-24 mt-12 lg:mt-32">
            {/* Info Table */}
            <motion.div {...fadeUp} transition={{...fadeUp.transition, delay: 0.4}} className="font-sans text-sm md:text-base border border-accent/20 bg-surface/80 p-8 md:p-12 relative backdrop-blur-md rounded-[40px_10px_40px_10px] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 p-6 opacity-20 text-accent">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-accent/10 py-6 gap-4 hover-trigger group">
                <div className="gothic-text opacity-60 group-hover:text-accent transition-colors">Education</div>
                <div className="md:col-span-3 text-ink/90 font-serif italic text-lg">河北地质大学 · 环境艺术设计 · 本科 · 2021—2025</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-accent/10 py-6 gap-4 hover-trigger group">
                <div className="gothic-text opacity-60 group-hover:text-accent transition-colors">AI Tools</div>
                <div className="md:col-span-3 text-ink/90 font-serif italic text-lg">Claude · ChatGPT · Gemini · Grok · DeepSeek</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-accent/10 py-6 gap-4 hover-trigger group">
                <div className="gothic-text opacity-60 group-hover:text-accent transition-colors">AI Image & Music</div>
                <div className="md:col-span-3 text-ink/90 font-serif italic text-lg">NovelAI · Midjourney · Suno · Udio</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-accent/10 py-6 gap-4 hover-trigger group">
                <div className="gothic-text opacity-60 group-hover:text-accent transition-colors">Design & Dev</div>
                <div className="md:col-span-3 text-ink/90 font-serif italic text-lg">Photoshop · Illustrator · Figma · HTML/CSS/JS · React/TypeScript · SketchUp</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 pt-6 gap-4 hover-trigger group">
                <div className="gothic-text opacity-60 group-hover:text-accent transition-colors">Interests</div>
                <div className="md:col-span-3 text-ink/90 font-serif italic text-lg">音乐剧 · Lolita · 哲学 · 手作 · AI 创作 · 探索未知</div>
              </div>
            </motion.div>

            {/* Aesthetic Grid */}
            <motion.div {...fadeUp} transition={{...fadeUp.transition, delay: 0.5}}>
              <h3 className="font-serif italic text-3xl md:text-4xl mb-8 flex items-center gap-6 text-accent drop-shadow-md">
                <span>Aesthetic Palette</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/40 to-transparent organic-line" />
              </h3>
              <div className="flex flex-wrap gap-4">
                {aestheticTags.map((tag, i) => (
                  <div 
                    key={i} 
                    className="border border-accent/30 px-6 py-3 hover-trigger group bg-surface/50 backdrop-blur-sm hover:bg-accent/20 transition-all duration-500 relative overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <span className="gothic-text text-xs tracking-widest opacity-80 group-hover:opacity-100 group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
