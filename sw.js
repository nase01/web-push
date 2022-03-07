self.addEventListener('push', () => {
    self.registration.sendNofitication('test message', {})
})