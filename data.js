/* All exercises are original foundation practice, not official examination questions. */
const WORDS = `
I|/aɪ/|pron.|我|I study English every day.|我每天学英语。|起步
you|/juː/|pron.|你；你们|You can do it.|你能做到。|起步
we|/wiː/|pron.|我们|We learn together.|我们一起学习。|起步
they|/ðeɪ/|pron.|他们；她们；它们|They work in Shanghai.|他们在上海工作。|起步
be|/biː/|v.|是；处于|I want to be a teacher.|我想成为一名教师。|起步
have|/hæv/|v.|有|I have a new book.|我有一本新书。|起步
do|/duː/|v.|做|I do my homework at night.|我晚上做作业。|起步
go|/ɡəʊ/|v.|去|We go to school by bus.|我们乘公交车去学校。|起步
come|/kʌm/|v.|来|Please come here.|请到这里来。|起步
get|/ɡet/|v.|得到；到达|I get home at six.|我六点到家。|起步
make|/meɪk/|v.|制作；使|Practice makes me happy.|练习让我开心。|起步
take|/teɪk/|v.|拿；花费|It takes ten minutes.|这需要十分钟。|起步
read|/riːd/|v.|阅读|I read a short story.|我读一个小故事。|起步
write|/raɪt/|v.|写|Write your name here.|在这里写下你的名字。|起步
learn|/lɜːn/|v.|学习|It is never too late to learn.|学习永远不晚。|起步
study|/ˈstʌdi/|v./n.|学习；研究|She studies after work.|她下班后学习。|起步
work|/wɜːk/|v./n.|工作|I work in a small shop.|我在一家小店工作。|起步
need|/niːd/|v.|需要|We need more time.|我们需要更多时间。|起步
want|/wɒnt/|v.|想要|I want to learn English.|我想学英语。|起步
help|/help/|v./n.|帮助|This book can help you.|这本书可以帮助你。|起步
time|/taɪm/|n.|时间|Take your time.|慢慢来。|日常
day|/deɪ/|n.|天；白天|Every day is a new start.|每一天都是新的开始。|日常
week|/wiːk/|n.|周；星期|I study five days a week.|我每周学习五天。|日常
morning|/ˈmɔːnɪŋ/|n.|早晨|I read in the morning.|我早晨阅读。|日常
evening|/ˈiːvnɪŋ/|n.|晚上|We walk in the evening.|我们晚上散步。|日常
family|/ˈfæməli/|n.|家庭；家人|My family supports me.|我的家人支持我。|日常
friend|/frend/|n.|朋友|She is my best friend.|她是我最好的朋友。|日常
home|/həʊm/|n./adv.|家；在家|I study at home.|我在家学习。|日常
book|/bʊk/|n.|书|This book is useful.|这本书很有用。|日常
school|/skuːl/|n.|学校|The school is near my home.|学校在我家附近。|日常
teacher|/ˈtiːtʃə/|n.|教师|The teacher explains the word.|老师解释这个单词。|日常
student|/ˈstjuːdənt/|n.|学生|I am a student again.|我又成为了一名学生。|日常
question|/ˈkwestʃən/|n.|问题|Read the question first.|先读题目。|日常
answer|/ˈɑːnsə/|n./v.|答案；回答|Check your answer.|检查你的答案。|日常
language|/ˈlæŋɡwɪdʒ/|n.|语言|English is a language.|英语是一种语言。|日常
practice|/ˈpræktɪs/|n./v.|练习|Daily practice helps me learn.|每天练习帮助我学习。|日常
easy|/ˈiːzi/|adj.|容易的|Start with an easy question.|从一道简单题开始。|描述
difficult|/ˈdɪfɪkəlt/|adj.|困难的|The first step is difficult.|第一步很难。|描述
important|/ɪmˈpɔːtənt/|adj.|重要的|Sleep is important.|睡眠很重要。|描述
different|/ˈdɪfrənt/|adj.|不同的|We have different jobs.|我们有不同的工作。|描述
same|/seɪm/|adj.|相同的|We study at the same school.|我们在同一所学校学习。|描述
good|/ɡʊd/|adj.|好的|This is a good idea.|这是个好主意。|描述
better|/ˈbetə/|adj./adv.|更好的；更好地|I feel better today.|我今天感觉好多了。|描述
small|/smɔːl/|adj.|小的|Small steps bring change.|小小的步伐带来变化。|描述
new|/njuː/|adj.|新的|I learn a new word.|我学一个新单词。|描述
busy|/ˈbɪzi/|adj.|忙碌的|She is busy at work.|她工作很忙。|描述
ready|/ˈredi/|adj.|准备好的|I am ready to begin.|我准备好开始了。|描述
useful|/ˈjuːsfəl/|adj.|有用的|This is a useful method.|这是一个有用的方法。|描述
because|/bɪˈkɒz/|conj.|因为|I rest because I am tired.|因为累了，我休息一下。|连接
so|/səʊ/|conj.|所以|It is late, so I go home.|时间晚了，所以我回家。|连接
but|/bʌt/|conj.|但是|It is hard, but I keep trying.|这很难，但我继续尝试。|连接
and|/ænd/|conj.|和；而且|I read and write every day.|我每天阅读和写作。|连接
if|/ɪf/|conj.|如果|If it rains, we will stay home.|如果下雨，我们就待在家里。|连接
when|/wen/|conj./adv.|当……时；什么时候|Call me when you arrive.|你到了给我打电话。|连接
before|/bɪˈfɔː/|prep./conj.|在……之前|Read before you answer.|回答前先阅读。|连接
after|/ˈɑːftə/|prep./conj.|在……之后|I study after dinner.|我晚饭后学习。|连接
although|/ɔːlˈðəʊ/|conj.|虽然|Although I am busy, I study daily.|虽然很忙，我仍每天学习。|连接
however|/haʊˈevə/|adv.|然而|It is hard. However, I will try.|这很难。然而，我会尝试。|连接
therefore|/ˈðeəfɔː/|adv.|因此|I was ill; therefore, I stayed home.|我病了，因此待在家里。|连接
until|/ənˈtɪl/|prep./conj.|直到|I worked until six.|我一直工作到六点。|连接
improve|/ɪmˈpruːv/|v.|提高；改善|Reading can improve your English.|阅读可以提高你的英语。|进阶
remember|/rɪˈmembə/|v.|记住|Remember this useful phrase.|记住这个有用的短语。|进阶
forget|/fəˈɡet/|v.|忘记|Do not forget your book.|不要忘了你的书。|进阶
understand|/ˌʌndəˈstænd/|v.|理解|I understand this sentence.|我理解这个句子。|进阶
explain|/ɪkˈspleɪn/|v.|解释|Please explain it again.|请再解释一次。|进阶
decide|/dɪˈsaɪd/|v.|决定|I decided to study English.|我决定学习英语。|进阶
develop|/dɪˈveləp/|v.|发展；培养|Develop a good habit.|培养一个好习惯。|进阶
provide|/prəˈvaɪd/|v.|提供|The library provides free books.|图书馆提供免费书籍。|进阶
reason|/ˈriːzən/|n.|原因；理由|What is the reason?|原因是什么？|进阶
result|/rɪˈzʌlt/|n.|结果|Practice can bring better results.|练习可以带来更好的结果。|进阶
change|/tʃeɪndʒ/|n./v.|变化；改变|Small habits can change your life.|小习惯能改变你的生活。|进阶
experience|/ɪkˈspɪəriəns/|n.|经历；经验|She has teaching experience.|她有教学经验。|进阶
education|/ˌedʒuˈkeɪʃən/|n.|教育|Education opens new doors.|教育打开新的大门。|进阶
information|/ˌɪnfəˈmeɪʃən/|n.|信息|Find the information in the text.|在文章里找到信息。|进阶
opportunity|/ˌɒpəˈtjuːnəti/|n.|机会|This is a new opportunity.|这是一个新机会。|进阶
environment|/ɪnˈvaɪrənmənt/|n.|环境|We should protect the environment.|我们应该保护环境。|进阶
health|/helθ/|n.|健康|Walking is good for your health.|散步对健康有好处。|进阶
instead|/ɪnˈsted/|adv.|代替；反而|I walked instead of taking a bus.|我步行了，没有乘公交车。|进阶
in order to|/ɪn ˈɔːdə tə/|phr.|为了|I read in order to learn.|我为了学习而阅读。|进阶
look forward to|/lʊk ˈfɔːwəd tə/|phr.|盼望；期待|I look forward to meeting you.|我期待见到你。|进阶
`.trim().split('\n').map((r,i)=>{let [word,ipa,pos,meaning,example,translation,group]=r.split('|');return {id:'w'+i,word,ipa,pos,meaning,example,translation,group};});

