<script setup>
import Products from '../components/Products.vue';
import { inject } from 'vue';

// Hent `addToCart` funktionen fra global state
const addToCart = inject('addToCart');
</script>

<template>
  <div>
    <h1 class="title">Shop</h1>
    <p class="info-text">Her i shoppen sælges den gode Camelina olie, de lækre Camelina frø og Camelina Sæbe.</p>
    <Products @add-to-cart="addToCart" />
  </div>
</template>


<style>
body{
  background-color: #FFFEF2;
}

.title{
  margin: 20px;
  font-size: 45px;
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
}


.info-text{
  font-size: 18px;
  margin: 20px;

}
</style>