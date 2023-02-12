<template>
    <div class='card'>
        <div class='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-10'>
            <div class='p-7'>
                <img :src='product.image' alt='an image of the product' class='mx-auto my-7'>
            </div>
            <div class='p-7 md:p-7'>
                <h2 class="text-4xl font-bold text-slate-800 my-7">{{ product.title }}</h2>
                <p class='text-xl my-7 text-slate-600'>Price - ${{ product.price }}</p>
                <h3 class='font-semibold text-base text-slate-800 border-b-2 mb-4 pb-2'>Product Description:</h3>
                <p class='text-slate-700 text-base font-normal'>{{ product.description }}</p>
                <button class='btn flex items-start'><i class='material-icons mr-2'>add_shopping_cart</i><span>Add to
                        cart</span></button>
            </div>
        </div>

    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
img {
    max-width: 300px;
}

.btn {
    margin: 20px 0;
}
</style>