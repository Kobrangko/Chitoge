import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'lick',
            description: 'Lick someone!!',
            category: 'fun',
            usage: `${client.config.prefix}lick @whom_you_wanna_lick`,
            
        })
    }
    run = async (M: ISimplifiedMessage): Promise<void> => {

        const user1 = M.sender.jid
        const user2 = M.mentioned[0]
//  let username1 = user1.split('@')[0]
//  let username2 = user2.split('@')[0]
// let username1 = user1.replace('@s.whatsapp.net', '')
// let username2 = user2.replace('@s.whatsapp.net', '')

 const n = ['./assets/videos/lick/lick.mp4','./assets/videos/lick/lick1.mp4','./assets/videos/lick/lick2.mp4','./assets/videos/lick/lick3.mp4']
let hug = n[Math.floor(Math.random() * n.length)]
 return void  this.client.sendMessage( M.from, { url: hug }, 
        MessageType.video, 

 
          { mimetype: Mimetype.gif, caption: `@${user1.split('@')[0]} licked @${user2.split('@')[0]}`, contextInfo: {mentionedJid : [user1, user2]} }
      )         


    }
}
