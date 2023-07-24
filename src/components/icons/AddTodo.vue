<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Type your new todo here...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },

    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo= {
                title: this.title,
                completed: false
            }
            //send up to parent
            this.$emit('add-todo', newTodo);

            this.title = '';
        }
    }
}
</script>
