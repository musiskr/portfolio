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
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function CharacterArchive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start bottom", "end top"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const heartOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 0.6, 0.6, 0]);

  return (
    <section id="archive" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 border-t border-accent/20 bg-bg relative filigree-border overflow-hidden">
      <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none z-0" style={{ animationDelay: '-4s' }} />
      
      {/* Interactive Rotating Heart Background */}
      <motion.div 
        style={{ opacity: heartOpacity }}
        className="fixed top-1/2 right-[-20%] md:right-[-10%] w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] -translate-y-1/2 pointer-events-none z-0 text-accent flex items-center justify-center"
      >
        <motion.svg 
          style={{ rotate, scale }}
          viewBox="0 0 200 200" 
          className="w-full h-full stroke-current fill-transparent" 
          strokeWidth="0.5"
        >
          {/* Outer Heart */}
          <path d="M100 180 C 100 180, 20 120, 20 60 C 20 20, 80 20, 100 60 C 120 20, 180 20, 180 60 C 180 120, 100 180, 100 180 Z" strokeWidth="1" className="drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]" />
          {/* Inner organic lines */}
          <path d="M100 160 C 100 160, 40 110, 40 60 C 40 30, 80 30, 100 60 C 120 30, 160 30, 160 60 C 160 110, 100 160, 100 160 Z" strokeDasharray="2 2" />
          <path d="M100 140 C 100 140, 60 100, 60 60 C 60 40, 80 40, 100 60 C 120 40, 140 40, 140 60 C 140 100, 100 140, 100 140 Z" />
          {/* Center decorative elements */}
          <circle cx="100" cy="70" r="15" />
          <circle cx="100" cy="70" r="5" fill="currentColor" />
          <path d="M100 20 L100 180 M20 70 L180 70" strokeDasharray="1 4" opacity="0.5" />
          {/* Radiating lines */}
          <path d="M100 70 L50 30 M100 70 L150 30 M100 70 L50 110 M100 70 L150 110" opacity="0.5" />
          {/* Additional filigree */}
          <path d="M100 100 C 80 120, 120 120, 100 140" strokeWidth="0.5" />
          <path d="M70 70 C 50 50, 50 90, 70 70" strokeWidth="0.5" />
          <path d="M130 70 C 150 50, 150 90, 130 70" strokeWidth="0.5" />
        </motion.svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32 border-b border-accent/20 pb-12">
          <div>
            <span className="gothic-text text-sm tracking-widest opacity-60 block mb-4 text-accent">05 // DOSSIER: ARCHIVE</span>
            <h2 className="gothic-text text-5xl md:text-7xl tracking-widest">Character Archive</h2>
          </div>
          <div className="font-serif text-4xl md:text-5xl italic opacity-80 text-ink drop-shadow-sm">20+ Worlds Built.</div>
        </motion.div>

        <div className="space-y-24">
          {archive.map((group, idx) => (
            <motion.div 
              key={idx} 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-6 border-b border-accent/30 pb-4">
                <h3 className="font-serif italic text-3xl md:text-4xl text-accent drop-shadow-md">
                  {group.cat}
                </h3>
              </div>
              
              {/* Dossier List */}
              <div className="flex flex-col border-t border-accent/10">
                {group.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-accent/10 hover:bg-accent/5 transition-all duration-500 hover-trigger px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer"
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                      <span className="gothic-text text-xs tracking-widest opacity-40 group-hover:opacity-80 transition-opacity w-8 md:w-12">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-serif italic text-2xl md:text-3xl text-ink/90 group-hover:text-accent transition-colors duration-500">
                          {item.title}
                        </h4>
                        <p className="font-sans text-sm font-light opacity-60 text-ink/80 mt-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 mt-4 md:mt-0 pl-14 md:pl-0">
                      <span className="gothic-text text-[10px] tracking-widest text-accent border border-accent/30 px-4 py-1.5 rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                        {item.type}
                      </span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent hidden md:block" />
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
