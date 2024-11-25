<script setup>
import { ref, computed } from "vue";

// Data for kurven (del med BasketView, hvis de er i samme state)
const cartItems = ref([
  { id: 1, name: "Camelina olie", price: 105, quantity: 2 },
  { id: 2, name: "Camelina frø", price: 50, quantity: 1 },
]);

// Beregning af den samlede pris
const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
</script>

<template>
  <div class="summary">
    <h3>Samlet pris: {{ totalPrice }} DKK</h3>
    <button class="checkout-btn">Gå til betaling</button>
  </div>
</template>

<style scoped>
.summary {
  padding: 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #ccc;
}

.checkout-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
