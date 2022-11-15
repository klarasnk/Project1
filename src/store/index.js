import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    todoText: ''
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
    saveEdits(state) {
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    changeTodoStatus(state, payload) {

      let todo = state.todos.find((elm) => elm.id == payload)
      todo.done = !todo.done
      this.commit('saveEdits')
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter(elm => elm.id != payload)
      this.commit('saveEdits')
    },
    addTodo(state, payload) {
      state.todos.unshift(payload)
      this.commit('saveEdits')
    },
    edit(state, payload) {

      let todo = state.todos.find((elm) => elm.id == payload)
      state.todoText = todo.text
      todo.edit = true
      this.commit('saveEdits')

    },
    save(state, payload) {
      let todo = state.todos.find((elm) => elm.id == payload)
      todo.edit = false
      this.commit('saveEdits')
    },
    deleteAll(state, payload) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          switch (payload) {
            case 'All':
              state.todos = []
              break;
            case 'Todo':
              state.todos = state.todos.filter(elm => elm.done)
              break
            case 'Done':
              state.todos = state.todos.filter(elm => !elm.done)
              break
            default:
              break;
          }
          this.commit('saveEdits')
        }
      })
    },
    cancelEdit(state, payload) {
      let todo = state.todos.find((elm) => elm.id == payload)
      todo.edit = false
      this.commit('saveEdits')
    }
  },
  actions: {
  },
  modules: {
  }
})
