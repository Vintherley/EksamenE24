<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
<nav class="menu">
  <RouterLink to="/FrontPaige.vue">
    <img src="@/assets/img/logo.png" alt="Logo" class="logo" /></RouterLink>
  <button class="burger-menu" @click="toggleMenu">☰</button> <!-- Burger-menu-knap -->
  <div :class="{ 'nav-links': true, 'active': isMenuOpen }">
    <RouterLink to="/AboutOS.vue" class="nav-link">Om Os</RouterLink>
    <RouterLink to="/webshop.vue" class="nav-link">Shop</RouterLink>
  </div>
</nav>
</template>

<style>
@media (max-width: 768px) {
    .burger-menu {
  display: none;                   /* Skjul burger-menuen på desktop */
  background: none;
  border: none;
  font-size: 24px;
  color: #EDEAD0;
  cursor: pointer;
}

/* Mobil-version */
@media (max-width: 768px) {
.menu{
    background-color: #194011;
    width: 100vh;
    height: 68px;
}
  .burger-menu {
    display: block;                /* Vis burger-menuen på mobil */
  }

  .nav-links {
    display: none;                 /* Skjul links som standard */
    flex-direction: column;
    align-items: center;
    background-color: #194011;
    width: 100%;
    padding: 10px 0;
  }

  .nav-links.active {
    display: flex;                 /* Vis links, når burger-menuen er åben */
  }

  .nav-link {
    margin: 10px 0;                /* Plads mellem links */
    font-size: 18px;
  }
  .logo{
    width: 61px;
    height: 70px;
  }
}
}
</style>