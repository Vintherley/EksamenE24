<script setup>
import { ref } from 'vue';

const currentSlide = ref(0); // Start med første slide
const products = ref([
  {
    name: 'Økologisk Dansk Camelina olie <br>250ml',
    features: ['Lang holdbarhed', 'Lokal dyrket', 'Lokal produceret', 'Omega 3 fedtsyrer'],
    usage: ['Salat', 'Stegning', 'Bagning'],
    price: '105,00 kr.',
    image: new URL('@/assets/img/product2.gif', import.meta.url).href,
    alt: 'Camelina olie og frø',
    link: '/Webshop',
  },
  {
    name: 'Økologisk Dansk Camelina sæbe',
    features: ['Citrus duft', 'Blødgørende', 'Håndlavet'],
    usage: ['Håndvask', 'Kropvask'],
    price: '50,00 kr.',
    image: new URL('@/assets/img/saebe-2.gif', import.meta.url).href,
    alt: 'Camelina sæbe',
    link: '/Webshop',
  },
  {
    name: 'Økologisk Dansk Camelina frø <br>100g',
    features: ['Fiberrig', 'Lokal dyrket', 'Omega 6', 'Omega 3 fedtsyrer'],
    usage: ['Smoothie', 'Salater', 'Bagning'],
    price: '25,00 kr.',
    image: new URL('@/assets/img/froep.gif', import.meta.url).href,
    alt: 'Camelina frø',
    link: '/Webshop',
  },
]);

// Funktion til at skifte til forrige slide
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + products.value.length) % products.value.length;
}

// Funktion til at skifte til næste slide
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % products.value.length;
}
</script>


<template>
    <div>
      <h2>Vores produkter</h2>
      <div class="slideshow-container">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="main-box"
          :style="{ display: currentSlide === index ? 'flex' : 'none' }"
        >
          <div class="texts-box">
            <p v-html="product.name"></p>
            <ul>
              <li v-for="(feature, i) in product.features" :key="'feature-' + i">{{ feature }}</li>
            </ul>
            <p>Anvendelse</p>
            <ul>
              <li v-for="(use, i) in product.usage" :key="'usage-' + i">{{ use }}</li>
            </ul>
            <p>Pris: {{ product.price }}</p>
          </div>
          <img :src="product.image" :alt="product.alt" class="product-img" />
          <RouterLink :to="product.link" class="product-btn">Køb her</RouterLink>
        </div>
        <button class="prev-btn" @click="prevSlide">❮</button>
        <button class="next-btn" @click="nextSlide">❯</button>
      </div>
    </div>
  </template>

<style scoped>
@media (max-width: 767px) {
h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
}

.slideshow-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.main-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.texts-box {
  background-color: #96bdc6;
  width: 220px;
  height: 225px;
  border-radius: 6px;
  padding: 5px;
}

.texts-box p {
  display: flex;
  font-size: 14px;
  margin: 0 3px ;
  margin-bottom: -10px;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
}

ul li {
  font-size: 12px;
  margin: 0;
}

.product-img {
  margin-left: -30px;
  height: 223px;
  width: 102px;
  border-radius: 6px;
}

.product-btn {
  position: absolute;
  align-self: center;
  margin-top: 190px;
  left: 145px;
  background-color: #fcdb7e;
  color: #323031;
  width: 67px;
  height: 20px;
  text-decoration: none;
  padding: 5px;
  border-radius: 6px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 2;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}
}
@media (min-width: 768px) {
  h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
}
  .slideshow-container {
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: auto;
}
  .texts-box {
  background-color: #96bdc6;
  width: 100%;
  height: auto;
  max-height: 500px ;
  border-radius: 6px;
  padding: 5px;
  margin-right: 30px;
}
.texts-box p {
  display: flex;
  font-size: 18px;
  margin: 0 3px ;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
}
ul li {
  font-size: 15px;
  list-style: circle;
  margin: 0;
}
.main-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.product-img {

  height: auto;
  width: 402px;
  border-radius: 6px;
}
.product-btn {
  position: absolute;
  align-self: center;
  margin-top: 190px;
  left: 255px;
  background-color: #fcdb7e;
  color: #323031;
  width: 67px;
  height: 20px;
  text-decoration: none;
  padding: 5px;
  border-radius: 6px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 2;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev-btn {
  left: -30px;
}

.next-btn {
  right: -30px;
}
}
</style>