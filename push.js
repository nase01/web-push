const { connected } = require('process');
var push = require('web-push');

//let vapidKeys =  push.generateVAPIDKeys();
let vapidKeys = {
    publicKey: 'BG67FVpknPFQr42tOkLrNK9Gf457_2glV1HZ9PD4wNGAM6iReTsVrM_-KireQnrNHJflVJgqrEM1mIrEt4Sl5nk',
    privateKey: 'B5IFo-0-ygpgihQB-Qb-VTNoZvUgG8OiYtCRIg4Z6V4'
}

push.setVapidDetails('mailto:test@connected.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}

push.sendNotification(sub, 'test message');