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

      ayMove.value = 'o'

      if (!this.allTilesFull) {
        this.didIwin('o')
      }
    },

    didIwin (n) {
      // row
      if (this.board[0].value === n && this.board[1].value === n && this.board[2].value === n) {
        this.score(n)
      }
      if (this.board[3].value === n && this.board[4].value === n && this.board[5].value === n) {
        this.score(n)
      }
      if (this.board[6].value === n && this.board[7].value === n && this.board[8].value === n) {
        this.score(n)
      }
      // col
      if (this.board[0].value === n && this.board[3].value === n && this.board[6].value === n) {
        this.score(n)
      }
      if (this.board[1].value === n && this.board[4].value === n && this.board[7].value === n) {
        this.score(n)
      }
      if (this.board[2].value === n && this.board[5].value === n && this.board[8].value === n) {
        this.score(n)
      }
      // lateral
      if (this.board[0].value === n && this.board[4].value === n && this.board[8].value === n) {
        this.score(n)
      }
      if (this.board[6].value === n && this.board[4].value === n && this.board[2].value === n) {
        this.score(n)
      }
    },

    score (n) {
      this.won = true
      this.$store.dispatch('updateWinner', n)
      if (n === 'x') {
        this.$store.dispatch('updatePlayer')
      } else {
        this.$store.dispatch('updateAy')
      }

      return true
    }
  }
}
