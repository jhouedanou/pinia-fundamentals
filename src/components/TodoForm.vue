<script setup>
  import  {ref} from 'vue'
  import {useTodoListStore} from "../stores/todoList"
const todo = ref('')
const store = useTodoListStore()
//function which checks if the input is not empty
function addItemAndClear(item){
  if(item.length===0){
    return
  }
  //add a new toDo item to the array of todos
  store.addTodo(item)
  //clear out the todo ref
  todo.value = ''

}


</script>

<template>
  <form @submit.prevent="addItemAndClear(todo)">
    <input v-model="todo" type="text" placeholder="task"/>
    <button>Add</button>
  </form>
</template>

<style scoped>
</style>