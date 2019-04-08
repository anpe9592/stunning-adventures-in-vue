<template>
  <div class="gameMenu">
    <div class="row">
      <div class="title">TicTacToe</div>
      <div class="scores space-right">
        <div class="score">
          <div class="score-title">X</div>
          <div class="score-value">{{ animatedScore }}</div>
          <transition-group name="points" tag="div" class="points">
            <div v-for="(pointIncrease, index) in pointsIncrease" :key="index+0">+ {{ pointIncrease }}</div>
          </transition-group>
        </div>
        <div class="score">
          <div class="score-title">O</div>
          <div class="score-value">{{ animatedBest }}</div>
        </div>
      </div>
    </div>
    <a class="button space-right" @click="newGame()">New Game</a>
    <transition name="fade">
      <div v-if="gameOver" class="modal">
        <h1>Draw!</h1>
        <a class="button button-black" @click="newGame()">Try again</a>
      </div>
      <div v-if="won" class="modal">
        <h1>Game Won!</h1>
        <a class="button button-black" @click="newGame()">Try again</a>
      </div>
    </transition>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'
import _ from 'lodash'

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
      animatedScore: 0,
      animatedBest: 0,
      pointsIncrease: []
    }
  },

  watch: {
    score (newValue, oldValue) {
      const self = this

      if (newValue > 0) {
        let oldPoints = _.cloneDeep(self.pointsIncrease)
        oldPoints.push(newValue - oldValue)
        self.pointsIncrease = oldPoints
      }

      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 500)
        .onUpdate(function (object) {
          self.animatedScore = object.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    },

    pointsIncrease (newPoints, oldPoints) {
      if (newPoints.length > oldPoints.length) {
        setTimeout(() => {
          this.pointsIncrease.pop()
        }, 200)
      }
    }
  },

  computed: {
    score () {
      return this.$store.state.score
    },

    best () {
      return this.$store.state.best
    }
  },

  methods: {
    newGame () {
      if (this.$store.state.best < this.$store.state.score) {
        this.$store.dispatch('updateBest', this.$store.state.score)
        this.animatedBest = this.$store.state.best
      }
      this.$emit('new-game')
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
