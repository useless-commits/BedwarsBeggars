require('dotenv').config()
const Mineflayer = require('mineflayer')
const regex = require('./regex.js')

const config = {
  host: process.env.HOST,
  port: process.env.PORT || 25565,
  auth: process.env.AUTH,
  version: process.env.VERSION,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}

const mc = Mineflayer.createBot(config)
mc.settings.viewDistance = 'tiny'

let whereami = ''

function get2BwLob1 (t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      if (whereami !== 'bedwarslobby1') {
        if (/bedwarslobby\d{1,3}/gi.test(whereami)) {
          console.log('Attempting to switch to bedwars lobby 1...')
          mc.chat('/swaplobby 1')
        } else {
          console.log('Sending to any bedwars lobby...')
          mc.chat('/l bw')
        }
      }
    }, t)
  })
}

function antiAFK (t) {
  return new Promise(function (resolve) {
    setTimeout(async function () {
      console.log('Moving forward...')
      mc.setControlState('forward', true)
      Promise(function (resolve) {
        setTimeout(function () {
          mc.setControlState('forward', false)
          console.log('Executing /stuck...')
          mc.chat('/stuck')
          antiAFK(30000)
          resolve('Done?')
        }, 500)
      })
    }, t)
  })
}

antiAFK(30000)

mc.on('login', () => {
  mc.chat('/whereami')
})

mc.on('messagestr', async (msg) => {
  let beggar = false

  if (msg.startsWith('You are currently ') && (msg.includes('in limbo') || msg.includes('connected to server '))) {
    const waiSplt = msg.split(' ')
    whereami = waiSplt[waiSplt.length - 1]
    console.log('Currently in \x1b[33m' + whereami)
    await get2BwLob1(1000)
  }

  if (msg.startsWith('You were kicked while joining that server!')) {
    await get2BwLob1(500)
  }

  if (process.env.AUTO_RESPONSE.toLowerCase() === 'true') require('./extras/msgReply.js')(mc, msg)

  regex.forEach((pattern) => {
    if (pattern.test(msg)) beggar = true
  })

  if (beggar) {
    console.log('\x1b[31mBEGGAR > \x1b[0m' + msg)
  } else {
    console.log('\x1b[32mIngame > \x1b[0m' + msg)
  }
})

mc.on('kicked', (reason) => {
  console.log('\nKicked from server:\n\n' + reason)
  process.exit(0)
})

mc.on('end', () => {
  console.log('\nNo longer connected to server.')
  process.exit(0)
})

mc.on('error', (err) => {
  console.log('\nError:\n\n' + err)
  process.exit(1)
})
