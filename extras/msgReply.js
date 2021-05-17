const msgReply = [
  'Hey! Loser.',
  'xXTheLargeBearXx',
  'Armay likes egirls.',
  'Dude, stop messaging me.',
  'I will literally block you. Go away.',
  'Permanently is a catboy.',
  'Permanently? More like PermanentLOSER.',
  'What\'s that? You like men? Woah, that\'s pretty cool.',
  'Oh my god, is that Joe?'
]

module.exports = function (mc, msg) {
  if (/From\s(\[.{1,}\]\s)?\w{1,16}:\s.{1,}/mi.test(msg)) {
    const rand = Math.floor(Math.random() * (msgReply.length - 1))
    mc.chat('/r ' + msgReply[rand])
    console.log('Replying with response no. ' + rand)
  }
}
