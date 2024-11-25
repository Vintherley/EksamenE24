<script setup>
import { inject, computed } from "vue";

const cart = inject("cart");
const removeFromCart = inject("removeFromCart");
const updateQuantity = inject("updateQuantity");

// Beregn samlet pris
const total = computed(() =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
</script>

<template>
  <div class="basket-view">
    <h2>Din kurv</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <p>{{ item.name }}</p>
        <p>{{ item.price }} DKK</p>
        <div>
          <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
        </div>
        <button @click="removeFromCart(item.id)">Fjern</button>
      </li>
    </ul>
    <p>Samlet pris: {{ total }} DKK</p>
    <RouterLink to="/checkout"><button>Gå til betaling</button></RouterLink>
  </div>
</template>

<style>
.basket-box{
    margin-top:60px;
    margin-bottom: 140px;
    display: flex;
    flex-direction: row;
    justify-self: center;
    border: solid 1px #194011;
    width: 300px;
    height: 500px;
}
.basket-box h2{
margin-left: 10px;
}
hr {
  border: none; /* Fjern standardlinje */
  height: 2px; /* Tykkelse af linjen */
  background-color: #194011; /* Farve på linjen */
  width: 295px; /* Fast bredde */
  margin: 60px 0; /* Centrerer linjen horisontalt */
}
.hr-line{
    margin-left: -165px;
}
.overview-basket{
    margin-top: 80px;
    margin-left:-300px;
}
</style>