<template>
  <div id="app">
    <h2>TODO</h2>
    <h4>Using: VueJS</h4>
    <todo></todo>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
import Store from './utils/Store.js';

export default {
  name: 'app',
  components: {
    Todo
  },
  provide: {
    store: Store
  }
}
</script>

<style lang="sass">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 67.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  margin: .2em;
}

h2 {
  font-size: 2.5em;
}

h4 {
  font-size: 1.5em;
}
</style>
