const reg = [
  /(will|wo?uld)(\s{0,}\w{1,}){0,16}\s{1,}for\s{0,}a?\s{1,}(m\.?v\.?p|v\.?i\.?p|rank|\+|(\w{1,}\s{0,})cosmetics?)/gmi, // will/would _____ for (a) m(.)v(.)p/v(.)i(.)p/rank/+/(* )cosmetic(s)
  /(gi{1,}mm{1,}e{1,}|(f|g)e{1,}t{1,}|give)\s{0,}(me{1,})?\s{0,}a?\s{1,}(\d{0,6}(\s|-){0,}(mon?ths?|years?|days?)?\s{1,})?(m\.?v\.?p|v\.?i\.?p|rank|\+|(.{2,10}\s{0,})?cosmetics?|go{1,}l{1,}d{1,})/gmi, // gimme/(f|g)et/give (me) (a) ([0-9] month(s)/year(s)/day(s)) m(.)v(.)p/v(.)i(.)p/rank/+/(* )cosmetic(s)/gold
  /i?\s{1,}(want|only)\s{1,}(want|only)?\s{1,}(m\.?v\.?p|v\.?i\.?p|rank|\+|(.{2,10}\s{0,})?cosmetics?)/gmi, // (i) "only want"/"want only" m(.)v(.)p/v(.)i(.)p/rank/+/(* )cosmetic(s)
  /(donat{1,}e{1,}|gif{1,}t{1,}|ra{1,}n{1,}k{1,}\s{1,}m{1,}e{1,}|bu{1,}y{1,})\s{1,}(m{1,}e{1,})?(\s{0,}a\s{0,})?(m{1,}e{1,}|m\.?v\.?p|v\.?i\.?p|rank|\+|(.{2,10}\s{0,})?cosmetics?)/gmi, // donate/gift/rank/buy (me) ((a) m(.)v(.)p/v(.)i(.)p/rank/+/(* )cosmetic(s)) [note: excludes "ranked bedwars"]
  /any{1,}\s{0,}.{0,10}\s{1,}gifters\s{0,}\?{0,}/gmi, // any (*) gifters( ?)
  /p{1,}l{1,}(e{1,}a{1,}s{1,}e{1,}|i?s{1,}|z{1,})\s{1,}(m\.?v\.?p|v\.?i\.?p|rank|\+|(.{2,10}\s{0,})?cosmetics?)/gmi, // pls/please m(.)v(.)p/v(.)i(.)p/rank/+/(* )cosmetic(s)
  /(m\.?v\.?p\+?|v\.?i\.?p\+?|rank|\+\+|(.{2,10}\s{0,})?cosmetics?)\s{1,}p{1,}l{1,}(e{1,}a{1,}s{1,}e{1,}|i?s{1,}|z{1,})/gim, // m(.)v(.)p(+)/v(.)i(.)p(+)/rank/++/(* )cosmetic(s) pls/please
  /i?\s{0,}(just|really|rly)?\s{0,}(want|wo?uld like)\s{0,}a?\s{1,}(m\.?v\.?p|v\.?i\.?p|rank|\+|(.{2,10}\s{0,})?cosmetics?)/gmi, // (i) (just/really/rly) want/would like ((a) m(.)v(.)p/v(.)i(.)p/rank/+/(* )cosmetic(s)
  /se{1,}n{1,}d{1,}\s{0,}a?\s{1,}me\s{0,}a?\s{1,}(m\.?v\.?p|v\.?i\.?p|rank|\+|(.{2,10}\s{0,})?cosmetics?)/gim, // send (a) me (a) m(.)v(.)p(+)/v(.)i(.)p(+)/rank/++/(* )cosmetic(s)
  /looking\s{1,}for\s{0,}a?\s{1,}(m\.?v\.?p\s{1,}gif{1,}t{1,}|v\.?i\.?p\s{1,}gif{1,}t{1,}|rank|\+|(.{2,10}\s{0,})?cosmetics?)/gim, // looking for (a) m(.)v(.)p(+) gift/v(.)i(.)p(+) gift/rank/++/(* )cosmetic(s)
  /can\s{1,}i\s{1,}(p{1,}l{1,}(e{1,}a{1,}s{1,}e{1,}|i?s{1,}|z{1,})\s{1,})?ha(s|ve?)\s{1,}(m\.?v\.?p|v\.?i\.?p|rank|\+|(.{2,10}\s{0,})?cosmetics?)/gim, // can i (please/pls/plz)? have/has m(.)v(.)p/v(.)i(.)p/rank/+/(* )cosmetic(s)
  /pl(s{1,}|ease{1,})\s{0,}\/?gi{1,}ft/gmi // pls/please (/)gift
]

module.exports = reg
