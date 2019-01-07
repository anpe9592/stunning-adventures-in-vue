<template>
  <div class="game">
    <div class="red"></div>
    <div class="blue"></div>
    <div class="yellow"></div>
    <div class="green"></div>
  </div>
</template>

<script>
export default {
  name: 'Game2048',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.game {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.red {
  float: left;
  position: relative;
  width: 35%;
  padding-bottom: 30%;
  margin: 1.66%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #B20000;
}

.blue {
  float: left;
  position: relative;
  width: 35%;
  padding-bottom: 30%;
  margin: 1.66%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #2100B2;
}

.yellow {
  float: left;
  position: relative;
  width: 35%;
  padding-bottom: 30%;
  margin: 1.66%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #CCCC00;
}

.green {
  float: left;
  position: relative;
  width: 35%;
  padding-bottom: 30%;
  margin: 1.66%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #006400;
}
</style>
