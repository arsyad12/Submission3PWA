// Memeriksa API service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(function () {
    console.log('Pendaftaran ServiceWorker berhasil');
  }, function () {
    console.log('Pendaftaran ServiceWorker gagal');
  });
  navigator.serviceWorker.ready.then(function () {
    console.log('ServiceWorker sudah siap bekerja.');
  });

  requestPermission();
} else {
  console.log("ServiceWorker belum didukung browser ini.")
}

function requestPermission(){
  if('Notification' in window) {
    Notification.requestPermission().then(result => {
      if(result === 'denied'){
        console.log("Fitur notifikasi tidak diijinkan.");
        return;
      } else if (result === 'default'){
        console.error("Pengguna menutup kotak dialog permintaan ijin.");
        return;
      }
      console.log('Notification granted');
      
      if (('PushManager' in window)) {
        navigator.serviceWorker.getRegistration().then(function(registration) {
            registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey:"BIqxdGgovPhCpYU5WtGnPJOORy3Eu2QXuIt3JM2_YO9fkrVIaLzypOtNI4r_JDdh-aULsOC39_2GrWsAJowCByM"
            }).then(function(subscribe) {
                console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
                console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                    null, new Uint8Array(subscribe.getKey('p256dh')))));
                console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                    null, new Uint8Array(subscribe.getKey('auth')))));
            }).catch(function(e) {
                console.error('Tidak dapat melakukan subscribe ', e.message);
            });
        });
    }
})
}
}

  
 