<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from './components/icons/Header.vue';
import Todos from './components/icons/Todos.vue';
import AddTodo from './components/icons/AddTodo.vue';
import axios from 'axios';

  export default {
    name: 'app',
    components: {
      AddTodo,
      Header,
      Todos
    },

    data() {
      return {
        todos: []
      }
    },

    methods: {
      deleteTodo(id) {
        axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
        .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
        .catch(err => console.log(err));
      },

      addTodo(newTodo) {
        const { title, completed } = newTodo;
        axios.post('https://jsonplaceholder.typicode.com/todos', { 
          title,
          completed
        })
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));
      }
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5') //usually should be backend
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
    }
  }
</script>

