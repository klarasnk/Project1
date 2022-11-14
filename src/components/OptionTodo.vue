<template>
  <div class="option">
    <div class="optionTodo">
      <div class="items">
        <div class="tox">
          <input type="checkbox" @click="changeTodoStatus(item.id)" :checked="item.done">
          <span v-if="!item.edit">{{ item.text }}</span>
          <div v-else="item.edit">
            <input @focusout="handleFocusOut" tabindex="0" class="edit" type="text" v-model="item.text">
            <button @click="save(item.id)">Save</button>
          </div>

        </div>
        <div>
          <span @click="edit(item.id)" class="material-symbols-outlined">edit</span>
          <span @click="deleteTodo(item.id)" class="material-symbols-outlined">delete_sweep</span>
        </div>
      </div>
    </div>
  </div>
  <hr>
</template>

<script>
import { mapMutations } from 'vuex';

// import App from "@/App";
export default {
  name: 'OptionTodo',
  props: {
    item: Object,
  },
  methods: {
    ...mapMutations([
      'changeTodoStatus',
      'deleteTodo',
      'edit',
      'save'
    ]),
    handleFocusOut() {
      console.log('hello');

    }
  }
}


</script>

<style scoped>
h1 {
  text-align: start;
}

p {
  margin: 0;
}

.optionTodo {
  width: 400px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}

i {
  width: 20px;
}

.items {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.option {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit {
  width: 200px;
  height: 20px;
  border: 1px dotted
}

.tox {
  display: flex;
}

button {
  margin: 0 10px
}

span {
  font-size: 20px ;
}
</style>
