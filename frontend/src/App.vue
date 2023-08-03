<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import axios from 'axios';

const token = '97a04f39ac03679ff4edbedc22a98ed84c1fd33c';
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
        axios.delete('http://127.0.0.1:8000/api/todo_app/' + id + '/', {
          auth: { //simple auth
            username: 'uyako',
            password: 'bryan1234'
          }
        })
        .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
        .catch(err => console.log(err));
      },

      addTodo(newTodo) {
        const { title, completed } = newTodo;
        axios.post('http://127.0.0.1:8000/api/todo_app/', { 
          title,
          completed
        },
        {
         auth: { //simple auth
           username: 'uyako',
           password: 'bryan1234'
         }
        }
        )
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err));
      }
    },
    created() {
      axios.get('http://127.0.0.1:8000/api/todo_app/') //usually should be backend 
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
    }
  }
</script>

