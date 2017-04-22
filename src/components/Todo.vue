<template>
  <div id="todo">
    <input type="text" v-model="newTodo" placeholder="Enter a task" @keyup.enter="add"/>
    <ul>
      <li v-for="todo in todos">
        {{ todo.message }}
        <input type="button" value="-" @click="remove(todo)"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  inject: ["store"],

  data () {
    return {
      todos: this.store.fetch(),
      newTodo: "",
    }
  },

  watch: {
    todos: function() {
      this.store.save(this.todos);
    }
  },

  methods: {
    add() {
      this.todos.push({message: this.newTodo});
      this.newTodo = "";
    },

    remove(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
}
</script>

<style lang="sass" scoped>
#todo {
    padding: 1em;

    input[type="text"] {
        padding: .5em;
        width: 75%;

        font-size: 1.5em;
    }
}
</style>
