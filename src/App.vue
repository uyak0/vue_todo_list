<script setup>
  import { ref } from 'vue'

  const new_todo = ref('')
  
</script>

<template>
  <div class="welcome_msg">
    <h1 class="title">Hello</h1>
    <h3 class="subtitle">This is your to-do list</h3>
  </div>  
  <input v-model="new_todo" placeholder="Type your new to-do" id="new_todo_text"/>
  <button @click=""> New To-Do </button>
  <div class="toDoItems">
    <input type="checkbox"/><p class="todoText"> {{ new_todo }} </p>
  </div>
</template>

<style scoped>
  /* welcome messages */
  .welcome_msg {
    padding-right: 150px;
  }
  .title {
    font-weight: 500;
    color: lightgreen;
  }
  .subtitle {
    position: relative;
  }
  /*-------*/

  /* todo items */
  .toDoItems {
    display: block;
    margin-top: 5%;
    border-style: solid;
    border-radius: 0.1px;
    border-color: grey;
  }
  .todoText {
    white-space: pre-wrap;
    word-wrap: break-word;
    margin-right: 14.5rem;
  }
  input[type=checkbox] {
    margin-top: 6.5px;
    margin-left: 1.5%;
  }

  #new_todo_text {
    background-color: darkslategrey;
    color:rgb(156, 156, 156);
  }

  #new_todo_text:focus {
    outline: none;
  }

  

  /* ----------- */

</style>