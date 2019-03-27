// import _ from 'lodash'

export default {
  methods: {
    playerAy () {
      if (this.allTilesFull) { return }
      console.log('hello')

      let randomIndex = Math.floor(Math.random() * this.board.length)
      let ayMove = this.board[randomIndex]

      ayMove.value = 3
    }
  }
}
