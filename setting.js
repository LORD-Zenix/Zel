const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6285701863281'] // pakai nomor owner
global.ownernomer = "6285701863281" // pakai nomor owner
global.socialmedia = "IG: zenixdcode" // ini ig buat di ownerjy
global.yutub = "YT: ZENNXD"// sama
global.lokasi = "AS California, Santa Clara County, Mountain View"//

global.packgename = "By" 
global.author = "2023 © ZenixXd!" 

global.title = 'Zenix ALL Development'//Tittle reply 
global.body = '2023 © ZenixXd!' //body reply

global.welcome = true 
global.left = true


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})