<template>
    <div>
        <header class='shadow-sm bg-slate-800'>
            <nav class='container mx-auto p-4 flex justify-between'>
                <nuxt-link to="/products" class='font-bold'>shedidthat.io merch</nuxt-link>
            </nav>
        </header>

        <!-- output page content -->
        <div class='container mx-auto p-4'>
            <slot />
        </div>
    </div>
    <hr>
    <footer class='container mx-auto p-4'>
        <ul class='flex gap-4'>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
    </footer>
</template>

<style scoped>
footer .router-link-exact-active {
    color: #f5d0fe;
}
</style>