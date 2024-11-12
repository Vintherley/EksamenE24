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
    <div class="basket-links">
    <RouterLink to="/Basket.vue">
        <img src="@/assets/img/basketimg.png" alt="basket" class="basket" /></RouterLink>
  <button class="burger-menu" @click="toggleMenu">☰</button> <!-- Burger-menu-knap -->
  <div :class="{ 'nav-links': true, 'active': isMenuOpen }">
    <RouterLink to="/" class="nav-link">Forside</RouterLink>
    <RouterLink to="/AboutOS.vue" class="nav-link">Om Os</RouterLink>
    <RouterLink to="/webshop.vue" class="nav-link">Shop</RouterLink>
  </div>
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
    padding: 20px;
    margin: 0px 10px 5px -10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
}
  .burger-menu {
    display: block;   
    background-color: #194011;           /* Vis burger-menuen på mobil */
    
  }

  .nav-links {
    display: none;                 /* Skjul links som standard */
    flex-direction: column;
    align-items: center;
    background-color: #194011;
    width: auto;
    padding: 10px 0;
  }

  .nav-links.active {
    position: absolute;
    display: flex;
    right: 0;
    margin-top: 200px;
    width: 135px;
    z-index: 5;
                    /* Vis links, når burger-menuen er åben */
  }

  .nav-link {
    margin: 10px 0;                /* Plads mellem links */
    font-size: 18px;
    color:#EDEAD0; 
    text-decoration: none;
    
  }
  .logo{
    width: 61px;
    height: 70px;
  }
  .basket{
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px;
  }
  .basket-links{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
}
}
</style>