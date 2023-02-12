<template>
    <div>
        <header class='shadow-sm bg-slate-800'>
            <nav class='container my-6 mx-auto p-4 flex justify-between items-center'>
                <nuxt-link to="/">
                    shedidthat<span>io</span>
                </nuxt-link>
                <ul class='flex items-center gap-4'>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products" id='nav-cta'
                            class='nav-cta-class border-2 border-white p-3'>Products</nuxt-link></li>
                </ul>
            </nav>
        </header>

        <!-- output page content -->
        <div class='container mx-auto p-4'>
            <slot />
        </div>
    </div>
</template>

<style scoped>

</style>

