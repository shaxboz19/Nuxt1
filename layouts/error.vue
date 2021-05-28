<template>
    <section>
        <h1>Ошибка 404!</h1>
        <nuxt-link to="/">Для перехода в главную страницу нажмите здесь</nuxt-link>
    </section>
</template>

<style scoped>
    h1 {
        color : red
    }
    section { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>