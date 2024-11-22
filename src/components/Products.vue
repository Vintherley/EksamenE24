

<script setup>
import { reactive } from 'vue';

import product2Image from '@/assets/img/product3.jpg';
import product1Img from '@/assets/img/froeproduct.jpg';
import product3Img from '@/assets/img/seabe.png'

const products = reactive([
  {
    id: 1,
    name: 'Økologisk Dansk Camelina olie - 250ml',
    price: 105,
    imageSrc: product2Image,
    imageAlt: 'Produkt billede af en flaske camelina olie.',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Økologisk Dansk Camelina frø - 100g',
    price: 25,
    imageSrc: product1Img,
    imageAlt: 'Produkt billede af en flaske camelina olie.',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Økologisk Dansk Camelina frø - 250g',
    price: 50,
    imageSrc: product1Img,
    imageAlt: 'Produkt billede af en flaske camelina olie.',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Økologisk Dansk Camelina sæbe - 1 stk.',
    price: 50,
    imageSrc: product3Img,
    imageAlt: 'Produkt billede af en flaske camelina olie.',
    quantity: 1,
  },
]);

// Metoder
const increaseQuantity = (product) => {
  product.quantity++;
};

const decreaseQuantity = (product) => {
  if (product.quantity > 1) {
    product.quantity--;
  }
};

const addToCart = (product) => {
  console.log(
    `Tilføjet ${product.quantity} stk. af "${product.name}" til kurven!`
  );
};

const readMore = (product) => {
  console.log(`Læs mere om "${product.name}"!`);
};
</script>

<template>
  <div class="webshop">
    <div 
      v-for="product in products" 
      class="product-item"
    >
      <img :src="product.imageSrc" :alt="product.imageAlt" class="product-image" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }} DKK</p>
      
      <div class="quantity-controls">
        <button @click="decreaseQuantity(product)">-</button>
        <span class="box">{{ product.quantity }}</span>
        <button @click="increaseQuantity(product)">+</button>
      </div>
      
      <div class="action-buttons">
        <button class="add-to-cart" @click="addToCart(product)">Tilføj til kurv</button>
        <button class="read-more" @click="readMore(product)">Læs mere</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.webshop {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  
}

.product-item {
  border: 1px solid #ccc;
  background-color: #194011;
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
  color:#FFFEF2;
  margin-bottom: 8px;
}

.product-price {
  font-size: 16px;
  color:#FFFEF2;
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
  margin-left:10px;
  margin-right: 10px;
  font-size: 22px;
  border: none;
  background-color: #194011;
  color:#FFFEF2;
  cursor: pointer;
}

.box{
  margin: 0 3px;
  font-size: 16px;
  font-weight: bold;
  background-color: #96BDC6;
  padding: 7px 10px;
  border-radius: 6px
}
.action-buttons{
  margin-top:-50px;
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


.add-to-cart {
  background-color: #FCDB7E;
  border: none;
  border-radius: 6px;
  color: #323031;
}

.read-more {
  background-color: #FCDB7E;
  border: none;
  border-radius: 6px;
  color: #323031;
}
</style>
