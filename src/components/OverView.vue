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
    <div class="b-title">
        <h2>Indkøbskurv</h2>
        <hr>
    </div>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <img :src="item.imageSrc" :alt="item.name" class="item-image" />
        <p>{{ item.name }}</p>
        <p>{{ item.price }} DKK</p>
        <div class="quantity-controls">
          <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
          <span class="b-box">{{ item.quantity }}</span>
          <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
        </div>
        <button @click="removeFromCart(item.id)" class="remove-btn"> Fjern</button>
        <hr class="b-hr">
      </li>
    </ul>
    <p>Samlet pris: {{ total }} DKK</p>
    <RouterLink to="/checkout"><button class="payment-btn">Gå til betaling</button></RouterLink>
    
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
.basket-view{
    display: flex;
    flex-direction: column;
    justify-self: center;
    border: 1px solid #323031 ;
    width: 295px;
    height: auto;
    margin-top: 50px;
    margin-bottom: 40px;
    padding: 10px;
}
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
.item-image {
  width: 50px; /* Tilpas størrelsen */
  height: 50px;
  object-fit: cover; /* Sørg for, at billedet ikke strækkes */
  border-radius: 4px; /* Rund hjørnerne, hvis ønsket */
  margin-right: 10px; /* Lidt afstand til teksten */
  display: inline-block;
  vertical-align: middle;
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
.payment-btn{
    margin: 5px;
  background-color: #FCDB7E;
  border: none;
  width: 99px;
  height: 23px;
  border-radius: 6px;
  color: #323031;
}
.b-box{
    margin: 0 3px;
  font-size: 16px;
  font-weight: bold;
  background-color: #96BDC6;
  color: #323031;
  padding: 7px 10px;
  border-radius: 6px;
}
.b-title{
  font-family: "Indie Flower", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
}
.b-title hr{
  margin-top: -20px;
}
.b-hr{
  margin-left: -40px;
  
}
.quantity-controls button {
    color: #323031;
    background-color: transparent;
    border: none;
}
ul{
    list-style: none;
}
.remove-btn{
    display: flex;
    flex-direction: row;
    justify-self: end;
    color: red;
    background-color: transparent;
    border: none;
}
}
@media (min-width: 769px) {
  .basket-view{
    display: flex;
    flex-direction: column;
    justify-self: center;
    border: 1px solid #323031 ;
    width: 50%;
    height: auto;
    margin-top: 50px;
    margin-bottom: 40px;
    padding: 10px;
}
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
.item-image {
  width: 30%; /* Tilpas størrelsen */
  height: 30%;
  object-fit: cover; /* Sørg for, at billedet ikke strækkes */
  border-radius: 4px; /* Rund hjørnerne, hvis ønsket */
  margin-right: 10px; /* Lidt afstand til teksten */
  display: inline-block;
  vertical-align: middle;
}
hr {
  border: none; /* Fjern standardlinje */
  height: 2px; /* Tykkelse af linjen */
  background-color: #194011; /* Farve på linjen */
  width: 100%; /* Fast bredde */
  margin: 60px 0; /* Centrerer linjen horisontalt */
}
.hr-line{
    margin-left: -165px;
}
.overview-basket{
    margin-top: 80px;
    margin-left:-300px;
}

ul{
  list-style: none;
}
.remove-btn{
    display: flex;
    flex-direction: row;
    justify-self: end;
    color: red;
    background-color: transparent;
    border: none;
    margin-right: 20px;
}
.overview-basket{
    margin-top: 80px;
    margin-left:-300px;
}
.payment-btn{
    margin: 5px;
  background-color: #FCDB7E;
  border: none;
  width: 110px;
  height: 33px;
  border-radius: 6px;
  color: #323031;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
}
.b-box{
    margin: 0 3px;
  font-size: 16px;
  font-weight: bold;
  background-color: #96BDC6;
  color: #323031;
  padding: 7px 10px;
  border-radius: 6px;
}
.b-title{
  font-family: "Indie Flower", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
}
.b-title hr{
  margin-top: -20px;
}
.b-hr{
  margin-left: -40px;
  
}
.quantity-controls button {
    color: #323031;
    background-color: transparent;
    border: none;
}
}
</style>