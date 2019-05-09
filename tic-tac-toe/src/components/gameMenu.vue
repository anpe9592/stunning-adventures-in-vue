<template>
  <div class="gameMenu">
    <div class="row">
      <div class="title">TicTacToe</div>
      <div class="scores space-right">
        <div class="score">
          <div class="score-title">X</div>
          <div class="score-value">{{ this.$store.state.player }}</div>
        </div>
        <div class="score">
          <div class="score-title">O</div>
          <div class="score-value">{{ this.$store.state.best }}</div>
        </div>
      </div>
    </div>
    <a class="button space-right" @click="newGame()">New Game</a>
    <transition name="fade">
      <div v-if="won" class="modal">
        <h1>{{ this.gameWon() }} Won!</h1>
        <a class="button button-black" @click="newGame()">Play again</a>
      </div>
      <div v-else-if="gameOver" class="modal">
        <h1>Draw!</h1>
        <a class="button button-black" @click="newGame()">Try again</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'gameMenu',

  props: {
    gameOver: {
      type: Boolean,
      required: true
    },

    won: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      winner: 0
    }
  },

  methods: {
    newGame () {
      this.$emit('new-game')
    },

    gameWon () {
      return this.$store.state.winner
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gameMenu {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 23em;
  height: 7em;
  padding: 1em;
}

.row {
  display: flex;
}

.title {
  font-size: 2.75em;
  color: #1E1E12;
}

.scores {
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
}

.space-right {
  margin-left: auto;
}

.score {
  background-color: #91CCC8;
  margin-left: 0.5em;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1.5em;
}

.score-title {
  font-size: .75em;
}

.button {
  display: flex;
  height: 2em;
  justify-content: center;
  padding: 0.1em 0.75em;
  border: 1px solid #91CCC8;
  color: #91CCC8;
  border-radius: 6px;
  align-items: center;
  cursor: pointer;
}

.button:hover {
  background-color: #91CCC8;
  color: white;
}

.space-right {
  margin-left: auto;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(254, 253, 251, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.points {
  position: absolute;
  color: #8BD096;
  margin-top: -40px;
}

.points-item {
  display: inline-block;
}

.points-enter-active, .points-leave-active {
  transition: all 100ms;
}

.points-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.points-enter {
  transform: translateY(30);
}
</style>
