let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
}
handler.help = ['Promover','admin','^'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(opromover|oadmin|o\^)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
