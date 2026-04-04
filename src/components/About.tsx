import { motion } from 'motion/react';

const aestheticImages = [
  "/美学/08830039d20acae4174f4c84187c257.jpg",
  "/美学/2de564cc8ceb0a7748d7640533d049a.jpg",
  "/美学/3429466852f030b805a615f02d6bc04.jpg",
  "/美学/4015230893c3fc5052ba027b59fb631.jpg"
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-12 lg:px-24 border-t border-accent/20 bg-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div {...fadeUp} className="mb-12 md:mb-16">
          <span className="gothic-text text-xs tracking-widest opacity-60 text-accent">01 // ABOUT</span>
          <h2 className="gothic-text text-3xl md:text-5xl tracking-widest mt-2">About Me</h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: Bio */}
          <motion.div {...fadeUp} className="lg:col-span-7 space-y-6">
            <p className="text-base md:text-lg font-light leading-relaxed text-ink/85">
              环境艺术设计本科，转型游戏内容策划方向。独立完成多个跨题材游戏项目的完整策划——从世界观架构、角色体系、系统机制到可交互原型，涵盖恐怖悬疑、星际科幻、竞速养成、亚文化等类型。
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-ink/85">
              深度使用 AI 工具 2.5 年，工作方式是<strong className="text-ink font-medium">「人判断 + AI 执行」</strong>——我负责创意方向、内容质量把控和设计决策，AI 负责快速实现和迭代。独立创作 20+ 套跨题材互动叙事内容，累计角色 50+，设定文档 10+ 万字+。
            </p>

            {/* Core Capabilities - compact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {[
                { title: "世界观构建", desc: "跨题材 IP 设计——科幻、恐怖、竞速、足球、末世，从设定到角色到系统机制的完整策划" },
                { title: "交互原型", desc: "独立完成 UI 交互原型开发（HTML/CSS/JS/React），不只写文档，也能做可交互 Demo" },
                { title: "AI 工作流", desc: "擅长将 AI 整合进策划工作流：Claude 做创意决策，Gemini 做框架搭建，Claude Code 做本地调试" },
              ].map((item, i) => (
                <div key={i} className="border border-accent/15 bg-surface/50 p-4 md:p-5 rounded-lg hover:border-accent/30 transition-colors duration-500">
                  <h4 className="gothic-text text-[10px] tracking-widest text-accent mb-2">{item.title}</h4>
                  <p className="text-xs md:text-sm font-light text-ink/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info + Aesthetic */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-5 space-y-8">

            {/* Info Table - compact */}
            <div className="border border-accent/15 bg-surface/50 p-5 md:p-6 rounded-lg space-y-3">
              {[
                { label: "Education", value: "河北地质大学 · 环境艺术设计 · 2021-2025" },
                { label: "AI Tools", value: "Claude · ChatGPT · Gemini · DeepSeek" },
                { label: "Design & Dev", value: "PS · Figma · HTML/CSS/JS · React/TS" },
                { label: "Language", value: "中文（母语）· 英文（日常阅读 / 技术文档）" },
              ].map((row, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-1 md:gap-4 py-2 border-b border-accent/10 last:border-0">
                  <span className="gothic-text text-[10px] tracking-widest opacity-50 md:w-24 shrink-0">{row.label}</span>
                  <span className="text-sm text-ink/80">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Aesthetic Reference - 4 images */}
            <div>
              <h4 className="gothic-text text-[10px] tracking-widest opacity-50 text-accent mb-3">AESTHETIC REFERENCE</h4>
              <div className="grid grid-cols-2 gap-2">
                {aestheticImages.map((img, i) => (
                  <div key={i} className="aspect-[3/4] overflow-hidden rounded-md border border-accent/10 bg-surface/30">
                    <img 
                      src={encodeURI(img)} 
                      alt={`aesthetic ${i + 1}`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
