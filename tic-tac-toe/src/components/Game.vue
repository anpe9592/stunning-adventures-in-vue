<template>
  <div class="Game">
    <gameMenu @new-game="newGame()" :gameOver="gameOver"></gameMenu>
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
      gameOver: false
    }
  },

  watch: {
    allTilesFull (boardFull, _) {
      if (boardFull) {
        this.checkGameState()
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
      let humanMove = this.board[n]

      humanMove.value = 2

      this.playerAy()
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
      this.resetScore()
      this.gameOver = false
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

    resetScore () {
      this.$store.dispatch('resetScore')
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
}

.board {
  display: flex;
  flex-wrap: wrap;
  width: 277px;
  padding: 6px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0);
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

.tile-empty {
  background: initial;
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
