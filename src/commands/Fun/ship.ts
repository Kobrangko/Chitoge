import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ship',
            description: 'ship someone!',
            aliases: ['s'],
            category: 'fun',
            usage: `${client.config.prefix}ship @whom_you_wanna_ship1 @whom_you_wanna_ship2`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

         arg = body.trim().split(' ')
        const per = Math.floor(Math.random() * 100)

if (per < 25) { 
var sentence = `${per}% Worse than average 🙂`
} else if (per < 50) {
var sentence = `${per}% I don't know how i feel about it, but you can givie a try 😀` 
} else if (per < 75) {
var sentence = `${per}% Good, I guess... ⭐️` 
} else if (per < 90) {
var sentence = `${per}% Sugoii! Go for it!🤩️` 
} else {
var sentence = `${per}% Incredible! You two will be an amazing couple 😍️` 
}

var shiptext = `❣️ *Matchmaking...*

---------------------------------
    *${arg[1]}  x  ${arg[2]}*
---------------------------------

${sentence}`
