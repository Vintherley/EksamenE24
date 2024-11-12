<script setup>
import { ref } from 'vue';
import HeroSection from '../components/HeroSection.vue';

</script>

<template>

<div class="hero-title">
 <h1 class="title">Dansk Camelina</h1>
 <img src="@/assets/img/froe.png" alt="basket" class="basket" />
</div>
<HeroSection/>
</template>


<style>
.hero-title{
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-self: center;
}
</style>