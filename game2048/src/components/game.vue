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
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
