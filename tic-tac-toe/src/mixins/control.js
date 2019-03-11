// import _ from 'lodash'

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
    animate () {
      let boardDidChange = this.mergeAnimationsList.length > 0 || this.slideAnimationsList.length > 0

      if (boardDidChange) {
        while (this.mergeAnimationsList.length > 0) {
          let animation = this.mergeAnimationsList.splice(0, 1)[0]
          this.updateScore(animation)
          this.animateTiles(animation)
        }
        while (this.slideAnimationsList.length > 0) {
          let animation = this.slideAnimationsList.splice(0, 1)[0]
          this.animateTiles(animation)
        }
        setTimeout(() => {
          this.seedTwo()
        }, 100)
      }
    },

    animateTiles (animation) {
      let { from, to } = animation

      let a = this.board[from]
      let b = this.board[to]
      a.value = a.value + b.value
      b.value = 0

      this.board.splice(from, 1)
      this.board.splice(from, 0, b)

      this.board.splice(to, 1)
      this.board.splice(to, 0, a)
    },

    updateScore (animation) {
      let { from, to } = animation

      let a = this.board[from]
      let b = this.board[to]
      let points = a.value + b.value

      this.$store.dispatch('updateScore', points)
    },

    getChangeLists (type) {
      let changeLists = {}
      if (type === 'animate') {
        changeLists.merge = this.mergeAnimationsList
        changeLists.slide = this.slideAnimationsList
      } else if (type === 'gamestate') {
        changeLists.merge = this.mergeGameStateList
        changeLists.slide = this.slideGameStateList
      }
      return changeLists
    },

    onPan (event) {
      // 0 = none, 2 = left, 4 = right, 8 = up, 16 = down
      const direction = event.direction

      if (event.isFinal) {
        if (direction === 4 && (direction !== 8 || direction !== 16)) {
          this.moveRight()
        } else if (direction === 2 && (direction !== 8 || direction !== 16)) {
          this.moveLeft()
        } else if (direction === 8 && (direction !== 4 || direction !== 2)) {
          this.moveUp()
        } else if (direction === 16 && (direction !== 4 || direction !== 2)) {
          this.moveDown()
        }
        this.animate()
      }
    }
  }
}
