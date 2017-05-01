'use strict'

export default (function () {
  const STORAGE_KEY = 'todo-storage'

  return {
    fetch: function () {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    },

    save: function (todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
  }
})()
