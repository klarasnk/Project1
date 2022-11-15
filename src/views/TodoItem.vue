<template>
  <OptionTodo v-for="todo in todos" :key="todo.id" :item="todo" ></OptionTodo>
  <DeleteAll :len='todos.length' status="Todo" />
</template>

<script>
import DeleteAll from "@/components/DeleteAll.vue";
import OptionTodo from "@/components/OptionTodo";
import { mapGetters } from "vuex";

export default {
  name: 'TodoItem',
  components: {
    OptionTodo,
    DeleteAll
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      todos: 'getTodos',
    })
  },

}


</script>