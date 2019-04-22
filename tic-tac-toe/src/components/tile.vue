<template>
  <div class="tile" v-bind:style="{backgroundColor: backgroundColor}" v-bind:class="{'tile-empty': emptyTile}">
    {{ displayingValue }}
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

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

  watch: {
    value (newVal, oldVal) {
      if (newVal > oldVal) {
        setTimeout(() => {
          Velocity(this.$el, { scale: 1.2 }, { duration: 50,
            complete: () => {
              Velocity(this.$el, { scale: 1 }, { duration: 50 })
            } })
        }, 50)
      }
    }
  },

  computed: {
    value () {
      return this.tile.value
    },

    displayingValue () {
      if (this.value > 0) {
        return this.value
      }

      return this.value
    },

    emptyTile () {
      return this.displayingValue === null
    },

    backgroundColor () {
      return this.colors[this.value.toString(2).length - 1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
