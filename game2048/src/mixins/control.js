export default {
  methods: {
    registerControl () {
      const validKeyCodes = [39, 37, 38, 40]
      document.addEventListener('keydown', (event) => {
        let key = event.which
        if (validKeyCodes.includes(key)) {
          if (key === 39) {
            // right
            console.log('key 39')
          } else if (key === 37) {
            // left
            console.log('key 37')
          } else if (key === 38) {
            // up
            console.log('key 38')
          } else if (key === 40) {
            // down
            console.log('key 40')
          }
        }
      })
    }
  }
}
