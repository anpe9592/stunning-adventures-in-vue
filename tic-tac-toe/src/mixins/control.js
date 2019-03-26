import _ from 'lodash'

export default {
  methods: {
    playerAy () {
      console.log('hello')
      for (let a = 0; a < board.length; a++) {
        this.dosomthing(board, a, x)
      }
      this.seedTwo()
    },

    dosomthing (board, a, x) {
      console.log('x', x)
      console.log('a', a)
      console.log('board', board[0][0])
    },

    seedTwo () {
      if (this.allTilesFull) { return }

      let getRandomItem = () => {
        let randomIndex = Math.floor(Math.random() * this.board.length)

        return this.board[randomIndex]
      }

      let randomItem = getRandomItem()

      while (randomItem.value !== 0) {
        randomItem = getRandomItem()
      }

      randomItem.value = 2
    },

    onTap (event) {
      if (event.isFinal) {
        this.tap(event.center)
      }
    }
  }
}
