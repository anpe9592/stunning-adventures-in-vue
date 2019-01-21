export default {
  data () {
    return {
      mergeAnimationsList: [],
      slideAnimationsList: [],
      mergeGameStateList: [],
      slideGameStateList: []
    }
  },

  methods: {
    moveRight () {
      console.log('key 39')
    },

    moveLeft () {
      console.log('key 37')
    },

    moveUp () {
      console.log('key 38')
    },

    moveDown () {
      console.log('key 40')
    },

    registerControl () {
      const validKeyCodes = [39, 37, 38, 40]
      document.addEventListener('keydown', (event) => {
        let key = event.which
        if (validKeyCodes.includes(key)) {
          if (key === 39) {
            // right
            this.moveRight()
          } else if (key === 37) {
            // left
            this.moveLeft()
          } else if (key === 38) {
            // up
            this.moveUp()
          } else if (key === 40) {
            // down
            this.moveDown()
          }
        }
      })
    }
  }
}
