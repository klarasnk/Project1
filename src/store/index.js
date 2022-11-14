import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
  },
  getters: {
    getAllTodos(state) {
      return state.todos
    },
    getDoneTodos(state) {
      return state.todos.filter(elm => elm.done)
    },
    getTodos(state) {
      return state.todos.filter(elm => !elm.done)
    }
  },
  mutations: {
    changeTodoStatus(state, payload) {
      let todo = state.todos.find((elm) => elm.id == payload)
      todo.done = !todo.done
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter(elm => elm.id != payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    addTodo(state, payload) {
      state.todos.push(payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    edit(state, payload) {
      let todo = state.todos.find((elm) => elm.id == payload)
      todo.edit = true
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    save(state, payload) {
      let todo = state.todos.find((elm) => elm.id == payload)
      todo.edit = false
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteAll(state) {
      state.todos = []
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
  },
  modules: {
  }
})
