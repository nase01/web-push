const { connected } = require('process');
var push = require('web-push');

//let vapidKeys =  push.generateVAPIDKeys(); //Uncomment this if you want to create new keys
let vapidKeys = {
    publicKey: 'BG67FVpknPFQr42tOkLrNK9Gf457_2glV1HZ9PD4wNGAM6iReTsVrM_-KireQnrNHJflVJgqrEM1mIrEt4Sl5nk',
    privateKey: 'B5IFo-0-ygpgihQB-Qb-VTNoZvUgG8OiYtCRIg4Z6V4'
}

push.setVapidDetails('mailto:test@connected.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fQpR6H9ER2Q:APA91bGQX3-p7aBa0_xX1B5LuFxUWWVhBf06rHG-C1z3UYhy3hTpbsAazOfQYM48zUMJTBjBE9N4eQ_WGqWMF9Edwc0ztbOyO7bk7tLwAkQeTGYnjjUIYQIvnoepVQ9Yr1LvE97dBHmx","expirationTime":null,"keys":{"p256dh":"BII04i-Wj6RpgWoiZans32ZXzPWFcoTb6aAYHkDCIn_8QwGoMUrOlqQnQuHbzgOvt2XoGbsRbuzPe80nYtOIODQ","auth":"Rx2tfEM6-IFEomevNcdDDA"}}

push.sendNotification(sub, 'test message');