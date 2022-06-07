/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    '(Multiply Earnings)': '(收益倍数)',
    'Action': '操作',
    'Action:': '操作:',
    'Buy Col': '购买列',
    'Buy Row': '购买行',
    'Clear Grid': '清除网格',
    'color/action.': '颜色/操作.',
    'Current': '当前',
    'Current Bonus': '当前奖励',
    'Factory': '工厂',
    'Hire': '雇佣',
    'minutes': '分钟',
    'Money: $': '金钱: $',
    'numbers.': '数字.',
    'RESET': '重置',
    'Rules/Help': '规则/帮助',
    'Selected': '已选择',
    'seller': '出售者',
    'buyer': '购买者',
    'Travel': '旅行',
    'Upgrade': '升级',
    'Upgrades': '升级',
    'Welcome back!': '欢迎回来!',
    'WRONG!': '错误！',
    'Workers': '工人',
    'You have to assign your workers on each cell and an action for them by clicking in the cell and after': '您必须在每个单元格上分配您的工人，并通过单击该单元格并在其后为他们分配一个操作',
    'You earn money by completing without repeating in the same row or column like this': '您无需重复在相同的行或列中填写即可赚钱',
    'You make money selling glass, to make glass you need to buy sand and melt it.': '您通过卖玻璃赚钱，要制造玻璃，您需要购买沙子并将其熔化。',
    'none': '无',
    'Sand': '沙子',
    'Prestige': '声望',
    'Prestige Points': '声望点',
    'Sand Price: $': '沙子价格: $',
    'The game tracks your offline progress.': '游戏会跟踪您的离线进度。',
    'with the same': '一样的',
    'There\'s bonus': '有奖励',
    'typing': '输入',
    'Multiplier': '倍数',
    'melting': '融化',
    'Increase Glass Base Price from $': '提高玻璃基本价格从$',
    'Increase Glass Capacity from': '增加玻璃容量',
    'Increase Glass Melting rate from': '提高玻璃的熔化速度',
    'Increase Sand Capacity from': '增加沙子容量',
    'Increase Sand Buyers rate from': '提高沙子购买率',
    'Increase Sellers rate from': '提高销售率',
    'increasing costs per win': '提高每次胜利的成本',
    'Sudoku Factory': '数独工厂',
    '10% increase': '增加10％',
    'Earn $': '获得 $',
    'Earnings per win p/sec': '每胜一局收益/每秒',
    'Extra Bonus': '额外奖励',
    'for every complete row or column': '对于每一个完整的行或列',
    'Glass': '玻璃',
    'Glass Price: $': '玻璃价格: $',
    'Hire Worker': '雇佣工人',
    'Idle Sudoku Factory': '数独工厂放置',
    'Money p/sec: $': '钱/每秒: $',
    'on Prestige': '声望时',
    'on time per win': '每赢一次时',
    'per win': '每次获胜',
    'Prestige Points Means': '声望点意味着',
    'Time for refill': '时间再填充',
    'without repeating': '不重复',
    'workers without': '没有工人',
    'the value': '值',
    'Play the mini-games in the Anti-Clicker tab to earn money,workers and time travel': '玩“反点击器”选项卡中的迷你游戏以赚钱，工作和旅行',
    'Sudoku 3x3 earnings per win increase per second': '数独每赢3x3每秒增加的收益',
    'The dashed blocks number can\'t be changed, only they action, they are extra workers.': '虚线框号不能更改，只有它们起作用，它们是额外的工人。',
    'Available': '可用',
    'Autosaved': '已自动保存',
    'Tip': '提示',
    'to': ' 到 ',
    'to $': '到 $',
    'x to': 'x 到 ',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "Start upgrading the earnings per win increase per second on the": "开始升级每赢每秒增加的收益",
    "p/sec - Next": "每/秒 - 下一个",
    "Anti-Clicker (Earn $": "反点击器（收入$",
    "Welcome to Idle Sudoku Factory (v1.1). Here are some rules": "欢迎来到数独工厂放置 (v1.1)。这里有一些规则",
    "You earn money by completing without repeating in the same row or column like": "你可以通过不重复完成同一行或同一列来赚钱",
    "You can travel the time by completing without repeating in the same row or column and 2x3 box like": "你可以通过不重复完成相同的行或列和2x3方框来旅行时间",
    "You can earn free workers by completing without repeating in the same row or column and 3x3 box like": "你可以通过不重复完成相同的行或列和3x3框来赚取免费工人",
    "Research (Coming Soon": "研究(即将推出",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "!!!": "!!!",
    "this": "这个",
    "upgrades tab.": "升级标签.",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "go to upgrades tab,last item": "转到升级选项卡，最后一项",
    " sales/sec": " 出售/秒",
    " Multiplier": " 倍",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(\d+) Multiplier$/, '$1 倍'],
    [/^You earned \$ (.+) when offline.$/, '在你离开的时你获得了 \$ $1 。'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);