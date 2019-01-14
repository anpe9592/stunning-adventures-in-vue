<template>
  <div class="gameMenu">
    {{ tile.value }}
  </div>
</template>

<script>
export default {
  name: 'gameMenu',
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
