<template>
  <div class="home">
    <TicTacToe />
  </div>
</template>

<script>
// @ is an alias to /src
import TicTacToe from '@/components/Game.vue'

export default {
  name: 'home',
  components: {
    TicTacToe
  }
}
</script>
