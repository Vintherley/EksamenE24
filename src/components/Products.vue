<script setup>

</script>

<template>
  <div class="product-card">
    <img class="product-image" :src="product.image" :alt="product.name" />
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p class="price">{{ product.price }} kr.</p>
      <div class="quantity-controls">
        <button @click="decreaseQuantity">-</button>
        <span>{{ quantity }}</span>
        <button @click="increaseQuantity">+</button>
      </div>
      <div class="actions">
        <button class="add-to-cart">Tilføj til kurv</button>
        <button class="read-more">Læs mere</button>
      </div>
    </div>
  </div>
</template>

<style>
    
</style>