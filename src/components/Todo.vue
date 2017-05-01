<template>
  <div id="todo">
    <section class="entry">
      <input type="text" v-model="newTodo" placeholder="Enter a task" @keyup.enter="add" />
    </section>
    <section class="todos" v-show="todos.length > 0">
      <h4>TASKS:</h4>
      <ul>
        <li v-for="todo in todos">
          {{ todo.message }}
          <input type="button" value="remove" @click="remove(todo)" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Store from '../utils/Store.js'

export default {
  name: 'todo',

  data () {
    return {
      todos: this.store().fetch(),
      newTodo: ''
    }
  },

  watch: {
    todos: function () {
      this.store().save(this.todos)
    }
  },

  methods: {
    store () {
      return Store
    },

    add () {
      if (this.newTodo) {
        this.todos.push({ message: this.newTodo })
        this.newTodo = ''
      }
    },

    remove (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  }
}
</script>

<style lang="scss" scoped>

#todo {
    margin: 0 auto;
    padding: 1em;
    width: 75%;
    max-width: 75%;
    position: relative;

    input[type="text"] {
      padding: .5em;
      padding-left: .8em;
      width: 70%;
      box-sizing: border-box;
      font-size: 1.5em;
      border: 1px solid #E7E7E7;
      text-align: left;
    }

    .todos {
      width: 100%;
      text-align: left;
      margin: 2em 0;

      h1, h2, h3, h4, h5, h6 {
        padding: .5em;
        margin: .4em .2em;
        font-size: 1.8em;
      }

      ul {
        padding: 0 .1em 1em .1em;
        margin: 0;
        list-style: none;
        text-align: left;

        li {
          padding: .6em;
          margin: .4em .2em;

          list-style-type: none;
          font-size: 1.5em;
          border-bottom: 1px solid #E3E3E3;

          input[type="button"] {
            margin: .5em;
            float: right;
            text-transform: uppercase;
            border: 0;
            background: none;

            transition: color 0.5s ease;

            &:hover {
              cursor: pointer;
              color: orange; 
            }
          }
        }
      }
    }

}
</style>
