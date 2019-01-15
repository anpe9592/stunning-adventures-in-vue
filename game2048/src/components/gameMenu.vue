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

</style>
