<template>
    <button @click="deleteAll">Delete All ({{ todos.length }})</button>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from "vuex";

export default {
    name: 'DeleteAll',
    props: {
        item: Object
    },
    methods: {
        ...mapMutations([
            'deleteAll'
        ])
    },
    computed: {
        ...mapGetters({
            todos: 'getAllTodos',
        })
    }
}

</script>