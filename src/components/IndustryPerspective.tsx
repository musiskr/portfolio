import { motion } from 'motion/react';

const insights = [
  {
    title: "AI 陪伴赛道现状：信息差正在消失",
    content: "先发产品（Glow、星野等）依赖封闭生态建立壁垒，但开源 AI 叙事平台凭借社区角色卡生态正在快速增长——仅女性向创作社区就有数万活跃用户，免费角色卡、世界书、预设和 UI 美化已形成成熟生态。当用户发现开源平台提供同等甚至更优质的免费内容时，纯 App 产品的付费模型面临根本性挑战。差异化必须建立在 App 无法复制的维度上。"
  },
  {
    title: "女性用户洞察：被低估的深度需求",
    content: 当前行业对女性向用户的理解存在系统性偏差——大量产品仍由男性决策者定义'女性想要什么'。但真实的女性用户需求远比'甜宠陪伴'复杂：她们追求角色人格的逻辑自洽性而非外貌，偏好仿真社交界面（聊天、朋友圈、语音、转账）营造的真实感而非传统对话框，对世界观可延展性的关注远超对新角色数量的需求。能够让女性用户参与内容设计决策的团队，才能做出真正有粘性的产品。"
  },
  {
    title: "内容趋势：从'被爱'到'做决定",
    content: "女性向内容正在经历范式转移——从单一情感陪伴向复合体验演进。三个显著方向：权力叙事（玩家作为决策者而非被追求者）、多元关系形态（超越男女恋爱的战友/对手/师徒关系）、以及 AI 本身作为叙事对象的元叙事。用户不再满足于'哪个角色对我最好'，而是开始追问'我的选择改变了什么'。谁先把这种需求转化为产品体验，谁就拿到下一个增长点。"
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function IndustryPerspective() {
  return (
    <section id="perspective" className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-surface relative filigree-border overflow-hidden">
      <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-accent/5 organic-shape blur-3xl animate-float pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-12 md:mb-24 border-b border-accent/20 pb-6 md:pb-12">
          <div>
            <span className="gothic-text text-xs md:text-sm tracking-widest opacity-60 block mb-3 text-accent">06 // DOSSIER: PERSPECTIVE</span>
            <h2 className="gothic-text text-3xl md:text-7xl tracking-widest">Industry Perspective</h2>
          </div>
          <p className="font-serif text-lg md:text-2xl italic opacity-80 max-w-md md:text-right text-ink drop-shadow-sm">
            不只是创作者，也是深度用户。从 Glow 到开源社区，从国内 App 到全球平台——我理解这个赛道。
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-16">
          {insights.map((insight, i) => (
            <motion.div 
              key={i} 
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="relative p-6 md:p-16 bg-bg/50 border border-accent/20 rounded-[40px_10px_40px_10px] hover:bg-accent/10 hover:border-accent/50 transition-all duration-700 group hover-trigger shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(139,0,0,0.2)] overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 organic-shape blur-2xl group-hover:bg-accent/30 transition-colors duration-700" />
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-center relative z-10">
                <div className="gothic-text text-4xl md:text-8xl text-accent/20 group-hover:text-accent/60 transition-colors duration-700 drop-shadow-md">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif italic text-2xl md:text-5xl mb-3 md:mb-6 relative inline-block text-ink">
                    {insight.title}
                    <span className="absolute -bottom-2 md:-bottom-4 left-0 w-12 h-[2px] bg-accent group-hover:w-full transition-all duration-700 organic-line"></span>
                  </h3>
                  <p className="font-sans text-sm md:text-xl leading-relaxed opacity-80 group-hover:opacity-100 max-w-4xl text-ink/90 transition-opacity duration-700 mt-4 md:mt-0">
                    {insight.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
