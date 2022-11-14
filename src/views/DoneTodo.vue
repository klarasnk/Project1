<template>
    <OptionTodo v-for="todo in todos" :key="todo.id" :item="todo"></OptionTodo>
</template>
  
<script>
import OptionTodo from "@/components/OptionTodo";
import { mapGetters } from "vuex";

export default {
    name: 'DoneTodo',
    components: {
        OptionTodo
    },
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters({
            todos: 'getDoneTodos',
        })
    }
}


</script>