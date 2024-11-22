<script setup>
import { ref } from 'vue';
import { db, collection, addDoc } from '../Firebase';

// Definer reactive variabler
const email = ref('');
const message = ref('');
const messageType = ref('');

// Email valideringsfunktion
function validateEmail(inputEmail) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(inputEmail);
}

// Tilmeldingsfunktion
async function subscribe() {
  if (!validateEmail(email.value)) {
    message.value = 'Indtast en gyldig e-mailadresse.';
    messageType.value = 'error';
    return;
  }

  try {
    await addDoc(collection(db, 'newsletter'), {
      email: email.value,
      timestamp: new Date()
    });
    message.value = 'Tak for din tilmelding!';
    messageType.value = 'success';
    email.value = ''; // Tøm inputfeltet
  } catch (error) {
    message.value = 'Der opstod en fejl. Prøv igen senere.';
    messageType.value = 'error';
  }
}
</script>

<template>
  <div class="box-news">
    <h3>Tilmeld dig vores nyhedsbrev her</h3>
    <form @submit.prevent="subscribe" class="newsletter-form">
      <input 
        type="email" 
        v-model="email" 
        class="input-news" 
        placeholder="Indtast din e-mail" 
      />
      <button type="submit" class="news-btn">Abonner</button>
    </form>
    <p v-if="message" :class="messageType">{{ message }}</p>
    <img src="@/assets/img/olie.png" alt="illustration af camelina olie" class="olie-img" />
  </div>
  
</template>

<style>
.box-news{
    background-color:#194011;
    height: 90px;
    width: 395px;
    margin-left: -7px;

}
h3{
    display: flex;
    justify-content: center;
    color: #EDEAD0;
    margin: none;

}
.newsletter-form {
    display: flex;
    justify-content: left; /* Sørger for at input og knap er centreret vertikalt */
   
}

.input-news {
    width: 200px;
    height: 25px;
    margin-left: 60px;
}

.news-btn {
    width: 93px;
    height: 32px;
    border-radius: 0px 6px 6px 0;
    background-color: #FCDB7E;
}
.olie-img{
  margin-top: -35px;
  margin-left:10px;
  z-index: 2;

}
</style>