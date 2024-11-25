<script setup>
import { provide, reactive, computed } from 'vue';
import Navbar from './components/Header.vue';
import FirstFooter from './components/FirstFooter.vue';
import SecondFooter from './components/SecondFooter.vue';
import LastFooter from './components/LastFooter.vue';

// Global state til kurven
const cart = reactive([]);

// Tilføj varer til kurven
const addToCart = (product) => {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cart.push({ ...product });
  }
};

// Fjern varer fra kurven
const removeFromCart = (productId) => {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

// Opdater antallet af en vare i kurven
const updateQuantity = (productId, quantity) => {
  const item = cart.find((item) => item.id === productId);
  if (item && quantity > 0) {
    item.quantity = quantity;
  }
};

// Beregn samlet antal varer
const totalItems = computed(() =>
  cart.reduce((sum, item) => sum + item.quantity, 0)
);

// Beregn samlet pris
const totalPrice = computed(() =>
  cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
);

// Gør globale funktioner og data tilgængelige
provide('cart', cart);
provide('addToCart', addToCart);
provide('removeFromCart', removeFromCart);
provide('updateQuantity', updateQuantity);
provide('totalItems', totalItems);
provide('totalPrice', totalPrice);
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
