// بيخلّي البرنامج قابل للتسطيب. مش بيخزّن بيانات العملاء — كل الطلبات بتروح للنت عادي.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
