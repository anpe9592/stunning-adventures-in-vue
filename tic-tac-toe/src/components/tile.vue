<template>
  <div class="tile" v-bind:style="{backgroundColor: backgroundColor}" v-bind:class="{'tile-empty': emptyTile}">
    {{ displayingValue }}
  </div>
</template>

<script>
export default {
  name: 'tile',
  props: {
    tile: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      colors: [
        '#90CCC8',
        '#90C2CE',
        '#8FB2D1'
      ]
    }
  },

  computed: {
    value () {
      return this.tile.value
    },

    displayingValue () {
      if (this.value === 'x' || this.value === 'o') {
        return this.value
      }

      return null
    },

    emptyTile () {
      return this.displayingValue === null
    },

    backgroundColor () {
      if (this.value === 'x') {
        return this.colors[1]
      }

      if (this.value === 'o') {
        return this.colors[2]
      }

      return null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
