import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    num: "01",
    title: "World Building",
    subtitle: "IP Content",
    desc: "跨题材角色卡与世界书创作——从赛博朋克到古风武侠，从乙女攻略到末世废土。20+ 套完整 IP 内容体系，覆盖女性向情感陪伴、沉浸式世界观、多线叙事架构设计。"
  },
  {
    num: "02",
    title: "Experience",
    subtitle: "Interactive Design",
    desc: "AI 叙事场景下的沉浸式交互——HTML 角色档案卡、游戏 UI 界面、SVG 动态阵型。用前端技术让内容「活」起来，界面本身成为叙事的一部分。"
  },
  {
    num: "03",
    title: "Workflow",
    subtitle: "AI-Native",
    desc: "我不是「让AI帮我写代码」，我是「用AI作为设计工具」。 独立完成了从概念到可交互原型的全链路——判断什么是好的、指导迭代方向、最终产出完整可运行的作品。"
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function WhatIDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="services" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-surface border-t border-accent/20 relative overflow-hidden filigree-border">
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none z-0" style={{ animationDelay: '-2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-center gap-4 mb-24 border-b border-accent/20 pb-8">
          <span className="gothic-text text-sm tracking-widest opacity-60 text-accent">02 // DOSSIER: CAPABILITIES</span>
          <h2 className="gothic-text text-5xl md:text-7xl tracking-widest ml-auto">What I Do</h2>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.2 }}
              className="group relative bg-bg/60 backdrop-blur-md border border-accent/20 p-8 md:p-12 hover:bg-accent/5 transition-all duration-700 hover:-translate-y-4 rounded-[40px_10px_40px_10px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(139,0,0,0.2)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 rounded-t-[40px]" />
              
              <div className="relative z-10">
                <div className="gothic-text text-7xl md:text-9xl opacity-10 mb-8 text-ink group-hover:opacity-20 group-hover:text-accent transition-all duration-700 drop-shadow-md">{s.num}</div>
                <h3 className="font-serif italic text-4xl md:text-5xl mb-4 text-ink">{s.title}</h3>
                <div className="gothic-text text-xs tracking-widest text-accent mb-8 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-accent organic-line" />
                  {s.subtitle}
                </div>
                <p className="font-sans text-base md:text-lg leading-relaxed opacity-80 text-ink/80 group-hover:opacity-100 transition-opacity duration-500">
                  {s.desc}
                </p>
              </div>

              {/* Decorative organic corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-br-[10px]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
