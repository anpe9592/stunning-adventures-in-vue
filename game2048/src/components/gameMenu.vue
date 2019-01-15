<template>
  <div class="gameMenu">
    <div class="row">
      <div class="title">2048</div>
      <div class="scores space-right">
        <div class="score">
          <div class="score-title">SCORE</div>
          <div class="score-value">0000</div>
        </div>
        <div class="score">
          <div class="score-title">BEST</div>
          <div class="score-value">0000</div>
        </div>
      </div>
    </div>
    <a class="button space-right" @click="newGame()">New Game</a>
  </div>
</template>

<script>
export default {
  name: 'gameMenu',
  methods: {
    newGame () {
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

.score-value {}

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

</style>
