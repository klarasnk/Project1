<template>
  <div class="w-full flex items-center flex-col	">
    <img src="@/assets/images.jpeg">
    <nav>
      <router-link to="/">All</router-link>|
      <router-link to="/done">Done</router-link>|
      <router-link to="/todo">Todo</router-link>
    </nav>
    <NewTodo />
    <router-view />
  </div>
</template>
<script>
import NewTodo from './components/NewTodo.vue';


export default {
  components: { NewTodo, }
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
  color: #ba0228;

}


img {
  width: 300px;

}

button {
  margin: 10px 0;
}

.inp {
  width: 300px;
}

@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
</style>
