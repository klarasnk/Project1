<template>
    <div class="ent">
        <input style="width: 200px; margin:20px" class="inp" type="text" placeholder="Enter Your ToDo :)"
            v-model="todo.text">
        <button @click="enter($event)" class="btn">Add</button>
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
    }
}


</script>

<style>
#empty {
    color: red;

}
</style>