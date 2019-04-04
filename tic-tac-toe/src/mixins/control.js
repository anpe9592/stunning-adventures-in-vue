// import _ from 'lodash'

export default {
  methods: {
    playerAy () {
      if (this.allTilesFull) { return }

      let getRandomItem = () => {
        let randomIndex = Math.floor(Math.random() * this.board.length)

        return this.board[randomIndex]
      }

      let ayMove = getRandomItem()

      while (ayMove.value !== 0) {
        ayMove = getRandomItem()
      }

      ayMove.value = 4
    }
  }
}
