<template>
  <div id="app">
    <!-- <h1>3 Day Weekends</h1> -->
    <next-holiday-card></next-holiday-card>
  </div>
</template>

<script>

import NextHolidayCard from './components/NextHolidayCard.vue'
export default {
  name: 'app',
  components: {
    NextHolidayCard
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
</style>
