<script setup>
import { ref } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import Newsletter from '../components/NewsLetter.vue';
import Slide from '../components/SlideProduct.vue';
import Contact from '../components/ContactForm.vue';

</script>

<template>

<div class="hero-title">
 <h1 class="title">Dansk Camelina</h1>
 <img src="@/assets/img/froe.png" alt="frø" class="froe" />
</div>
<HeroSection/>
<Newsletter/>
<Slide/>
<Contact/>
</template>


<style>
@media (max-width: 767px) {
.hero-title{
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-self: center;
    font-family: "Indie Flower", cursive;
    font-weight: 400;
    font-style: normal;
}
}
@media (min-width: 768px){
    .hero-title{
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-self: center;
    font-family: "Indie Flower", cursive;
    font-weight: 400;
    font-style: normal;
}
.hero-title h1{
    font-size: 60px
}
}
</style>