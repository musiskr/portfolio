import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useState, useEffect } from 'react';

const works = [
  {
    title: "Happy Football Simulator",
    tags: ["Product Concept", "Narrative", "2025"],
    stamp: "Featured",
    intro: "快乐足球模拟器 · 女性向互动叙事产品。完整角色体系（11 名球员 + 教练组）+ 世界书 + 角色卡。等距阵型 SVG 交互，配套 AI 生成主题音乐。",
    detail: "架空职业足球俱乐部为舞台的女性向叙事产品概念。深度研究女性向轻互动内容市场，设计完整角色体系，每个角色配套世界书与角色卡。实现等距阵型 SVG 交互与角色档案页。基于 1500+ 社区用户偏好数据指导设计决策。",
    hint: "",
    containerClass: "h-[800px] lg:h-[850px] w-full max-w-[400px] mx-auto rounded-[40px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] border-4 border-accent/10",
    problem: "女性向叙事产品题材集中在校园/古代/都市，缺少竞技类。但女性用户并非不需要竞技——竞技场景天然产生高情绪浓度（紧张、热血、心跳加速），这恰恰是情感叙事最好的催化剂。",
    explore: "方案A：弱化足球重点做恋爱；方案B：硬核足球模拟+恋爱；方案C：足球作为情感催化剂，竞技瞬间即关系推进的契机。",
    decision: "选择方案C。球场是情感的容器，不是规则的载体。等距阵型 SVG 让用户直观看到角色站位与关系距离，多元情感线并行覆盖不同偏好。11 名角色+教练组确保世界观自洽运转。",
    stats: [
      { label: "Characters", value: "11 + Coach" },
      { label: "Routes", value: "Multi-Route" },
      { label: "Interaction", value: "SVG · Music" },
      { label: "Content", value: "World Book + Cards" }
    ],
    videoUrl: "https://res.cloudinary.com/dpoym5kxi/video/upload/v1773669568/%E5%BF%AB%E4%B9%90%E8%B6%B3%E7%90%83%E6%A8%A1%E6%8B%9F%E5%99%A8_paqsnn.mp4",
    iframeUrls: [],
    links: []
  },
  {
    title: "AETHER RACING · F1 ADV",
    tags: ["App Design", "React", "2026"],
    stamp: "New",
    intro: "F1 赛车手养成 ADV · 女性向多模块 App 生态。12 个功能模块：故事入口、Chat、围场快讯、角色档案、赛程等。RPM // SYSTEM 状态监控栏 + 灵动岛音乐播放器。",
    detail: "架空 F1 赛车世界观的女性向养成产品。基于 Google AI Studio 开发，集成 RPM // SYSTEM 状态监控栏（时间/地点/天气/穿搭/内心状态）、灵动岛音乐播放器、赛程倒计时。展现从 IP 世界观构建到多模块产品界面设计的完整链路思维。",
    hint: "",
    containerClass: "h-[500px] lg:h-[600px] w-full max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] border-4 border-accent/10",
    problem: "F1 赛车题材在女性向市场几乎空白，但速度与肾上腺素是天然的情感催化剂。如何将硬核竞技转化为女性向情感体验？",
    explore: "方案A：传统对话式 ADV；方案B：模拟手机桌面构建完整 App 生态，让用户「生活」在角色的世界里。",
    decision: "选择方案B。设计 12 个功能模块构成完整 App 生态，每个模块都是叙事入口。RPM 状态栏让角色的当前状态可视化，灵动岛音乐播放器增强氛围沉浸感。暗金赛博机械美学统一视觉语言。",
    stats: [
      { label: "Modules", value: "12 App Modules" },
      { label: "Tech", value: "React + Vite + Gemini" },
      { label: "Aesthetic", value: "Dark Gold · Cyber" },
      { label: "Feature", value: "RPM System · Dynamic Island" }
    ],
    videoUrl: "https://res.cloudinary.com/dpoym5kxi/video/upload/v1773669564/F1%E8%B5%9B%E8%BD%A6%E6%89%8B_%E5%8E%8B%E7%BC%A9_kw2e1p.mp4",
    iframeUrls: [],
    links: []
  },
  {
    title: "Post-Apocalypse Survival UI",
    tags: ["Game UI", "Dev", "2024"],
    stamp: "Signal Lost",
    intro: "末世生存模拟器 · 动态响应式 UI。根据 AI 叙事内容实时响应的动态 UI 系统，天气特效与 SAN 值驱动视觉反馈。",
    detail: "独立设计并开发的移动端交互界面。这是一个根据 AI 叙事内容实时响应的动态 UI 系统——天气特效（冰冻/火灾/浓雾）由剧情触发，SAN 值/威胁等级驱动视觉反馈，物资系统和地图模块提供情境感知。",
    hint: "",
    containerClass: "h-[800px] lg:h-[850px] w-full max-w-[400px] mx-auto rounded-[40px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] border-4 border-accent/10",
    problem: "AI 叙事陪伴场景下，UI 通常只是信息容器。但末世题材的情感氛围需要界面本身也参与叙事——如何让 UI「会讲故事」？",
    explore: "方案A：干净功能性 UI，信息清晰但氛围弱；方案B：全屏沉浸动画，氛围强但可读性差；方案C：功能性基础上叠加视觉叙事层。",
    decision: "选择方案C。状态栏的信号衰减、像素崩塌不是装饰，而是在告诉用户「这个世界正在衰败」。正则引擎动态解析数据，让每次打开时状态都不同——界面是活的，跟叙事同步呼吸。",
    stats: [
      { label: "System", value: "Dynamic UI" },
      { label: "Visual", value: "Post-Apocalyptic" },
      { label: "Tech", value: "HTML/CSS/JS · Regex" },
      { label: "Platform", value: "Mobile-First" }
    ],
    videoUrl: "https://res.cloudinary.com/dpoym5kxi/video/upload/v1773669541/%E6%9C%AB%E4%B8%96%E7%8A%B6%E6%80%81%E6%A0%8F_%E5%8E%8B%E7%BC%A9_foprkc.mp4",
    iframeUrls: [],
    links: []
  },
  {
    title: "Dossier Archives System",
    tags: ["Narrative", "UI", "2024"],
    stamp: "Classified",
    intro: "交互式角色档案卡 · 沉浸式 HTML 交互。Cormorant Garamond 排版，法语/英语双语混排。自研 8 套主题色切换系统，Tap to Reveal 三层解锁。",
    detail: "为 AI 叙事场景设计的沉浸式交互项目。独立完成从概念到可交互原型的全链路。Cormorant Garamond 排版，法语/英语双语混排。自研 8 套主题色切换系统，Tap to Reveal 三层解锁机制。经过数月持续使用与迭代优化，验证了 AI 叙事内容与交互设计结合的可行性。",
    hint: "轻触左边或右边卡片可查看其他角色 · Tap left or right card to explore",
    containerClass: "h-[600px] lg:h-[700px] w-full max-w-[420px] mx-auto rounded-[40px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] border-4 border-accent/10",
    problem: "角色档案需要承载大量信息（身份、性格、关系、背景），但一次性展示会造成信息过载，破坏沉浸感。",
    explore: "方案A：单页长卡片，信息完整但视觉压迫；方案B：多页切换，打断阅读节奏；方案C：同一卡片分层渐进式揭示。",
    decision: "选择三层解锁交互——每次 Tap 只揭示一层，用好奇心驱动阅读节奏。BPM 动画维持情感张力。8 套主题色对应不同角色气质，而非单纯换肤。",
    stats: [
      { label: "Theme", value: "8 Variants" },
      { label: "Typography", value: "Cormorant Garamond" },
      { label: "Aesthetic", value: "Gothic · Baroque" },
      { label: "Language", value: "FR / EN Bilingual" }
    ],
    videoUrl: "",
    iframeUrls: [
      { label: "Dark Mode", url: "/卡片状态栏-暗色版.html" },
      { label: "Light Mode", url: "/卡片状态栏-白色版.html" }
    ],
    links: [
      { label: "Open Dark Mode ↗", url: "/卡片状态栏-暗色版.html" },
      { label: "Open Light Mode ↗", url: "/卡片状态栏-白色版.html" }
    ]
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const WorkItem = ({ work }: { work: typeof works[0]; key?: React.Key }) => {
  const ref = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [activeIframeIdx, setActiveIframeIdx] = useState(0);
  
  const hasVideo = work.videoUrl && work.videoUrl.length > 0;
  const hasIframe = work.iframeUrls && work.iframeUrls.length > 0;
  
  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;
      
      const style = iframeDoc.createElement('style');
      style.innerHTML = '* { cursor: none !important; } ::-webkit-scrollbar { display: none !important; } * { -ms-overflow-style: none; scrollbar-width: none; }';
      iframeDoc.head.appendChild(style);
    } catch (err) {
      console.error("Cannot access iframe content", err);
    }
  };

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start min-h-screen py-24 border-t border-accent/20 first:border-t-0">
      {/* Left: Interactive Iframe Container (Borderless) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-6 space-y-4 sticky top-32 z-20"
      >
        {/* Tags moved above the project */}
        <div className="flex flex-wrap gap-3 mb-6 relative z-30">
          {work.tags.map(tag => (
            <span key={tag} className="gothic-text text-[10px] tracking-wider border border-accent/30 px-4 py-2 rounded-full text-ink/80 bg-surface/50 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className={`relative w-full bg-transparent ${work.containerClass || 'h-[70vh] lg:h-[85vh]'}`}>
          {hasVideo ? (
            <video
              src={work.videoUrl}
              className="absolute inset-0 w-full h-full object-contain rounded-[36px] bg-black"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : hasIframe ? (
            <iframe
              ref={iframeRef}
              src={work.iframeUrls[activeIframeIdx].url}
              className="absolute inset-0 w-full h-full border-none pointer-events-auto"
              title={work.title}
              loading="lazy"
              onLoad={handleIframeLoad}
              sandbox="allow-scripts allow-same-origin allow-popups"
              scrolling="no"
            />
          ) : null}

          <div className="absolute top-8 right-8 stamp z-10 pointer-events-none opacity-50 mix-blend-multiply">
            {work.stamp}
          </div>
        </div>

        {/* Version Toggles - Moved Below Iframe */}
        {hasIframe && work.iframeUrls.length > 1 && (
          <div className="flex justify-center gap-4 mt-6 relative z-30">
            {work.iframeUrls.map((urlObj, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIframeIdx(idx)}
                className={`gothic-text text-[10px] tracking-widest px-6 py-3 transition-all duration-500 rounded-full hover-trigger ${
                  activeIframeIdx === idx 
                    ? 'bg-accent text-white shadow-[0_0_15px_rgba(139,0,0,0.5)]' 
                    : 'bg-surface/50 text-ink/70 hover:bg-accent/20 border border-accent/30'
                }`}
              >
                {urlObj.label}
              </button>
            ))}
          </div>
        )}
        
        {work.hint && (
          <p className="text-center gothic-text text-xs md:text-sm text-accent/80 tracking-widest mt-4 pointer-events-none drop-shadow-sm">
            {work.hint}
          </p>
        )}
      </motion.div>

      {/* Right: Content */}
      <div className="lg:col-span-6 space-y-12 relative z-10">
        <motion.div {...fadeUp}>
          <h3 className="font-serif text-5xl md:text-6xl mb-8 leading-none tracking-tight text-ink">{work.title}</h3>
          <p className="text-xl md:text-2xl font-serif italic opacity-90 leading-relaxed text-ink drop-shadow-sm">
            {work.intro}
          </p>
          {work.links && work.links.length > 0 && (
            <div className="flex flex-wrap gap-6 mt-10">
              {work.links.map((link, i) => (
                <a 
                  key={i}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 gothic-text text-xs tracking-widest border border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-500 hover-trigger shadow-[0_0_10px_rgba(139,0,0,0.2)] hover:shadow-[0_0_20px_rgba(139,0,0,0.6)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div {...fadeUp} transition={{...fadeUp.transition, delay: 0.1}} className="space-y-6 text-base font-light opacity-80 leading-relaxed text-ink/90">
          <p>{work.detail}</p>
        </motion.div>

        <motion.div {...fadeUp} transition={{...fadeUp.transition, delay: 0.2}} className="border-l-2 border-accent pl-8 space-y-6 bg-gradient-to-r from-accent/5 to-transparent py-4 rounded-r-[40px]">
          <h4 className="gothic-text text-xs tracking-widest text-accent">Design Decision</h4>
          <div className="space-y-5 text-sm font-light text-ink/80">
            <p><strong className="font-serif italic text-lg text-ink mr-2">Problem:</strong> {work.problem}</p>
            <p><strong className="font-serif italic text-lg text-ink mr-2">Explore:</strong> {work.explore}</p>
            <p><strong className="font-serif italic text-lg text-ink mr-2">Decision:</strong> {work.decision}</p>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{...fadeUp.transition, delay: 0.3}} className="grid grid-cols-2 gap-y-8 gap-x-6 border-t border-accent/20 pt-10">
          {work.stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="gothic-text text-[10px] tracking-widest opacity-60 mb-2 group-hover:text-accent transition-colors">{stat.label}</div>
              <div className="font-serif italic text-xl text-ink">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function SelectedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 border-t border-accent/20 bg-surface relative filigree-border">
      <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-center gap-4 mb-24 border-b border-accent/20 pb-8">
          <span className="gothic-text text-sm tracking-widest opacity-60 text-accent">04 // DOSSIER: PROJECTS</span>
          <h2 className="gothic-text text-5xl md:text-7xl tracking-widest ml-auto">Selected Work</h2>
        </motion.div>

        <div className="space-y-48">
          {works.map((work, idx) => (
            <WorkItem key={idx} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
