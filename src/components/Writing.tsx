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
  },
  {
    id: "stardate-abyss",
    project: "STARDATE · 星历",
    title: "深渊潮汐 · 限时决策事件",
    subtitle: "决策周期4-6 · 第七深渊站生态危机 · 15个时间槽",
    stamp: "Activity Design",
    preview: "限时不等于焦虑。是你用有限的注意力选择「什么值得关注」。",
    fullText: [
      `【活动概述】`,
      `第七深渊站的海水样本出现异常——如果属实，四个殖民星的饮用水供给将在三到五年内崩溃。但这条消息被淹没在基因质询的舆论浪潮中，只有 317 人看到了它。玩家必须在 3 个决策周期（共 15 个时间槽）内，决定如何分配注意力、调配资源、平衡政治压力与实际救灾。`,
      `—`,
      `【三阶段玩法】`,
      ``,
      `阶段一 · 发现（周期4）：衡私下汇报异常 → 是否调查 → 消耗 1-2 时间槽派遣调查组。关键抉择：公开调查（触发舆论）vs 秘密调查（节省时间但有泄密风险）。`,
      ``,
      `阶段二 · 博弈（周期5）：多方势力介入。Theron 提议由圣序院"协助处理"；潮汐议会要求公开听证会；四个殖民星联合施压。每花一个时间槽处理政治压力，就少一个槽用于实际救灾。`,
      ``,
      `阶段三 · 决断（周期6）：没有完美解法，每种方案都有代价。`,
      `—`,
      `【四条决策路径】`,
      ``,
      `路径 A · 技术优先：投入大量时间槽给科研团队，忽略政治博弈。深渊站得救，但潮汐议会通过不信任动议，支持率下降。`,
      ``,
      `路径 B · 政治妥协：与 Theron 达成交易，用圣序院资源换技术支援。危机高效解决，但圣序院在深渊站获得永久驻扎权。衡对此表达罕见的明确反对。`,
      ``,
      `路径 C · 信息公开：将所有数据公之于众。引发恐慌和囤积潮，两个殖民星骚乱。但民间自发形成技术众筹，出现草根解决方案。最慢但最可持续。`,
      ``,
      `路径 D · 不作为：时间窗口关闭仍未投入足够资源。危机两年后全面爆发。衡的对话变冷："当时 317 个人看到了。您也看到了。"永久改变衡的信任值。`,
    ],
    designNote: "核心设计理念是「限时不等于焦虑，而是选择有重量」。传统限时活动通过倒计时制造紧迫感驱动消费；星历的限时活动通过时间槽稀缺性制造决策张力——你不是在和时间赛跑，你是在用有限的注意力选择什么值得关注。四条路径没有「正确答案」，只有「你愿意付什么代价」。与衡的私人对话中提到的 317 人帖子形成叙事闭环。"
  },
  {
    id: "football-riyou",
    project: "Happy Football · 快乐足球",
    title: "烈日牧歌 · 限时综艺活动",
    subtitle: "14天 · 安达卢西亚荒漠牧场 · 6名球员",
    stamp: "Activity Design",
    preview: "当你剥掉职业身份、社交面具和数字连接之后，剩下的那个人是谁？",
    fullText: [
      `【活动设定】`,
      `休赛期，Oro 俱乐部 6 名球员受邀参加真人秀《Sol y Tierra》，前往安达卢西亚偏远山区的焦石牧场体验两周农牧生活。参与者：内里（队长）、尼科（毒舌门将）、姜鹤鸣 & 姜鹤行（双子）、沈夜舟（社恐中锋）、阿维拉（双面前腰）。`,
      `—`,
      `【节奏设计：四阶段情绪曲线】`,
      ``,
      `Day 1-3 新鲜与混乱：喜剧为主。房间分配冲突（三间房六个人，谁和谁住决定后续私密剧情走向）、尼科被公羊顶进干草堆、井水断供引发第一次集体矛盾。`,
      ``,
      `Day 4-7 摩擦与裂缝：44°C 高温日全员被困室内，密闭空间成为人际关系压力锅。双子因搬石磨事故差点受伤导致罕见争吵。Day 7 每人 15 分钟电话——打给谁暴露了心里真正重要的东西。沈夜舟拨了一个号，没人接，没有第三次。`,
      ``,
      `Day 8-11 危机与真相：沙尘暴+暴雨复合天气。一头公牛撞破围栏逃出，两人必须在能见度两米的风暴中找回它。壁炉夜谈——内里第一次说出"大概还能踢两年"。所有面具在极端环境中失效。`,
      ``,
      `Day 12-14 和解与余韵：橄榄油压榨出来的那一刻六个人同时笑了。最后的晚餐没有摄像机——14 天里第一次完全不被观看。尼科第一次没拍视频："有些东西录下来就不值钱了。"`,
      `—`,
      `【核心机制】`,
      ``,
      `视角选择系统：每天只能跟随 1-2 名角色，其他线通过综艺剪辑回顾、角色闲聊、手机层线索补充碎片。模拟真实综艺的"镜头有限"体验，驱动复玩。`,
      ``,
      `双维度关系值：亲密度（情感距离）× 信任度（信息透明度）。亲密度高但信任度低 = 危险的吸引。信任度高但亲密度低 = 可靠的战友。`,
    ],
    designNote: "这个活动的核心不是"球员去种地多好笑"。它是：当你剥掉一个人的职业身份、社交面具、舒适环境和数字连接之后，剩下的那个人是谁？14 天的设计让关系变化有足够的叙事空间展开，不需要人为加速。视角选择系统制造信息饥渴感——你永远不知道没看到的画面里发生了什么。"
  },
  {
    id: "outlast-analysis",
    project: "Game Analysis",
    title: "《逃生》系列策划视角拆解",
    subtitle: "Red Barrels · Outlast 1 & 2 · 恐怖设计分析",
    stamp: "Analysis",
    preview: "你不是猎人，你是猎物。——但当猎物习惯了被追，恐怖就失效了。",
    fullText: [
      `【核心玩法】`,
      `全程无武器——这是整个恐怖体验的地基。摄像机夜视仪制造精妙矛盾：你必须举起它才能在黑暗中看路，但绿色画面持续制造不安，电池消耗叠加恐怖焦虑形成双重压力。这个机制和 ECHO 的核心能力有相似之处：都是"你必须使用某种能力才能看见真相，但使用本身有代价"。逃生的代价是电池，ECHO 的代价是情绪水位上涨。`,
      `—`,
      `【叙事设计问题】`,
      `碎片化环境叙事（日记、纸条、文件）本身不是问题，问题是信息层级没分好。核心主线信息应该通过不可错过的场景事件传达（强制叙事），补充背景才放在可收集物里。目标是"不收集也能懂主线，收集了能懂更多"，而不是"不收集就看不懂"。`,
      ``,
      `逃生 2 的"找妻子"主线有更强情感驱动力——每次差一点就找到她，这个"近在咫尺"的反复制造了很强的牵引。但宗教隐喻做得过于晦涩，反而让主线变模糊。`,
      `—`,
      `【音效设计亮点】`,
      `德彪西《月光》的使用是教科书级反差设计：极度优美的古典钢琴曲配合极端暴力画面，产生强烈认知失调。大脑同时接收"美"和"恐怖"两个矛盾信号，这种不协调比单纯的恐怖画面更让人深层不安。`,
      ``,
      `这个手法和 ECHO 归乡路的设计哲学高度一致——归乡路的恐怖不来自鬼怪，来自"正常温暖的村庄"和"你正在被当作商品出售"的反差。越正常越恐怖，和越优美越恐怖，是同一种设计逻辑。`,
      `—`,
      `【最大设计问题：恐怖疲劳】`,
      `追逐战在后期重复度高，当玩家习惯了"被追→跑→躲→安全"的循环后，恐惧感断崖式下降。改进方向：在追逐战之间插入更多叙事驱动段落，让玩家从"肾上腺素模式"切换到"好奇心模式"；后期引入新威胁类型打破安全预期；利用环境叙事的信息释放制造新恐惧——从"怕被追"变成"怕知道真相"。`,
      `—`,
      `【对 ECHO 的启示】`,
      `从逃生学到的：恐怖感核心不是视觉刺激而是"信息不对称+无力感"；"有代价的观察"是有效的恐怖模式；"美与恐怖共存"比纯恐怖更有穿透力。ECHO 刻意避开的：逃生的恐怖来自外部威胁，ECHO 的恐怖来自认知觉醒——你发现正常世界的秩序本身是暴力的。逃生让你害怕被杀，ECHO 让你害怕"发现自己一直活在恐怖里而不自知"。`,
    ],
    designNote: "这篇拆解的价值不在于评价逃生好不好，而在于展示"从别人的作品中提炼设计规律，然后应用到自己项目中"的策划思维。每个分析点都对应了 ECHO 的具体设计决策——摄像机→水位系统，《月光》反差→归乡路温暖恐怖，恐怖疲劳→ECHO 的节奏设计。系列拆解持续更新中。"
  },
  {
    id: "ai-companion-analysis",
    project: "Industry Research",
    title: "女性向AI陪伴产品：用户需求与行业机会",
    subtitle: "2026.03 · 10+款产品 · 5个社区 · 8,800+用户样本",
    stamp: "Research",
    preview: "所有人在优化同一个答案。但用户的需求已经开始分层。",
    fullText: [
      `【调研背景】`,
      `2025-2026 年 AI+叙事赛道密集爆发，但"AI 游戏"至少分成六种完全不同的产品形态：AI 文字冒险/MUD（零门槛文字互动）、角色卡/世界书平台（用户自建角色与世界观）、Agent 社会模拟（AI 驱动群体行为）、AI 对话博弈（对话本身为玩法）、AI 陪伴产品（情感陪伴与角色扮演）、叙事游戏+AI 融合（AI 作为动态叙事引擎）。行业讨论经常将这些混为一谈，但它们的用户需求、技术路径和商业模式完全不同。`,
      ``,
      `本次调研聚焦 AI 陪伴类产品——目前用户基数最大、商业化最成熟、但问题也最集中的一类。`,
      `—`,
      `【用户画像：社区数据】`,
      `对 5 个 AI 叙事/角色创作相关社区（总计约 8,800 名用户）进行性别与年龄结构统计，结论高度一致：女性用户占比 54%-74%，00 后占比 58%-67%。Z 世代女性是这个赛道的绝对主力用户群。`,
      `—`,
      `【产品横评：10+ 款 AI 陪伴 App】`,
      `覆盖 TOFAi、mufy、rubii、talkmaker、bimobimo、momood、卿卿我我等主要产品，基于小红书等平台一手用户评价收集。`,
      ``,
      `各产品呈现出明显的"长板-短板"分化：TOFAi 被用户称为"唯一真神"，活人感强、声音可调、永久记忆，但女性角色设计视角单一；mufy 美化精致但模型不稳定；rubii 对话质量高但付费门槛陡峭；talkmaker 仿真聊天界面代入感极强但价格昂贵。`,
      `—`,
      `【五个行业观察】`,
      ``,
      `一、角色设计视角单一。当核心用户 73% 是女性、67% 是 00 后，角色审美与叙事视角的多元性不是附加需求，是产品与用户的基本匹配。`,
      ``,
      `二、付费模型与用户预期错配。用户不是不愿意花钱——愿意为文字质量付费，但抵触"为继续聊天付费"。"越聊越贵"是多款产品的首要负面反馈。`,
      ``,
      `三、叙事质量与视觉包装难以兼得。mufy 美化好但模型不稳定，rubii 模型好但美化简单。用户被迫在"好看"和"好聊"之间二选一。而社区中已有创作者同时做到了高质量前端美化与多模块叙事切换，证明两者并非互斥。`,
      ``,
      `四、记忆系统是长线体验瓶颈。几乎所有产品都被提到记忆混乱、角色性格跑偏（OOC）、无中生有。长线陪伴体验的基础设施问题尚未解决。`,
      ``,
      `五、"活人感"是用户最成熟的评判标准。措辞的层次感、主动发消息的节奏、回应方式的差异——这个群体对 AI 内容质量的判断力比行业预期更高。`,
      `—`,
      `【结论与机会判断】`,
      `AI 陪伴赛道的所有玩家都在优化同一个问题："怎么让 AI 更像一个好的陪伴者？"更好的模型、更好的美化、更好的记忆——优化的是同一个答案。`,
      ``,
      `但用户需求已经开始分层：下沉市场要免费文字互动，主流用户要更好的陪伴体验，而还有一群深度内容用户——对"被爱"审美疲劳、追求决策主导权和世界观深度——目前的供给几乎空白。`,
      ``,
      `赛道中已有先行者在探索不同方向：独立创作者在做 AI 驱动的世界模拟叙事产品，社区用户自发搭建的角色卡和世界书复杂度已超越部分商业产品，独立乙女游戏开始登陆 Steam。这些验证了一件事：AI 在游戏/叙事中的角色不只是"陪你聊天的人"，还可以是"驱动一个世界运转的引擎"。从陪伴工具到叙事引擎，这个进化正在发生。`,
    ],
    designNote: "这篇调研的价值在于：不是泛泛地说"AI 很火"，而是把赛道拆成六种产品形态、用一手数据画出用户画像、用产品横评提炼出五个可操作的行业观察。最后的机会判断直接指向了星历和 ECHO 的设计方向——星历做的正是"对被爱审美疲劳的深度内容用户"的产品，ECHO 做的是"AI 作为叙事引擎而非陪伴工具"的实验。调研不是为了写报告，是为了验证自己的产品判断。"
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
                    if (line.startsWith('【') && line.endsWith('】')) {
                      return (
                        <p key={i} className="gothic-text text-xs tracking-widest text-accent/80 pt-4 pb-2">
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
          <span className="gothic-text text-sm tracking-widest opacity-60 text-accent">05 // DOSSIER: WRITING & ANALYSIS</span>
          <h2 className="gothic-text text-5xl md:text-7xl tracking-widest ml-auto">Writing</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif italic text-xl text-ink/50 mb-16 max-w-2xl"
        >
          Game scripts, activity designs, and competitive analysis. Click any card to read.
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
