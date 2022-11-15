<template>
  <div>
    <OptionTodo v-for="todo in todos" :key="todo.id" :item="todo"></OptionTodo>
    <DeleteAll :len='todos.length' status='All'/>
  </div>
</template>

<script>
import OptionTodo from "@/components/OptionTodo";
import DeleteAll from "@/components/DeleteAll";
import { mapGetters } from "vuex";

export default {
  name: 'AllToDo',
  components: {
    OptionTodo,
    DeleteAll
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      todos: 'getAllTodos',
    })
  }
}


</script>