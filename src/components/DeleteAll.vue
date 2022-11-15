<template>
    <button @click="deleteAll(status)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-6">
        Delete {{ status }} ({{ len }})
    </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'DeleteAll',
    props: {
        len: Number,
        status: String
    },
    methods: {
        ...mapMutations([
            'deleteAll'
        ])
    },
    // created() {
    //     console.log(this.props);
    // }
}

</script>

<style>

</style>