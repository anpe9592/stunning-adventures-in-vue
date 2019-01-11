<template>
  <div class="game">
    <div class="game-container">
      <div class="board shadow-board">
        <div v-for="n in board.length" :key="n" class="tile shadow-tile"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      board: []
    }
  },

  mounted () {
    this.setupBoard()
  },

  methods: {

    setupBoard () {
      this.newGame()
    },

    seedTwo () {
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

    newGame () {
      this.resetBoard()
      this.seedTwo()
      this.seedTwo()
    },

    resetBoard () {
      this.board = Array.apply(null, { length: 16 })
        .map(function (_, index) {
          return {
            id: index,
            value: 0
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
