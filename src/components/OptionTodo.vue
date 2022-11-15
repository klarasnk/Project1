<template>
  <div class="option">
    <div class="optionTodo">
      <div class="items">
        <div class="tox">
          <input class="mx-4" type="checkbox" @click="changeTodoStatus(item.id)" :checked="item.done">
          <span v-if="!item.edit">{{ item.text }}</span>
          <div v-else class="">
            <input @focusout="itemEdit(item.id)" tabindex="0" class="edit" type="text" v-model="itemEdited">
            <!-- <button @click="itemEdit(item.id)">Save</button> -->
            <button @click="cancelEditing(item.id)">Cancel</button>
          </div>
        </div>
        <div>
          <span @click="edit(item.id)" class="material-symbols-outlined mx-3">edit</span>
          <span @click="deleteTodo(item.id)" class="material-symbols-outlined">delete_sweep</span>
        </div>

      </div>

    </div>
    <p class="error">{{ error }}</p>
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
  data() {
    return {
      errors: {
        emptyField: 'Fill field'
      },
      error: '',
      itemEdited: this.item.text
    }
  },
  methods: {
    ...mapMutations([
      'changeTodoStatus',
      'deleteTodo',
      'edit',
      'save',
      'cancelEdit'
    ]),
    handleFocusOut() {
      console.log('hi');
      this.save(this.item.id)
    },
    cancelEditing() {
      this.itemEdited = this.item.text
      this.cancelEdit(this.item.id)
      this.error = ''
    },
    itemEdit() {
      if (this.itemEdited.trim() !== '') {
        this.item.text = this.itemEdited
        this.save(this.item.id)
        this.error = ''
      } else {
        this.error = this.errors.emptyField
      }
      this.cancelEditing()
    },

  }
}


</script>

<style scoped>
h1 {
  text-align: start;
}



.optionTodo {
  width: 400px;
  height: 35 px;
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
  width: 150px;
  height: 20px;
  border: 1px dotted;
  margin: 5px;
}

.tox {
  display: flex;
}

button {
  height: 20px;
  width: 55px;
  margin: 0 5px
}

span {
  font-size: 20px;
}

.error {
  color: red;
}
</style>
