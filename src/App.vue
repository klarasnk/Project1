<template>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTlmvJ_MnaoDOBx8hGaFKO-fGM7lnQqjY2A&usqp=CAU">
  <nav>
    <router-link to="/">All</router-link>|
    <router-link to="/done">Done</router-link>|
    <router-link to="/todo">Todo</router-link>
  </nav>
  <NewTodo />
  <router-view />
  <DeleteAll />
</template>
<script>
import DeleteAll from './components/DeleteAll.vue';
import NewTodo from './components/NewTodo.vue';


export default {
  components: { NewTodo, DeleteAll }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
  font-family: fantasy;
}

nav a.router-link-exact-active {
  color: red;

}


img {
  width: 300px;

}

.inp {
  width: 300px;
}
</style>
