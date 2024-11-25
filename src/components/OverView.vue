<script setup>
import { ref, computed } from "vue";

// Data for kurven (mock data, senere kan dette hentes globalt eller via en service)
const cartItems = ref([
  {
    id: 1,
    name: "Økologisk Dansk Camelina olie - 250ml",
    price: 105,
    imageSrc: product2Image,
    imageAlt: "Produkt billede af en flaske camelina olie.",
    quantity: 1,
  },
]);

// Funktioner til at justere mængderne
const increaseQuantity = (item) => {
  item.quantity++;
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

// Funktion til at fjerne en vare
const removeItem = (itemId) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
};
</script>

<template>
  <div class="basket-view">
    <h2>Din kurv</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id" class="basket-item">
        <div class="item-info">
          <p>{{ item.name }}</p>
          <p>{{ item.price }} DKK</p>
        </div>
        <div class="quantity-controls">
          <button @click="decreaseQuantity(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)">+</button>
        </div>
        <button class="remove-btn" @click="removeItem(item.id)">Fjern</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.basket-view {
  padding: 20px;
}

.basket-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.item-info {
  flex: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
