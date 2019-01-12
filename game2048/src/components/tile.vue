<template>
  <div class="tile">
    {{ tile.value }}
  </div>
</template>

<script>
export default {
  name: 'tile',
  props: {
    stile: {
      type: Object,
      required: true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
