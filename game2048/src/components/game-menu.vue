<template>
  <div class="game-menu">
    {{ tile.value }}
  </div>
</template>

<script>
export default {
  name: 'game-menu',
  props: {
    tile: {
      type: Object,
      required: true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
