import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useState, useEffect } from 'react';

const works = [
  {
    title: "STARDATE · 星历",
    tags: ["Game Design", "Narrative", "AI Simulation", "2026"],
    stamp: "In Dev",
    intro: "星际政治叙事 × AI驱动世界模拟 · 女性向内容产品。没有任何一条路是必经之路。但你选的每一条，都会有人因此活下来，或者死去。",
    detail: "不给她一个被爱的世界，给她一个值得她做决定的世界。STARDATE 是一个星际政治题材的女性向叙事产品——不卖匮乏卖权力，不做好感度养成，做决策与后果。参考系：Suzerain × Reigns × 极乐迪斯科。独立完成 8 万字项目圣经、12 势力 × 11 维度设计矩阵、系统机制文档、角色详设、对话脚本、Pitch Doc 等完整文档体系。",
    hint: "",
    containerClass: "h-[500px] lg:h-[600px] w-full max-w-[900px] mx-auto rounded-[20px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] border-4 border-accent/10",
    problem: "女性向游戏市场 2024 年达 80 亿元（+124.1%），但增长高度集中于头部，所有人在优化同一个答案：更逼真的陪伴、更精致的卡面、更高的好感度天花板。没人在问新问题——如果女性玩家想要的不是被爱，而是被认真对待呢？",
    explore: "方案A：AI 升级传统乙游，用语音/3D 建模做更逼真的陪伴；方案B：加入政治设定但保留好感度核心循环；方案C：彻底重构——没有好感度，没有卡池，没有货币，玩家的资源是时间和政治筹码。",
    decision: "选择方案C。「批奏触发一切」：每个决策周期 5 个时间槽，处理政务事件或执行非决策行动。角色不等你去攻略——是你的决策把他们逼到你面前。数值在底层驱动，体验层只有叙事语气和氛围的变化。12 势力星际格局 + 星潮模型（心理史学武器化）+ 基因筛选计划（三百年审美操控）构成世界观底座。",
    stats: [
      { label: "Bible", value: "80,000+ Words" },
      { label: "Factions", value: "12 Powers × 11D" },
      { label: "Characters", value: "5M + 7F Core" },
      { label: "Reference", value: "Suzerain · Reigns · DE" }
    ],
    imageUrl: "https://res.cloudinary.com/dpoym5kxi/image/upload/v1774542300/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_2026-03-26_184246_dbl6h4.png",
    videoUrl: "",
    iframeUrls: [],
    links: []
  },
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
    imageUrl: "",
    videoUrl: "https://res.cloudinary.com/dpoym5kxi/video/upload/v1773850151/%E5%BF%AB%E4%B9%90%E8%B6%B3%E7%90%83_%E5%80%8D%E9%80%9F%E7%89%88_nf3wwo.mp4",
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
    imageUrl: "",
    videoUrl: "https://res.cloudinary.com/dpoym5kxi/video/upload/v1773853713/%E8%B5%9B%E8%BD%A6%E6%89%8B_%E5%89%AA%E5%80%8D_oazngn.mp4",
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
    imageUrl: "",
    videoUrl: "https://res.cloudinary.com/dpoym5kxi/video/upload/v1773850204/%E6%9C%AB%E4%B8%96%E7%8A%B6%E6%80%81%E6%A0%8F_%E5%80%8D%E9%80%9F%E7%89%88_kfnc69.mp4",
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
    imageUrl: "",
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIframeIdx, setActiveIframeIdx] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  const hasVideo = work.videoUrl && work.videoUrl.length > 0;
  const hasIframe = work.iframeUrls && work.iframeUrls.length > 0;
  const hasImage = work.imageUrl && work.imageUrl.length > 0;

  // Force play video when it becomes visible (handles iOS edge cases)
  useEffect(() => {
    if (!hasVideo || !videoRef.current) return;
    
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay still blocked, that's ok - user will see poster
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(video);
    return () => observer.disconnect();
  }, [hasVideo]);
  
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
      {/* Left: Interactive Container — sticky ONLY on desktop */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-6 space-y-4 lg:sticky lg:top-32 z-20"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-6 relative z-30">
          {work.tags.map(tag => (
            <span key={tag} className="gothic-text text-[10px] tracking-wider border border-accent/30 px-4 py-2 rounded-full text-ink/80 bg-surface/50 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className={`relative w-full bg-transparent ${work.containerClass || 'h-[70vh] lg:h-[85vh]'}`} style={{isolation: 'isolate'}}>
          {hasVideo ? (
            <>
              {/* Loading skeleton shown until video loads */}
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 rounded-[36px] bg-surface/80 flex items-center justify-center z-[1]">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                    <span className="gothic-text text-[10px] tracking-widest text-ink/50">LOADING</span>
                  </div>
                </div>
              )}
              {/* Error fallback */}
              {videoError && (
                <div className="absolute inset-0 rounded-[36px] bg-surface/80 flex items-center justify-center z-[1]">
                  <div className="flex flex-col items-center gap-4 text-center px-8">
                    <span className="gothic-text text-xs tracking-widest text-accent">VIDEO UNAVAILABLE</span>
                    <span className="text-sm text-ink/50">请稍后刷新重试</span>
                  </div>
                </div>
              )}
              <video
                ref={videoRef}
                src={work.videoUrl}
                className={`absolute inset-0 w-full h-full rounded-[36px] bg-black ${work.containerClass?.includes('max-w-[900px]') ? 'object-contain' : 'object-cover'}`}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setVideoLoaded(true)}
                onError={() => setVideoError(true)}
              />
            </>
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
          ) : hasImage ? (
            <img
              src={work.imageUrl}
              alt={work.title}
              className="absolute inset-0 w-full h-full rounded-[16px] object-cover"
              loading="lazy"
            />
          ) : null}

          <div className="absolute top-8 right-8 stamp z-10 pointer-events-none opacity-50 mix-blend-multiply">
            {work.stamp}
          </div>
        </div>

        {/* Version Toggles */}
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
