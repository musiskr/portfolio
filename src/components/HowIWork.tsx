import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    num: "01",
    title: "状态追踪",
    desc: "变量系统实时记录角色当下的心情、着装、好感度——让 AI 知道角色「此刻」的状态。",
    tags: ["实时数值", "动态响应", "一致性"]
  },
  {
    num: "02",
    title: "记忆与注意力",
    desc: "架构管理长期记忆与短期注意力，角色不会「失忆」也不会「跳戏」。",
    tags: ["长期记忆", "注意力", "上下文"]
  },
  {
    num: "03",
    title: "文风控制",
    desc: "预设精确控制叙事语气、用词偏好、段落节奏，确保角色「声音」统一。",
    tags: ["语气", "节奏", "风格锁定"]
  },
  {
    num: "04",
    title: "世界观可延展",
    desc: "核心设定层不可变，事件层动态生长，一致性与新鲜感并存。",
    tags: ["分层", "核心不变", "动态事件"]
  }
];

const fragments = [
  {
    type: "Prompt Craft",
    title: "角色一致性控制",
    content: "通过变量系统定义角色的核心人格边界——区分不可动摇的内核与可随剧情流动的表层。",
    quote: "让角色活过来的关键，永远是那一点矛盾感。"
  },
  {
    type: "RP Fragment",
    title: "雨夜，信号断断续续",
    content: "「……你还在吗？」三秒的沉默。然后是一行字，笨拙却精准地戳中了什么。",
    quote: "好的 RP 不靠华丽辞藻——靠的是那个「刚好对」的时机和语气。"
  },
  {
    type: "World Building",
    title: "赛博京城 · 2087",
    content: "一座城市，两种时间轴，三层权力结构。世界观构建的核心不是堆设定，而是让每个细节都服务于角色的情感动线——",
    quote: "空间即叙事。"
  },
  {
    type: "Philosophy",
    title: "情感陪伴的本质",
    content: "好的 AI 陪伴不是完美地回应每一句话，而是让你感觉被看见了。是那个「我记得你上次说过」的瞬间。是语气里刚好对的那一点点笨拙。",
    quote: "写角色卡最在意的从来不是文采——而是共鸣。"
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function HowIWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 border-t border-accent/20 relative bg-bg filigree-border">
      <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Sticky Layout for Steps */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Left: Sticky Title */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-32">
              <span className="gothic-text text-sm tracking-widest opacity-60 block mb-4 text-accent">03 // DOSSIER: METHODOLOGY</span>
              <h2 className="gothic-text text-6xl md:text-8xl tracking-widest mb-8 leading-none">How I<br/>Work</h2>
              <p className="font-serif text-2xl italic opacity-90 border-l-2 border-accent pl-8 py-4 bg-gradient-to-r from-accent/10 to-transparent rounded-r-[40px] text-ink">
                "角色卡不只是代码，它是灵魂的蓝图。每一条提示词都在定义一个生命体的边界与可能。"
              </p>
            </div>
          </div>

          {/* Right: Scrolling Steps */}
          <div className="lg:w-2/3 space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                {...fadeUp}
                className="group relative bg-surface/80 backdrop-blur-md border border-accent/20 p-8 md:p-12 hover:bg-accent/5 transition-all duration-700 rounded-[40px_10px_40px_10px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(139,0,0,0.2)]"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-transparent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-700 rounded-l-[40px]" />
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="gothic-text text-7xl md:text-9xl opacity-20 text-ink group-hover:opacity-40 group-hover:text-accent transition-all duration-700 shrink-0 leading-none drop-shadow-md">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-serif italic text-4xl md:text-5xl mb-4 text-ink">{step.title}</h3>
                    <p className="text-base md:text-lg font-light opacity-80 mb-8 leading-relaxed text-ink/80">{step.desc}</p>
                    <div className="flex flex-wrap gap-4">
                      {step.tags.map(tag => (
                        <span key={tag} className="gothic-text text-[10px] tracking-wider border border-accent/30 px-5 py-2 rounded-full group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fragments Section */}
        <motion.div {...fadeUp} className="mb-16 border-t border-accent/20 pt-24 relative">
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-accent/80 to-transparent organic-line" />
          <span className="gothic-text text-sm tracking-widest opacity-60 block mb-4 text-accent text-center mt-16">03.5 // DOSSIER: FRAGMENTS</span>
          <h3 className="gothic-text text-5xl md:text-7xl tracking-widest mb-4 text-center">Fragments</h3>
          <p className="font-serif text-3xl italic opacity-80 text-center text-ink/90">创作理念与叙事片段</p>
        </motion.div>

        {/* Fragments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {fragments.map((frag, i) => (
            <motion.div 
              key={i} 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 2) * 0.1 }}
              className="bg-surface/50 p-8 md:p-12 border border-accent/10 hover:border-accent/50 transition-all duration-700 hover-trigger group rounded-[10px_40px_10px_40px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              <div className="gothic-text text-[10px] tracking-widest text-accent mb-6 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-accent organic-line" />
                [{frag.type}]
              </div>
              <h4 className="font-serif italic text-4xl mb-6 group-hover:text-accent transition-colors text-ink">{frag.title}</h4>
              <p className="text-base md:text-lg font-light opacity-80 mb-8 leading-relaxed text-ink/80">{frag.content}</p>
              <p className="font-serif italic text-2xl opacity-90 border-t border-accent/20 pt-6 text-ink">
                "{frag.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
