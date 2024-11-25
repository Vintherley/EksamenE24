<script setup>
import { provide, ref } from 'vue';
import Navbar from './components/Header.vue';
import FirstFooter from './components/FirstFooter.vue';
import SecondFooter from './components/SecondFooter.vue';
import LastFooter from './components/LastFooter.vue';

// Global state til indkøbskurven
const cartItems = ref(0); // Antallet af varer i kurven

// Funktion til at tilføje varer til kurven
const addToCart = () => {
  cartItems.value++;
};

// Gør state og funktion globalt tilgængelige
provide('cartItems', cartItems);
provide('addToCart', addToCart);
</script>

<template>
  <Navbar />
  <RouterView />
  <FirstFooter />
  <SecondFooter />
  <LastFooter />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
