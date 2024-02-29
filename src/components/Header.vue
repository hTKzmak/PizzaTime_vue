<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div class="logo">
            <RouterLink to="/">Recipes</RouterLink>
        </div>
        <nav>
            <RouterLink to="/">All recipes</RouterLink>
            <RouterLink to="/favorite">Favorite</RouterLink>
        </nav>
    </header>
</template>

<style>
header {
    height: 158px;
    background-color: #ffa032;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}

.logo,
nav>a {
    background-color: #ff4f04;
    text-decoration: none;
    color: #000;
}

.logo,
.logo>a {
    padding: 25px 63px;
    border-radius: 15px;
    font-size: 48px;
    color: #000;
    text-decoration: none;
}

nav {
    display: flex;
    gap: 30px;
}

nav>a {
    padding: 14px 32px;
    font-size: 16px;
    border-radius: 25px;
    font-weight: 700;
}
</style>