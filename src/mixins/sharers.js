// USED BY Forza

export default {
  methods: {
    shareFacebook (key, title, description) {
      let forza = 'https://forza.cf'
      window.open('https://www.facebook.com/sharer.php?u=' + forza + '/post/view/' + key + '&title=' + title + '&description=' + description + '')
    },
    shareTelegram (key, title) {
      let forza = 'https://forza.cf'
      window.open('https://telegram.me/share/url?url=' + forza + '/post/view/' + key + '&text=' + title + '')
    },
    shareWhatsapp (key) {
      let forza = 'https://forza.cf'
      window.open('whatsapp://send?text=' + forza + '/post/view/' + key)
    }
  }
}
