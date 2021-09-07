import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import  axios  from 'axios'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'test',
            description: 'Well...',
            category: 'fun',
            usage: `${client.config.prefix}test`,
            
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        
        const rnekol = ["hug"];
        const rnekolc = rnekol[Math.floor(Math.random() * rnekol.length)];
        const neko = await axios.get('https://yuabot.com/weeb/api/v1/img/' + rnekolc)

return void M.reply(await request.buffer(neko.data.payload.url), MessageType.video, undefined, undefined,`*Here you go 🌟*`
                   
                   
                   )
        
        
       
    }








}
