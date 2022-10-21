// Owner number
global.owner = '6287837703726'
// Owner name
global.owner_name = '⏤͟͟͞𝙁𝙖𝙪𝙯𝙞'
// Maximum upload file size limit (Default : 50 MB)
global.max_upload = 50
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 25)
global.limit = 25
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '212']
// Put target jid to forward friends story
global.forwards = '6287837703726@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))(process.env.API_KEY)
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Source version
global.version = '5.4.7',
// Footer text
global.footer = '©⏤͟͟͞𝙁𝙖𝙪𝙯𝙞 𝑩𝑶𝑻𝒁'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', '[❗] SEDANG DIPROSES'),
   invalid: Func.texted('bold', 'URL Tidak Valid!'),
   wrong: Func.texted('bold', 'Format yang salah!'),
   getdata: Func.texted('bold', 'Menggores metadata . . .'),
   fail: Func.texted('bold', 'Tidak bisa mendapatkan metadata'),
   error: Func.texted('bold', 'Terjadi kesalahan!'),
   errorF: Func.texted('bold', 'Maaf fitur ini dalam kesalahan.'),
   premium: Func.texted('bold', 'Fitur ini hanya untuk pengguna premium.'),
   owner: Func.texted('bold', 'Perintah ini hanya untuk pemilik.'),
   god: Func.texted('bold', 'Perintah ini hanya untuk Guru'),
   group: Func.texted('bold', 'Perintah ini hanya akan bekerja dalam kelompok.'),
   botAdmin: Func.texted('bold', 'Perintah ini akan berfungsi ketika saya menjadi adminn.'),
   admin: Func.texted('bold', 'Perintah ini hanya untuk admin grup.'),
   private: Func.texted('bold', 'Gunakan perintah ini dalam obrolan pribadi.')
})
