<script setup>
defineProps({
    header2: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <h2 class="grey">{{ header2 }}</h2>
    </div>
</template>

<style scoped>
h2 {
    font-weight: 100;
    font-size: smaller;
    position: relative;
    top: 50px;
    left: -6.2em;
}
</style>