import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface ScriptCard {
  id: string;
  project: string;
  title: string;
  subtitle: string;
  stamp: string;
  preview: string;
  fullText: string[];
  designNote: string;
}

const scripts: ScriptCard[] = [
  {
    id: "stardate-heng",
    project: "STARDATE · 星历",
    title: "衡的第一次私人对话",
    subtitle: "决策周期1 · 终端室 · 深夜",
    stamp: "Cognitive Resonance",
    preview: "他在所有人盯着热搜的时候，独自翻完了论坛最底层的帖子。",
    fullText: [
      `（终端室。政务处理结束。STARDATE终端界面缓缓切换为待机状态，屏幕上星图缓慢旋转。室内只剩终端的淡蓝光和窗外的星光。）`,
      `衡　今天的事件已经全部归档。您还需要什么吗，陛下？`,
      `（停顿。他没有像平时一样转身离开。手指停在终端边缘，像是在犹豫什么。）`,
      `衡　......我注意到一件事。`,
      `（他调出星网论坛页面。屏幕上是今天基因质询后的热门帖子，阅读量和评论都在飞涨。）`,
      `衡　星网上关于今天质询的讨论，阅读量已经突破四千万。热搜第一。`,
      `衡　但您知道今天真正重要的事是什么吗？`,
      `（他滑动页面，翻到一条浏览量只有三百多的帖子。标题：「潮汐议会第七深渊站的海水样本异常，有人关注吗？」）`,
      `衡　三百一十七次浏览。零条评论。`,
      `衡　基因质询会过去的。这种事每隔几年就来一次，各方表演一番，然后归档。但这条......海水样本异常如果属实，意味着第七深渊站的生态循环可能在三到五年内崩溃。那个站供养着四个殖民星的饮用水。`,
      `（他关掉页面。看着你。表情没有变化，但语气里有一丝......不是焦虑，更像是一种熟悉的疲倦。）`,
      `衡　星网上最热门的帖子，从来不是最重要的那个。`,
      `—`,
      `▶ "你为什么给我看这个？"`,
      ``,
      `衡　因为四千万人在关注的事，不需要您关注。有四千万人替您盯着。`,
      `衡　但三百一十七个人看到的东西，如果您不看，就真的没人看了。`,
      ``,
      `▶ "......三到五年。够我们做点什么吗？"`,
      ``,
      `（衡看了你一秒。很短。但你感觉到他记住了什么。）`,
      `衡　......够。如果从明天开始。`,
      `（他转身准备离开。走了两步，回头。）`,
      `衡　大多数人问的第一个问题是「这会影响我的支持率吗」。`,
      `衡　您问的是「够不够时间」。`,
      `衡　......晚安，陛下。`,
    ],
    designNote: "衡没有说任何「好听的话」。吸引力来自智识层面的升维，不是情感层面的依赖——他让你看到了你自己没看到的东西。无论玩家选哪个选项，衡都不会给出超出当前关系阶段的回应。第一次私人对话就是这个温度：不冷不热，但有密度。"
  },
  {
    id: "stardate-theron",
    project: "STARDATE · 星历",
    title: "Theron Voss 觐见",
    subtitle: "决策周期4 · 觐见厅 · 决策紧张度 HIGH",
    stamp: "Antagonist Entry",
    preview: "最好的反派不是让你恨他的人，是让你差点同意他的人。",
    fullText: [
      `（觐见厅。高挑的穹顶，金铜色调。帝国仪仗列队两侧。衡站在你右后方，终端投影悬浮在他掌心上方。）`,
      `（厅门打开。Theron Voss走进来。）`,
      `（他走路的方式让你注意到一件事：这个人不紧张。不是在掩饰紧张，是真的不紧张。像是走进自己家的客厅。）`,
      `Theron　陛下。`,
      `（他行礼。标准的联邦外交礼。但幅度比标准的浅了大概两度——如果你注意到了的话。）`,
      `衡　（低声，只有你能听见）他提前了三个周期。`,
      `Theron　我今天来，不是为了潮汐议会那边的质询。那件事......坦率地说，不值得占用您的时间。一些学者的表演，每隔几年来一次。`,
      `Theron　我来是想聊一个更有意思的话题。`,
      `Theron　陛下觉得，人类的审美是天生的，还是被塑造的？`,
      `—`,
      `▶ "被塑造的。但你已经知道答案了，对吧？"`,
      ``,
      `Theron　......是的。我知道答案。`,
      `Theron　但「知道答案」和「知道该怎么用这个答案」，是两件事。`,
      `Theron　圣序院三百年来做的事，不是控制。是......整理。人类本来就是混乱的，自私的，短视的。我们只是......帮他们少走一些弯路。`,
      `（他停顿了一下。下一句话的语气变轻了，像是在自言自语。）`,
      `Theron　您知道吗，陛下。被筛选过的人类，比没被筛选过的人类......幸福得多。数据是清楚的。焦虑指数下降47%，自杀率下降62%，社会冲突减少81%。`,
      `Theron　如果幸福是目的，我们做的事......是对的。`,
      `Theron　问题只在于：幸福是不是唯一的目的。`,
      `（他对你微笑。这是今天最危险的一刻——不是因为他在威胁你，是因为他说的话有一半是对的。）`,
      `—`,
      `（Theron站起来。整理袖口。走向门口。在门槛前停下。回头。）`,
      `Theron　对了，陛下。一个小建议。`,
      `Theron　星网上有一条帖子，关于第七深渊站的海水样本。浏览量很低。但如果我是您，我会看一看。`,
      `（他走了。门关上。）`,
      `（你愣了一秒。他怎么知道那条帖子？衡昨晚才给你看的。）`,
      `衡　......他知道的比我预想的多。`,
      `衡　或者......他想让我们以为他知道的比我预想的多。`,
    ],
    designNote: "Theron 没有做任何「坏事」。他甚至说了一些对的话。最好的反派不是让你恨他的人，是让你差点同意他的人。他最后提到第七深渊站——这条信息昨晚衡才私下给你看过——意味着两种可能：要么他的情报网渗透了衡的信息渠道，要么他在虚张声势。这不是拳头对拳头的战争，是信息对信息的战争。"
  },
  {
    id: "echo-guixianglu",
    project: "Project ECHO · 归乡路",
    title: "厨房无人 · 碗底红纸",
    subtitle: "场景五至六 · 大伯家 · 水位+15",
    stamp: "Folk Horror",
    preview: "所有迹象都表明三十秒前有一个人站在这里。你没有问「婶子呢」。你说不清为什么没问。",
    fullText: [
      `（大伯说到一半，厨房的声音停了。）`,
      `（你转头看向厨房方向。）`,
      `（门半开着。灶台上的锅还在冒热气。油烟在灯光下浮动。但厨房里——）`,
      `（没有人。）`,
      `（安静。连灶台上锅里的气泡声都听得见。持续两秒。）`,
      `（碗筷已经洗好了，整齐地摞在沥水架上。围裙挂在门后的钉子上。抹布搭在水龙头上，是湿的。灶台边的墙上贴着一张褪色的照片，一个年轻女人站在某个单位门口，穿着体面的衬衫，笑容很明亮。照片边缘被油烟熏黄了。）`,
      `（所有迹象都表明三十秒前有一个人站在这里。）`,
      `大伯　（完全没注意到你在看厨房）你弟明年可得加把劲了。房子、车、席面，哪样不要钱？以后家里这一摊子事还得靠他。`,
      `（你回过头。弟弟又在看手机了，但屏幕没亮。他只是盯着黑屏看。大伯在喝酒。）`,
      `（你看了一眼桌上的菜。六七个菜。）`,
      `（你没有问「婶子呢」。你说不清为什么没问。）`,
      `—`,
      `（晚饭继续。大伯在喝酒，话多起来了。）`,
      `大伯　你这几天跟着你婶子学几道菜，也算个本事。以后找个靠得住嘞人，安安稳稳嘞，像我和你婶子。`,
      `（这句话听起来很温暖。大伯喝了点酒脸红红的，说这话的时候笑眯眯的。他在关心你。你应该被感动。）`,
      `（但你没有被感动。你的手指在桌子底下攥了一下。）`,
      `（你说不清为什么。）`,
      ``,
      `▶ 深入`,
      ``,
      `（画面没有变。桌子还是那张桌子，菜还是那些菜。大伯还是笑眯眯的。）`,
      `（但你注意到了自己的情绪。）`,
      `（你看着眼前的饭菜、笑眯眯的大伯、盯着黑屏的弟弟、空着的厨房。所有东西都没变。但你的眼睛不一样了。）`,
      `（大伯笑眯眯地又给你夹了一筷子豆角，你的碗已经堆得像个小坟包。）`,
      `大伯　吃，快吃！回了家就别客气，把身子补匀称了，爷爷在底下看着也高兴。`,
      `（你不再接话，加快了吃饭速度。就在你拨开米饭时，你发现白瓷碗的底部，隐约透出一抹刺眼的鲜红。）`,
      `（你握着筷子的手僵住了。你慢慢拨开剩下的米饭......一张窄窄的、被油渍浸染成半透明的红纸，像是长在碗底的。）`,
      `（上面用毛笔写着密密麻麻的黑字。）`,
      `（最末尾那几个字已经看不清了。）`,
      `大伯　（声音突然变近，仿佛贴在你耳边）咋不吃了？是不合胃口？`,
    ],
    designNote: "婶子做了六七个菜，不在桌上。她不是「不在」，是「不被看见」。没有超自然特效，变的只有玩家的理解。最恐怖的不是世界变了，是世界一直是这样的。碗底红纸不是 Jump Scare，是你自己选择「深入」之后才看见的——恐怖是你自己发现的，不是游戏塞给你的。"
  }
];

