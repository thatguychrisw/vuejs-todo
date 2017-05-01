import Vue from 'vue'
const ExampleInjector = require('!!vue-loader?inject!@/components/Todo.vue')

let TodoMock = ExampleInjector({
  '../utils/Store.js': {
    fetch () {
      return []
    },

    save () {
      return true
    }
  }
})

describe('Todo.vue', () => {
  it('should have a property, todos', () => {
    const vm = new Vue({
      extends: TodoMock
    }).$mount()

    expect(vm).to.have.ownProperty('todos')
  })

  it('the todos property should be a list', () => {
    const vm = new Vue({
      extends: TodoMock
    }).$mount()

    expect(vm.todos).to.have.length(0)
  })
})