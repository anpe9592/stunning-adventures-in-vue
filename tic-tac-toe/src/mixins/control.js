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
    },

    didIwin (n) {
      // row
      if (this.board[0].value === n && this.board[1].value === n && this.board[2].value === n) {
        this.gameOver = true
      }
      if (this.board[3].value === n && this.board[4].value === n && this.board[5].value === n) {
        this.gameOver = true
      }
      if (this.board[6].value === n && this.board[7].value === n && this.board[8].value === n) {
        this.gameOver = true
      }
      // col
      if (this.board[0].value === n && this.board[3].value === n && this.board[6].value === n) {
        this.gameOver = true
      }
      if (this.board[1].value === n && this.board[4].value === n && this.board[7].value === n) {
        this.gameOver = true
      }
      if (this.board[2].value === n && this.board[5].value === n && this.board[8].value === n) {
        this.gameOver = true
      }
      // lateral
      if (this.board[0].value === n && this.board[4].value === n && this.board[8].value === n) {
        this.gameOver = true
      }
      if (this.board[6].value === n && this.board[4].value === n && this.board[2].value === n) {
        this.gameOver = true
      }
    }
  }
}