const LESSONS = [
 {id:'l0',title:'先找出：谁，在做什么',tag:'句子起步',minutes:4,desc:'先看清主语、动词、宾语，长句也有骨架。',rule:'主语告诉你“谁”，谓语动词告诉你“做什么”，宾语告诉你“对谁或对什么做”。先抓主干，再补时间和地点。',chunks:[['She','主语 · 她','s'],['reads','谓语 · 读','v'],['a book','宾语 · 一本书','o'],['after work.','时间 · 下班后','x']],translation:'她下班后读一本书。',examples:[['I study English every evening.','I（我）+ study（学）+ English（英语）；every evening 补充时间。'],['My family supports me.','My family（我的家人）+ supports（支持）+ me（我）。']],tip:'先圈动词，再往前找“谁”，最后看动词后面的内容。'},
 {id:'l1',title:'am、is、are 怎么选',tag:'句子起步',minutes:4,desc:'“我是、你是、她是”，把最常见的句型学稳。',rule:'I 用 am；you / we / they 和复数用 are；he / she / it 和单数通常用 is。be 后可以接身份、状态或地点。',chunks:[['She','主语 · 她','s'],['is','be 动词 · 是','v'],['a student.','身份 · 一名学生','o']],translation:'她是一名学生。',examples:[['I am ready.','我准备好了。I 对应 am。'],['The books are on the desk.','书在桌上。books 是复数，所以用 are。']],tip:'先看主语是 I、单数还是复数，再选 be 动词。'},
 {id:'l2',title:'每天做的事：一般现在时',tag:'基础语法',minutes:5,desc:'看到 every day、usually，先想经常发生的事。',rule:'一般现在时表示习惯和通常的事实。肯定句中，第三人称单数后的普通动词通常加 -s / -es。does 后的动词还原。',chunks:[['She','第三人称单数','s'],['studies','study → studies','v'],['English','宾语','o'],['every day.','时间线索','x']],translation:'她每天学习英语。',examples:[['He works in Shanghai.','he 是第三人称单数，因此 work 加 -s。'],['Does she work here?','does 已承担变化，后面用原形 work。']],tip:'主语 he / she / it，肯定句记得检查动词词尾。'},
 {id:'l3',title:'已经发生的事：一般过去时',tag:'基础语法',minutes:5,desc:'yesterday、last week，提示动作发生在过去。',rule:'过去发生的动作常用一般过去时。规则动词通常加 -ed；不规则动词需要记忆，如 go → went、have → had。did 后用动词原形。',chunks:[['I','主语','s'],['visited','visit 的过去式','v'],['my friend','宾语','o'],['yesterday.','过去的时间','x']],translation:'我昨天看望了朋友。',examples:[['She went home early.','go 的过去式是 went。'],['Did you finish the work?','did 后面是原形 finish。']],tip:'先找过去时间词。没有时间词时，还要结合上下文。'},
 {id:'l4',title:'正在做、已经做：别混淆',tag:'基础语法',minutes:6,desc:'is doing 与 has done，说的是不同的时间状态。',rule:'be + 动词 -ing 表示正在进行；have / has + 过去分词表示过去的事与现在有关，也可以表示持续到现在。for + 一段时间、since + 起点常与现在完成时搭配。',chunks:[['She','主语','s'],['is reading','正在读','v'],['a book','宾语','o'],['now.','现在','x']],translation:'她现在正在读书。',examples:[['I have finished my homework.','我已经做完了作业，强调现在已经完成。'],['She has lived here since 2020.','她自 2020 年起一直住在这里。live 的过去分词是 lived。']],tip:'now 常提示进行时；since / for 要结合动作的持续性判断。'},
 {id:'l5',title:'动词后面：to do 还是 doing',tag:'常用搭配',minutes:5,desc:'先记住最实用的四个搭配，再逐步扩展。',rule:'want / decide / plan 后常接 to do；enjoy / finish 后接 doing。介词后面通常接名词或 doing。look forward to 中的 to 是介词。',chunks:[['I','主语','s'],['want','谓语','v'],['to learn English.','want to do','o']],translation:'我想学英语。',examples:[['She enjoys reading.','enjoy doing：她喜欢阅读。'],['I look forward to meeting you.','to 是介词，后面用 meeting。']],tip:'不要只看 to；先把整个搭配识别出来。'},
 {id:'l6',title:'因为、但是、所以：读懂连接词',tag:'阅读起步',minutes:5,desc:'看懂句子之间的关系，比逐字翻译更有用。',rule:'because 引出原因；so 引出结果；but / however 提示转折；although 引出让步。阅读时先标出转折与因果，帮助找到作者重点。',chunks:[['I study','我学习','s'],['because','因为 · 原因关系','v'],['I want to improve.','我想进步','o']],translation:'我学习，因为我想进步。',examples:[['She was tired, but she kept reading.','累了，但是继续读。转折后是“继续读”。'],['Although it rained, we went out.','虽然下雨，我们还是出门了。此句不再加 but。']],tip:'because 和 so 不要在同一组简单因果句里重复使用。'},
 {id:'l7',title:'谁被做了什么：被动与从句',tag:'进阶入门',minutes:6,desc:'识别 be done，再看 who / which 指的是谁。',rule:'被动语态的基本结构是 be + 过去分词，表示主语承受动作。定语从句跟在名词后作说明，who 常指人，which 常指事物。',chunks:[['The book','主语 · 书','s'],['was written','被写 · 被动','v'],['by a teacher.','由一位老师','x']],translation:'这本书由一位老师编写。',examples:[['The woman who teaches us is kind.','who teaches us 修饰 the woman：教我们的那位女士很亲切。'],['The room is cleaned every day.','is cleaned：被打扫。every day 表示习惯，因此 be 用 is。']],tip:'看到 be 不要立刻结束判断：后面是形容词、-ing，还是过去分词？'}
];

