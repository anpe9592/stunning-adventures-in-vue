<template>
  <div class="Game">
    <gameMenu @new-game="newGame()" :gameOver="gameOver" :won="won"></gameMenu>
    <div class="game-container">
      <transition-group name="tile" tag="div" class="board">
        <tile v-for="tile in board" :tile="tile" :key="tile.id"></tile>
      </transition-group>
      <div class="board shadow-board">
        <div v-for="n in board.length" :key="n" class="click" v-on:click="touch(n-1)">
          <div class="tile shadow-tile"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tile from '@/components/tile.vue'
import gameMenu from '@/components/gameMenu.vue'
import control from '@/mixins/control'

export default {
  name: 'Game',
  mixins: [control],
  components: {
    tile,
    gameMenu
  },

  data () {
    return {
      board: [],
      gameOver: false,
      won: false
    }
  },

  watch: {
    allTilesFull (boardFull, _) {
      if (boardFull) {
        if (this.didIwin('x') !== true || this.didIwin('o') !== true) {
          this.checkGameState()
        }
      }
    }
  },

  mounted () {
    this.setupBoard()
  },

  computed: {
    allTilesFull () {
      return !this.board.filter(tile => tile.value === 0).length > 0
    }
  },

  methods: {
    touch (n) {
      if (this.board[n].value === 0) {
        let humanMove = this.board[n]

        humanMove.value = 'x'

        this.playerAy()

        if (!this.allTilesFull) {
          this.didIwin('x')
        }
      }
    },

    checkGameState () {
      if (this.allTilesFull) {
        this.gameOver = true
      }
    },

    setupBoard () {
      this.newGame()
    },

    newGame () {
      this.resetBoard()
      this.resetWinner()
      this.gameOver = false
      this.won = false
    },

    resetBoard () {
      this.board = Array.apply(null, { length: 9 })
        .map(function (_, index) {
          return {
            id: index,
            value: 0
          }
        })
    },

    resetWinner () {
      this.$store.dispatch('resetWinner')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.game-container {
  display: flex;
  justify-content: center;
  background-color: rgba(58, 41, 76, 0.5);
}

.board {
  display: flex;
  flex-wrap: wrap;
  width: 277px;
}

.shadow-board {
  position: absolute;
  height: 277px;
  background-color: initial;
}

.tile {
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  margin: 6px;
  justify-content: center;
  align-items: center;
  color: #FEFDFB;
  background-color: #91CCC8;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 5em;
  height: 5em;
}

.tile-move {
  transition: transform .09s ease;
}

.shadow-tile {
  z-index: -1;
}

.click {
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  margin: 6px;
  justify-content: center;
  align-items: center;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 5em;
  height: 5em;
}
</style>