function ScriptCardComponent({ card }: { card: ScriptCard }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Card */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative border border-accent/20 bg-gradient-to-br from-surface/90 to-bg/90 backdrop-blur-sm rounded-sm overflow-hidden cursor-none transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(139,0,0,0.15)]"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-accent/10">
          <span className="gothic-text text-[9px] tracking-[0.2em] text-accent/70">{card.project}</span>
          <span className="gothic-text text-[9px] tracking-[0.15em] text-ink/30 border border-ink/10 px-3 py-1 rounded-full">{card.stamp}</span>
        </div>

        {/* Content */}
        <div className="px-6 py-8 space-y-4">
          <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">{card.title}</h3>
          <p className="gothic-text text-[10px] tracking-widest text-ink/40">{card.subtitle}</p>
          <p className="font-serif italic text-lg text-ink/70 leading-relaxed mt-4">"{card.preview}"</p>
          
          <div className="flex items-center gap-2 pt-4">
            <span className="gothic-text text-[10px] tracking-widest text-accent/60">
              {isOpen ? 'CLICK TO CLOSE' : 'CLICK TO READ'}
            </span>
            <motion.span 
              animate={{ rotate: isOpen ? 180 : 0 }} 
              transition={{ duration: 0.3 }}
              className="text-accent/60 text-sm"
            >
              ▼
            </motion.span>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-accent/10 px-6 py-8 space-y-1">
                {/* Script text */}
                <div className="font-serif text-base leading-[2] text-ink/85 space-y-1">
                  {card.fullText.map((line, i) => {
                    if (line === '—') {
                      return <div key={i} className="border-t border-accent/10 my-6" />;
                    }
                    if (line === '') {
                      return <div key={i} className="h-3" />;
                    }
                    if (line.startsWith('▶')) {
                      return (
                        <p key={i} className="text-accent font-sans text-sm tracking-wide py-2">
                          {line}
                        </p>
                      );
                    }
                    if (line.startsWith('（') && !line.includes('　')) {
                      return (
                        <p key={i} className="italic text-ink/50 text-sm leading-relaxed">
                          {line}
                        </p>
                      );
                    }
                    return (
                      <p key={i} className="leading-[2]">
                        {line}
                      </p>
                    );
                  })}
                </div>

                {/* Design note */}
                <div className="mt-8 pt-6 border-t border-accent/10">
                  <div className="flex items-start gap-4">
                    <span className="gothic-text text-[9px] tracking-[0.2em] text-accent shrink-0 pt-1">DESIGN NOTE</span>
                    <p className="text-sm text-ink/50 leading-relaxed font-light">{card.designNote}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Writing() {
  return (
    <section id="writing" className="py-32 px-6 md:px-12 lg:px-24 border-t border-accent/20 relative">
      <div className="absolute top-[20%] left-[-5%] w-[30vw] h-[30vw] bg-accent/3 organic-shape blur-3xl animate-float pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-center gap-4 mb-20 border-b border-accent/20 pb-8"
        >
          <span className="gothic-text text-sm tracking-widest opacity-60 text-accent">05 // DOSSIER: SCRIPTS</span>
          <h2 className="gothic-text text-5xl md:text-7xl tracking-widest ml-auto">Writing</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif italic text-xl text-ink/50 mb-16 max-w-2xl"
        >
          Game scripts from two projects. Click any card to read the full scene.
        </motion.p>

        <div className="space-y-6">
          {scripts.map(card => (
            <ScriptCardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
