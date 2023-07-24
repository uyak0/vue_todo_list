<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos"> <!-- for loop with todo.id -->
            <TodoItem v-bind:todo="todo" @del-todo="$emit('del-todo', todo.id)"/> <!-- emit 'del-todo', passing parameter todo.id -->
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: ["todos"]
}
</script>
