<template>
    <div>
        <h2 class='mb-3'>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facilis illum repellat accusamus inventore
            sit repudiandae, nulla amet reprehenderit. Voluptates!</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/EUR')
</script>