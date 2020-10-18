var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BIqxdGgovPhCpYU5WtGnPJOORy3Eu2QXuIt3JM2_YO9fkrVIaLzypOtNI4r_JDdh-aULsOC39_2GrWsAJowCByM",
   "privateKey": "RV7NEN-YXfHTBT6MPGP5ELHM8z6ZRed63hxmiAMfvRA"
};
 
 
webPush.setVapidDetails(
   'arsyadbaso123@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": " https://fcm.googleapis.com/fcm/send/eNtm_KiEeic:APA91bECCaslUvyS2UV5ruOYyN6mH37RW7gF4KbCd-X-XvwJt_VW3CLtNY3JK2q3O6h7TkscaQ1cWY8teyYadzodlEawSGiDXuPkPaci8XMASpOy6_1-uo2U-HTdOOHclU_VbgbAPKAM",
   "keys": {
       "p256dh": "BOOCegcBUFYQduvdhrJOYnmmCHWL6yLH4Lqz97XvApc2sEpdWpe7bh064bkcWzruIzeFNo2ab0GfiE7sjT/xWnU=",
       "auth": "TOQjodcOY0D5DPFeeeosfg=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '98146418769',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);

