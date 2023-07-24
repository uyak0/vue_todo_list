<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <p>
            <input type="checkbox" @change="markComplete">
            {{ todo.title }}
            <button @click="$emit('del-todo', todo.id)" class="del">x</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],

    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
    .del {
        border-style: none;
        border-radius: 50%;
        background-color: red;
        font-size: 15px;
        color: aliceblue;
    }
    .is-complete {
        text-decoration: line-through;        
    }
</style>