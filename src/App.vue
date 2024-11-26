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
body{
  background-color: #edead0;
}
</style>
