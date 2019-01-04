<template>
  <div class="home">
    <Game2048 />
  </div>
</template>

<script>
// @ is an alias to /src
import Game2048 from '@/components/2048.vue'

export default {
  name: 'home',
  components: {
    Game2048
  }
}
</script>
