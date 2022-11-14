import { createRouter, createWebHistory } from 'vue-router'
import TodoItem from "@/views/TodoItem.vue";
import AllToDo from "@/views/AllToDo";
import DoneTodo from '@/views/DoneTodo.vue';

const routes = [
  {
    path: '/',
    name: 'all',
    component: AllToDo,
    props: true
  },
  {
    path: '/done',
    name: 'done',
    component: DoneTodo
  },
  {
    path: '/todo',
    name: 'todo',
    component:TodoItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
