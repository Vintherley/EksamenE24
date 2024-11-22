<script setup>
import Products from '../components/Products.vue'; // Komponentnavnet skal starte med stort bogstav
</script>

<template>
  <div>
    <h1 class="title">Shop</h1>
    <p class="info-text"> Her i shoppen sælges den gode Camelina olie og de lækre Camelina frø.</p>
    <!-- Kald komponenten korrekt -->
    <Products />
  </div>
</template>

<style>
.title{
  margin: 10px;
  font-size: 35px;
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
}


.info-text{
  font-size: 18px;
  margin: 10px;

}
</style>