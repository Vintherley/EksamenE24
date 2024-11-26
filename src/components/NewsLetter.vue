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
    <img src="@/assets/img/olie.gif" alt="illustration af camelina olie" class="olie-img" />
  </div>
</template>

<style>
/* Mobil (op til 767px) */
@media (max-width: 767px) {
  .box-news {
    background-color: #194011;
    height: auto;
    width: 100%;
    padding: 20px;
  }

  h3 {
    text-align: center;
    color: #edead0;
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .input-news {
    width: 90%;
    max-width: 300px;
    height: 35px;
    padding: 5px;
  }

  .news-btn {
    width: 93px;
    height: 35px;
    border-radius: 4px;
    background-color: #fcdb7e;
  }

  .olie-img {
    margin-top: 10px;
    width: 60px;
    height: auto;
    align-self: center;
  }
}


@media (min-width: 768px) {
  .box-news {
    background-color: #194011;
    height: 100px;
    width: 100%;
    margin: 0 ;
    padding: 30px;
    
  }

  h3 {
    margin-top: 0px;
    text-align: center;
    font-size: 30px;
    color: #edead0;
  }

  .newsletter-form {
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  }

  .input-news {
    margin-left: 220px;
    width: 80%;
    max-width: 1020px;
    height: 38px;
    border-radius: 6px 0 0 6px;
    border: none;
  }

  .news-btn {
    width: 140px;
    height: 40px;
    font-size: 1rem;
    background-color: #fcdb7e;
    color: #323031;
    border: none;
    border-radius: 0 6px 6px 0;
  }

  .olie-img {
    width: 80px;
    height: auto;
    position: relative;
    margin-top: -140px;
  }
}

</style>
