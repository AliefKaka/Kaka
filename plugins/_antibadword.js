let badwordRegex = /anj$|anjik$|anjing$|jing$|bajingan$|bangsat$|kontol$|memek$|memeq$|pepek$|pepeq$|meki$|titit$|titid$|peler$|ler$|pler$|tetek$|toket$|ngewe$|goblok&|tolol$|idiot$|kentot$|kentod$|ngentot$|ngentod$|tot$|tod$|jembut$|bego$|dajjal$|jancuk$|jancok$|pantek$|puki$|pukimak$|kimak$|kampang$|lonte$|coli$|colmek$|pelacur$|babi$|nigga$|fuck$|dick$|bitch$|tits$|bastard$|anj$|jing$|kont$|babi$|monyet$|bangke$|tai$|jir$|anjig$|cok$|asu$|su$|cuk$|crot$|anjir$|ajg$|asshole$/i // tambahin sendiri
export async function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return 
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    if (chat.antiBadword && isBadword && m.isGroup) {
        user.warn += 1
        m.reply(`${user.warning >= 5 ? '*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Toxic Terdeteksi*'}

YuLa Memberi Peringatan: ${user.warn} / 5

[❗] Jika *${global.info.namebot}* sudah memperingatkanmu sebanyak 5x. Kamu akan dikeluarkan dari group ini.

“ Tch... Diam kamu bocah brengsek ! ! !`)
        if (user.warn >= 5) {
            user.warn = 0
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
}
