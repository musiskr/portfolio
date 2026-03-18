import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const archive = [
  { cat: "末世 / 生存 / 科幻", items: [
    { type: "System", title: "末世 · Post-Apoc", desc: "末世多角色养成 | 末日背景养成系统" },
    { type: "World Book", title: "Post-Apocalypse", desc: "末世废土 | 三战后世界观，生存与重建" },
    { type: "World Book", title: "Sci-Fi", desc: "星际兽人 | 外星种族与星际冒险" },
    { type: "World Book", title: "Cyberpunk", desc: "赛博朋克 | 霓虹与废墟" },
    { type: "Simulator", title: "Survival", desc: "恋爱荒岛求生 | 荒岛 × 恋爱，极限情境" }
  ]},
  { cat: "模拟器 / 社会向", items: [
    { type: "Simulator", title: "直播 · Live", desc: "直播模拟器 | 弹幕、打赏、仿社媒" },
    { type: "Simulator", title: "娱乐圈 · Idol", desc: "娱乐圈模拟器 | 造星、塌房、复出" },
    { type: "Simulator", title: "女团 · K-Pop", desc: "女团模拟器 | 练习生到出道" },
    { type: "Simulator", title: "七宗罪 · Sin", desc: "七宗罪模拟器 | 基于七原罪的沉浸系统" }
  ]},
  { cat: "古风 / 历史 / 文化", items: [
    { type: "World Book", title: "武侠 · Wuxia", desc: "古代武侠 | 刀光剑影中的情与义" },
    { type: "World Book", title: "Mythology", desc: "希腊神话 | 奥林匹斯的神与凡人纠葛" },
    { type: "Simulator", title: "京圈 · Elite", desc: "现代高干 | 云泥克制拉扯，高干世家" }
  ]},
  { cat: "女性向 / 系统 / 攻略", items: [
    { type: "System", title: "乙女 · Otome", desc: "乙女攻略系统 | 多角色可攻略，好感度系统" },
    { type: "System", title: "逆袭 · System", desc: "女配上位系统 | 快穿逆袭，命运改写" },
    { type: "Simulator", title: "⚽ Sports", desc: "快乐足球模拟器 | 角色卡+世界书完成，状态栏开发中" }
  ]},
  { cat: "设定体系 / 特殊类型", items: [
    { type: "World Book", title: "黑道 · Crime", desc: "非血缘关系 · 情感博弈 | 单角色，复杂关系线" },
    { type: "Solo Card", title: "Racing", desc: "赛车手 | 单男性角色，速度与肾上腺素" },
    { type: "World Book", title: "警匪 · Thriller", desc: "警匪对峙 | 正邪边界模糊的双线叙事" },
    { type: "World Book", title: "哨向 · Sentinel", desc: "哨向设定 | 感官共鸣与精神链接" },
    { type: "World Book", title: "AO3", desc: "多元设定体系 | 多维度世界观构建" },
    { type: "OC", title: "Original", desc: "原创角色 | User 的姐姐 / 弟弟" }
  ]}
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function CharacterArchive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const heartOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 0.35, 0.35, 0]);

  return (
    <section id="archive" ref={containerRef} className="py-16 md:py-32 px-4 md:px-12 lg:px-24 border-t border-accent/20 bg-bg relative filigree-border overflow-hidden">
      <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none z-0" style={{ animationDelay: '-4s' }} />
      
      {/* Rotating Heart — hidden on mobile to save performance */}
      <motion.div 
        style={{ opacity: heartOpacity }}
        className="fixed top-1/2 right-[0%] w-[40vw] h-[40vw] -translate-y-1/2 pointer-events-none z-[5] text-accent items-center justify-center hidden md:flex"
      >
        <motion.svg 
          style={{ rotate, scale }}
          viewBox="0 0 200 200" 
          fill="none" stroke="#8b0000" strokeOpacity="0.4" strokeWidth="1.5"
          className="w-full h-full"
        >
          <path d="M100 180 C 100 180, 20 120, 20 60 C 20 20, 80 20, 100 60 C 120 20, 180 20, 180 60 C 180 120, 100 180, 100 180 Z" strokeWidth="2" filter="url(#glow)" />
          <path d="M100 160 C 100 160, 40 110, 40 60 C 40 30, 80 30, 100 60 C 120 30, 160 30, 160 60 C 160 110, 100 160, 100 160 Z" strokeDasharray="3 3" strokeWidth="1" />
          <path d="M100 140 C 100 140, 60 100, 60 60 C 60 40, 80 40, 100 60 C 120 40, 140 40, 140 60 C 140 100, 100 140, 100 140 Z" strokeWidth="1" />
          <circle cx="100" cy="70" r="15" strokeWidth="1" />
          <circle cx="100" cy="70" r="5" fill="#8b0000" />
          <path d="M100 20 L100 180 M20 70 L180 70" strokeDasharray="1 4" opacity="0.6" strokeWidth="0.8" />
          <path d="M100 70 L50 30 M100 70 L150 30 M100 70 L50 110 M100 70 L150 110" opacity="0.6" strokeWidth="0.8" />
          <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        </motion.svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-16 md:mb-32 border-b border-accent/20 pb-6 md:pb-12">
          <div>
            <span className="gothic-text text-xs md:text-sm tracking-widest opacity-60 block mb-3 text-accent">05 // DOSSIER: ARCHIVE</span>
            <h2 className="gothic-text text-3xl md:text-7xl tracking-widest">Character Archive</h2>
          </div>
          <div className="font-serif text-2xl md:text-5xl italic opacity-80 text-ink drop-shadow-sm">20+ Worlds Built.</div>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {archive.map((group, idx) => (
            <motion.div key={idx} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4 border-b border-accent/30 pb-3">
                <h3 className="font-serif italic text-xl md:text-4xl text-accent drop-shadow-md">{group.cat}</h3>
              </div>
              
              <div className="flex flex-col border-t border-accent/10">
                {group.items.map((item, i) => (
                  <motion.div key={i} className="group relative flex flex-col md:flex-row md:items-center justify-between py-4 md:py-8 border-b border-accent/10 hover:bg-accent/5 transition-all duration-500 hover-trigger px-3 md:px-8 -mx-3 md:-mx-8 cursor-pointer">
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-center gap-4 md:gap-12 w-full md:w-auto">
                      <span className="gothic-text text-[10px] tracking-widest opacity-40 w-6 md:w-12">{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif italic text-lg md:text-3xl text-ink/90 group-hover:text-accent transition-colors duration-500">{item.title}</h4>
                        <p className="font-sans text-xs md:text-sm font-light opacity-60 text-ink/80 mt-1 truncate md:whitespace-normal">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0 pl-10 md:pl-0">
                      <span className="gothic-text text-[9px] md:text-[10px] tracking-widest text-accent border border-accent/30 px-3 py-1 rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-500">{item.type}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-accent hidden md:block" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
