<script setup>
import { reactive, ref, inject } from "vue";
// Produkter
import product2Image from "@/assets/img/producto3.gif";
import product1Img from "@/assets/img/froep1.gif";
import product3Img from "@/assets/img/saebe-21.gif";

const products = reactive([
  {
    id: 1,
    name: "Økologisk Dansk Camelina olie - 250ml",
    price: 105,
    imageSrc: product2Image,
    imageAlt: "Produkt billede af en flaske camelina olie.",
    quantity: 1,
  },
  {
    id: 2,
    name: "Økologisk Dansk Camelina frø - 100g",
    price: 25,
    imageSrc: product1Img,
    imageAlt: "Produkt billede af camelina frø.",
    quantity: 1,
  },
  {
    id: 3,
    name: "Økologisk Dansk Camelina frø - 250g",
    price: 50,
    imageSrc: product1Img,
    imageAlt: "Produkt billede af camelina frø.",
    quantity: 1,
  },
  {
    id: 4,
    name: "Økologisk Dansk Camelina sæbe - 1 stk.",
    price: 50,
    imageSrc: product3Img,
    imageAlt: "Produkt billede af camelina sæbe.",
    quantity: 1,
  },
]);



const showPopup = ref(false);
const popupMessage = ref("");

// Global `addToCart`-funktion
const addToCart = inject("addToCart");

const handleAddToCart = (product) => {
  addToCart({ ...product, quantity: product.quantity });
  popupMessage.value = `Tilføjet ${product.quantity} stk. af "${product.name}" til kurven!`;
  showPopup.value = true;
  setTimeout(() => {
    showPopup.value = false;
  }, 3000);
};
</script>

<template>
  <div class="webshop">
    <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.imageSrc" :alt="product.imageAlt" class="product-image"/>
      <h3 class="p-name">{{ product.name }}</h3>
      <p>{{ product.price }} DKK</p>
      <div class="quantity-controls">
        <button @click="product.quantity++" class="q-btn">+</button>
        <span class="box">{{ product.quantity }}</span>
        <button @click="product.quantity > 1 ? product.quantity-- : null" class="q-btn">-</button>
      </div>
      <div class="action-buttons">
        <button>Læs mere</button>
        <button @click="handleAddToCart(product)">Tilføj til kurv</button>
    </div>
    </div>
    <div v-if="showPopup" class="popup">{{ popupMessage }}</div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
.webshop {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 40px;
}

.product-item {
  border: 1px solid #ccc;
  background-color: #194011;
  color: #FFFEF2;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  max-width: 300px;
  margin: 0 auto;
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  color: #FFFEF2;
  margin-bottom: 8px;
}

.product-price {
  font-size: 16px;
  color: #FFFEF2;
  margin-bottom: 16px;
}

.quantity-controls {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 16px;
}

.quantity-controls button {
  width: 20px;
  height: 20px;
  margin: 0 10px;
  font-size: 22px;
  border: none;
  background-color: #194011;
  color: #FFFEF2;
  cursor: pointer;
}

.box {
  margin: 0 3px;
  font-size: 16px;
  font-weight: bold;
  background-color: #96BDC6;
  color: #323031;
  padding: 7px 10px;
  border-radius: 6px;
}

.action-buttons {
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  justify-self: end;
  align-items: center;
}

.action-buttons button {
  margin: 5px;
  background-color: #FCDB7E;
  border: none;
  width: 99px;
  height: 23px;
  border-radius: 6px;
  color: #323031;
}

.add-to-cart,
.read-more {
  background-color: #FCDB7E;
  border: none;
  border-radius: 6px;
  color: #323031;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #194011;
  color: #FFFEF2;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
}

.popup p {
  margin-bottom: 16px;
  font-size: 16px;
}

.popup button {
  padding: 8px 12px;
  background-color: #fcdb7e;
  border: none;
  border-radius: 6px;
  color: #323031;
  cursor: pointer;
}

.popup button:hover {
  background-color: #f9c549;
}
}
@media (min-width: 769px) {
  .webshop{
    display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  }
  .webshop p{
  color: #FFFEF2;
}
  .product-item{
    background-color: #194011;
    width: 350px;
    height: 450px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items:  center;
    padding-top: 10px ;
   
  }

  .product-image {
  max-width: 80%;
  height: auto;
  margin-bottom: 16px;
  border-radius: 6px;
}
.product-price {
  font-size: 16px;
  color: #FFFEF2;
  margin-bottom: 16px;
}
.product-price {
  font-size: 16px;
  color: #FFFEF2;
  margin-bottom: 16px;
}
  .quantity-controls {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 16px;
}

.q-btn {
  color: #FFFEF2;
  background-color: transparent;
}
.p-name {
  font-size: 20px;
  font-weight: bold;
  color: #FFFEF2;
  margin-bottom: 8px;
}
.box {
  margin: 0 3px;
  font-size: 16px;
  font-weight: bold;
  background-color: #96BDC6;
  color: #323031;
  padding: 7px 10px;
  border-radius: 6px;
}
.action-buttons {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-items: center;
}

.action-buttons button {
  margin: 5px;
  background-color: #FCDB7E;
  border: none;
  width: 109px;
  height: 33px;
  border-radius: 6px;
  color: #323031;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #194011;
  color: #FFFEF2;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
  width: 300px;
  height: 200px;
}

.popup p {
  margin-bottom: 16px;
  font-size: 16px;
}

.popup button {
  padding: 8px 12px;
  background-color: #fcdb7e;
  border: none;
  border-radius: 6px;
  color: #323031;
  cursor: pointer;
}

.popup button:hover {
  background-color: #f9c549;
}
}
 
</style>
