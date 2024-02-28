<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <a href="#!" class="logo">Recipes</a>
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

.logo {
    padding: 25px 63px;
    border-radius: 15px;
    font-size: 48px;

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