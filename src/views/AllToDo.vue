<template>
  <OptionTodo v-for="todo in todos" :key="todo.id" :item="todo"></OptionTodo>
</template>

<script>
import OptionTodo from "@/components/OptionTodo";
import { mapGetters } from "vuex";

export default {
  name: 'AllToDo',
  components: {
    OptionTodo
  },
  computed: {
    ...mapGetters({
      todos: 'getAllTodos',
    })
  }
}


</script>