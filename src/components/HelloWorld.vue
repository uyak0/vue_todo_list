<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script> -->

<template>
  <div class="greetings">
    <h1 class="green">{{ message }}</h1>
    <h2 class="green">{{ test }}</h2>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<script>
export default {
  name: "HelloPaimon",
  props: ['message'],

  setup(props) {
    let test = 'cunny';
    if (props.message == 'fuck you') {
      console.log('oooooh')
    } else {
      test = 'lol';
    }

    return {
      test
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
