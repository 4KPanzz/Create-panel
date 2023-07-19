const fs = require('fs')
const chalk = require('chalk')

global.domain = "-" // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.creAtor = "62895360424437@s.whatsapp.net"//Nomor Lu
global.owner = ['62895360424437']//Nomer lu
global.ownerNumber = ["62895384483990@s.whatsapp.net"]//Nomer lu
global.nomerOwner = "62895360424437"//Nomer lu
global.namabotnya = 'bot panel'//Nama bot lu
global.namaownernya = 'Yuki'//Nama lu
global.packname = 'PANEL MURAH CHAT'//Bebas
global.author = '62895360424437'//Bebas
global.sessionName = 'session'//Gausah diganti 
global.email = 'Yuki Pedia'//email lu
global.group = 'https://chat.whatsapp.com/BTUU6DMqqToG3Z8nYAJbFH'//Grup lu
global.youtube = 'https://youtube.com/@Yuki_Pediaa'// Yt lu
global.website = 'https://youtube.com/@Yuki_Pediaa'//Web lu
global.github = 'https://youtube.com/@Yuki_Pediaa'//Github lu
global.nomorowner = 'https://wa.me/62895360424437'//Nomor lu
//YANG DIBAWAH GAUSAH DIUBAH, EROR NANGIS 
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.qris = fs.readFileSync(`./qris.jpeg`)
global.krmd = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner Bot!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./zassxdjs/image/thumb.jpg')
global.imagekir = fs.readFileSync('./zassxdjs/image/zassxd.jpg')
global.videokir = fs.readFileSync('./zassxdjs/image/zassxd.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})