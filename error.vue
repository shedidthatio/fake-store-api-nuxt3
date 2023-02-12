<template>
    <div class='card mt-7 max-w-md mx-auto text-center'>
        <div class='grid grid-cols-1 gap-10'>
            <p class='text-7xl text-slate-700 font-bold'>{{ error.statusCode }}</p>
            <p class='text-5xl text-slate-600'>Oopsy!</p>
            <p class='mt-3 text-slate-600'>{{ error.message }}</p>
            <button class='btn my-7' @click='handleClearError'>Go Home...</button>
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({
    redirect: '/'
})
</script>

<style scoped>

</style>