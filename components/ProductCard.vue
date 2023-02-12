<template>
    <div class='flex card text-center'>
        <img :src='product.image' alt="product thumbnail image" class='thumb'>
        <p class='font-bold text-slate-800 m-4 truncate'>{{ product.title }}</p>
        <nuxt-link :to='`/products/${product.id}`'>
            <p class="btn">View Details</p>
        </nuxt-link>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: auto;
}
</style>