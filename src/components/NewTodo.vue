<template>
    <div class="ent">
        <input style="width: 200px; margin:20px" class="inp" type="text" placeholder="Enter Your ToDo :)"
            v-model="todo.text">
        <router-link to="/" @click="enter($event)"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add</router-link>
    </div>
    <p id="empty"></p>
</template>

<script>

import { mapMutations } from 'vuex'


export default {
    name: 'app',
    data() {
        return {
            todo: {
                id: Date.now(),
                text: '',
                done: false,
                edit: false
            },
        }
    },
    methods: {
        ...mapMutations([
            'addTodo'
        ]),
        enter(e) {
            e.preventDefault()
            if (this.todo.text.trim() != '') {

                this.addTodo(this.todo)
                this.todo = {
                    id: Date.now(),
                    text: '',
                    done: false,
                    edit: false
                }
                empty.innerHTML = ''
            } else {
                empty.innerHTML = 'Fill field'
            }
        },
    },
    // computed:{
    //     fillingField(){
    //         return empty.innerHTML = ''
    //     }
    // }
}


</script>

<style>
#empty {
    color: red;

}
</style>