const QUESTION_ROWS = [
 ['词汇','起步','learn 最接近哪个意思？',['离开','学习','借出','购买'],1,'learn 表示“学习”。I learn English. 意思是“我学习英语”。','l0'],
 ['语法','起步','I ___ a student.',['is','are','am','be'],2,'主语是 I，be 动词使用 am。完整句：I am a student.（我是一名学生。）','l1'],
 ['句子','起步','She reads a book after work. 这句话是谁在读书？',['她','一本书','工作','我们'],0,'She 是主语，表示“她”；reads 是谓语，a book 是宾语。after work 只是补充时间。','l0'],
 ['词汇','起步','because 表示什么关系？',['并列','转折','选择','原因'],3,'because 意为“因为”，后面解释原因。例如：I rest because I am tired.','l6'],
 ['语法','基础','She ___ English every evening.',['study','studying','studies','to study'],2,'every evening 表示习惯；she 是第三人称单数，study 变成 studies。','l2'],
 ['语法','基础','We ___ to the park yesterday.',['go','went','going','goes'],1,'yesterday（昨天）提示过去时。go 的过去式是 went。','l3'],
 ['句子','起步','My family supports me. 的意思是：',['我支持我的同事。','我每天学习。','我的家人支持我。','我的朋友在工作。'],2,'My family 是“我的家人”，supports 是“支持”，me 是“我”。按主语→动词→宾语理解。','l0'],
 ['语法','基础','I enjoy ___ books.',['read','reads','to read','reading'],3,'enjoy 后面接动词 -ing 形式：enjoy reading，表示“喜欢阅读”。','l5'],
 ['词汇','起步','important 的意思是：',['重要的','容易的','昂贵的','疲惫的'],0,'important 表示“重要的”。Sleep is important.（睡眠很重要。）','l0'],
 ['语法','起步','The books ___ on the desk.',['am','is','are','be'],2,'books 是复数，be 动词用 are。on the desk 表示“在桌上”。','l1'],
 ['语法','基础','Does he ___ here?',['works','work','working','worked'],1,'疑问句里的 does 已经承担第三人称单数变化，后面用动词原形 work。','l2'],
 ['语法','基础','She did not ___ the answer.',['knew','knows','knowing','know'],3,'did not 后接动词原形，所以选 know。know 是“知道”。','l3'],
 ['语法','基础','Look! The children ___ in the garden.',['play','played','are playing','plays'],2,'Look!（看！）提示正在发生的动作。children 是复数，使用 are playing。','l4'],
 ['语法','基础','He has lived in Shanghai ___ 2020.',['for','since','during','at'],1,'2020 是一个时间起点，用 since。for 后接一段时长，如 for three years。','l4'],
 ['语法','基础','I decided ___ English again.',['studying','studies','study','to study'],3,'decide to do 是固定搭配，表示“决定做某事”。','l5'],
 ['语法','基础','I look forward to ___ you.',['meet','met','meeting','meets'],2,'look forward to 中 to 是介词，后面用 meeting。不要把这里的 to 当成不定式标记。','l5'],
 ['语法','基础','She was tired, ___ she finished her work.',['because','but','so','or'],1,'“她很累”与“她完成了工作”是转折关系，用 but（但是）。','l6'],
 ['语法','基础','I stayed at home ___ it was raining.',['because','but','although','or'],0,'后半句“在下雨”解释待在家里的原因，所以使用 because。','l6'],
 ['语法','进阶','This room ___ every day.',['cleans','cleaned','is cleaned','is cleaning'],2,'房间承受“打扫”这个动作，用被动语态。every day 提示一般现在时，结构为 is cleaned。','l7'],
 ['语法','进阶','The woman ___ teaches us English is very kind.',['which','who','where','when'],1,'the woman 是人，且在后面的从句中作 teaches 的主语，使用 who。','l7'],
 ['语法','基础','If it rains tomorrow, we ___ at home.',['stayed','stay','would stay','will stay'],3,'真实条件句中，if 从句用一般现在时表示将来，主句用 will + 原形。','l2'],
 ['语法','基础','You ___ wear a seat belt in a car.',['should','to','are','were'],0,'should 表示“应该”，后面接动词原形 wear。其余选项无法构成此句的正确结构。','l2'],
 ['词汇','基础','improve 的意思是：',['忘记','降低','提高；改善','到达'],2,'improve 表示“提高；改善”。improve your English 就是“提高你的英语”。','l0'],
 ['词汇','基础','however 最接近哪个意思？',['因此','然而','例如','同时'],1,'however 表示转折“然而”，常提示后文与前文不同。','l6'],
 ['语法','起步','He is ___ English teacher.',['a','an','the one','two'],1,'English 的开头是元音音素 /ɪ/，首次泛指“一名英语老师”用 an。','l1'],
 ['语法','基础','This book is ___ than that one.',['useful','most useful','more useful','usefully'],2,'than 表示比较，useful 的比较级是 more useful。','l2'],
 ['语法','基础','There ___ some water in the glass.',['are','is','have','do'],1,'water 是不可数名词，there be 结构使用单数形式 is。','l1'],
 ['语法','基础','It takes me ten minutes ___ to school.',['walk','walking','walked','to walk'],3,'It takes somebody some time to do something：做某事花某人多长时间。','l5'],
 ['句子','起步','I study English after dinner. 哪部分表示“晚饭后”？',['I study','English','after dinner','study English'],2,'after 表示“在……之后”，dinner 是“晚饭”，after dinner 表示时间。','l0'],
 ['句子','基础','Although the question is difficult, I will try. 最合适的理解是：',['因为问题简单，所以放弃。','虽然题目难，但我会尝试。','问题很难，所以不看了。','我还没有看到题目。'],1,'although 表示“虽然”。先抓两个主干：the question is difficult；I will try。','l6'],
 ['词汇','基础','in order to 的意思是：',['为了','相反','直到','除非'],0,'in order to 表示目的“为了”，后接动词原形。','l5'],
 ['语法','基础','She has already ___ her homework.',['finish','finishes','finishing','finished'],3,'现在完成时用 have/has + 过去分词。finish 的过去分词是 finished。','l4']
];
const QUESTIONS = QUESTION_ROWS.map((r,i)=>({id:'q'+i,type:r[0],level:r[1],text:r[2],options:r[3],answer:r[4],explain:r[5],lesson:r[6]}));
// Deterministic vocabulary drills cover every card, with distinct distractors.
WORDS.forEach((w,i)=>{
 const distractors=[];
 for(let step=1;step<WORDS.length&&distractors.length<3;step++){
  const other=WORDS[(i+step*13)%WORDS.length];
  if(other.meaning!==w.meaning&&!distractors.includes(other.meaning))distractors.push(other.meaning);
 }
 const answer=(i*7+1)%4,options=distractors.slice();options.splice(answer,0,w.meaning);
 QUESTIONS.push({id:'v'+i,type:'词汇',level:w.group==='进阶'?'基础':'起步',text:`${w.word} 在这句中的意思是？\n${w.example}`,options,answer,explain:`${w.word}（${w.pos}）表示“${w.meaning}”。例句：${w.example} 中文意思：${w.translation}`,lesson:w.group==='连接'?'l6':'l0'});
});
const READINGS = [
 {id:'r0',title:'下班后的二十分钟',level:'入门 · 61 词',text:'Anna works in a small shop in Shanghai. She wants to improve her English, but she is busy every day. After dinner, she reads English for twenty minutes. Her husband helps her remember new words. At first, she can only read short sentences. After three months, she can understand a short story. Anna is happy because she can see her progress.',translation:'安娜在上海的一家小店工作。她想提高英语，但每天都很忙。晚饭后，她读二十分钟英语。她的丈夫帮助她记新单词。起初，她只能读短句。三个月后，她能看懂一个小故事了。安娜很开心，因为她看到了自己的进步。',gloss:'improve 提高 · husband 丈夫 · at first 起初 · progress 进步',questions:[['When does Anna read English?',['Before work.','After dinner.','At midnight.','Only on Sundays.'],1,'原文直接写道 After dinner, she reads English for twenty minutes.，答案定位在第三句。'],['Who helps Anna with new words?',['Her teacher.','Her mother.','Her husband.','Her boss.'],2,'Her husband helps her remember new words. 中 husband 是“丈夫”。'],['Why is Anna happy?',['She can see her progress.','She has a new job.','She has more money.','She no longer needs English.'],0,'最后一句中的 because 引出原因：she can see her progress（她能看到自己的进步）。']]},
 {id:'r1',title:'图书馆的新计划',level:'基础 · 72 词',text:'The City Library has a new reading program for adults. Every Saturday morning, a teacher helps learners read simple English stories. The program is free, but learners need to bring a notebook. Many people join because they want to learn with others. The teacher says, "You do not need to understand every word. First, find the main idea. Then read again for details." The program will continue for eight weeks.',translation:'市图书馆为成人开设了一个新的阅读项目。每周六上午，一位老师帮助学习者读简单的英语故事。项目免费，但学习者需要带笔记本。许多人参加是因为想和别人一起学习。老师说：“你不需要理解每一个单词。先找主旨，再读一遍看细节。”项目会持续八周。',gloss:'adult 成人 · free 免费的 · main idea 主旨 · detail 细节',questions:[['What should learners bring?',['A dictionary.','Money.','A notebook.','A computer.'],2,'用 bring（带来）定位：learners need to bring a notebook。'],['What does the teacher suggest doing first?',['Finding the main idea.','Translating every word.','Writing a long story.','Reading every detail.'],0,'First 是顺序提示词，其后是 find the main idea（找主旨）。'],['How long will the program last?',['Two weeks.','Four weeks.','Six weeks.','Eight weeks.'],3,'最后一句的 continue for eight weeks 表示持续八周。']]},
 {id:'r2',title:'把小目标变成习惯',level:'基础 · 77 词',text:'Many adults stop learning because their plans are too difficult. They may decide to study for two hours every night. However, work and family often make this impossible. A smaller plan can work better. For example, learning five words while waiting for a bus is a useful start. When a small action becomes a habit, it is easier to continue. The important thing is to keep learning regularly, rather than to do everything in one day.',translation:'许多成年人停止学习，因为他们的计划太难。他们可能决定每晚学两小时。然而，工作和家庭常常使这无法实现。小一点的计划可能更有效。例如，等公交时学五个单词就是一个有用的开始。当小行动成为习惯，坚持就会更容易。重要的是规律地学，而不是一天内做完所有事。',gloss:'impossible 不可能的 · habit 习惯 · regularly 有规律地 · rather than 而不是',questions:[['Why do many adults stop learning?',['They have no books.','Their plans are too difficult.','They dislike all languages.','They do not work.'],1,'首句 because 后面直接说明原因：their plans are too difficult。'],['What is given as a useful start?',['Studying all night.','Buying many books.','Learning five words while waiting for a bus.','Reading only once a month.'],2,'For example 后面提供具体例子，定位 learning five words while waiting for a bus。'],['What is the main idea?',['Do everything in one day.','Only children can learn.','Family is unimportant.','Small, regular actions can help learning.'],3,'文章反复强调 smaller plan、small action、habit 和 regularly，主旨是小步、规律地坚持。']]},
 {id:'r3',title:'不用急着查每一个词',level:'基础 · 80 词',text:'When Li reads an English text, he used to stop at every new word. As a result, he often forgot what the text was about. His teacher suggested a different method. First, read the title and the questions. Next, read the text quickly to get a general idea. Finally, look for information that answers each question. Li still uses a dictionary, but only after he has tried to understand the meaning from the words around a difficult word.',translation:'李读英语文章时，以前遇到每个生词都会停下。因此，他经常忘记文章在讲什么。老师建议换个方法。先读标题和题目，再快速读文章了解大意，最后找出回答每个问题的信息。李仍会使用词典，但只有先尝试根据难词周围的词理解意思之后才查。',gloss:'used to 过去常常 · as a result 因此 · method 方法 · general idea 大意',questions:[['What problem did Li have?',['He forgot the topic after stopping at every new word.','He could not find his books.','He never read titles.','He had no dictionary.'],0,'第二句说明结果：频繁停下来查生词后，忘记文章内容。'],['What should Li read first?',['Only the last sentence.','Every word in a dictionary.','The title and the questions.','The answers.'],2,'First 后面是 read the title and the questions，按顺序词定位。'],['Does Li still use a dictionary?',['No, never.','Yes, after trying to understand from context.','Only before reading the title.','Only to read Chinese stories.'],1,'最后一句 still 表示“仍然”，but only after 说明先根据上下文猜意思，再查词典。']]}
];
READINGS.forEach(r=>r.questions.forEach((x,i)=>QUESTIONS.push({id:r.id+'q'+i,type:'阅读',level:'基础',text:x[0],options:x[1],answer:x[2],explain:x[3],lesson:'l6',reading:r.id})));
const PATHS = {school:'校内学位外语考试',cet:'CET-4 四级',pets:'PETS-3 笔试（上海考点）',self:'自考英语（本校准考证）'};
const SOURCE_URL='https://cce.shu.edu.cn/xljy/cjwen_ti.htm';
const RULE_URL='https://cce.shu.edu.cn/info/1542/15574.htm';
