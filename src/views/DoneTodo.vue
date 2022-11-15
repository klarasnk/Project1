<template>
    <OptionTodo v-for="todo in todos" :key="todo.id" :item="todo"></OptionTodo>
    <DeleteAll :len='todos.length' status='Done'/>
</template>
  
<script>
import DeleteAll from "@/components/DeleteAll.vue";
import OptionTodo from "@/components/OptionTodo";
import { mapGetters } from "vuex";

export default {
    name: 'DoneTodo',
    components: {
        OptionTodo,
        DeleteAll
    },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters({
            todos: 'getDoneTodos',
        })
    }
}


</script>