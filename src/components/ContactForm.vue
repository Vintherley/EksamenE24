<script setup>
import { ref } from 'vue';

// Refs til inputfelterne
const name = ref('');
const email = ref('');
const message = ref('');
const showPopup = ref(false); // Styrer synligheden af pop-up
const feedbackMessage = ref('');

// Funktion til at håndtere indsendelse
const handleSubmit = () => {
  if (!name.value || !email.value || !message.value) {
    feedbackMessage.value = 'Alle felter skal udfyldes!';
    showPopup.value = true;
    return;
  }

  // Indstil feedback-besked og vis pop-up
  feedbackMessage.value = `Tak for din besked, ${name.value}! Du hører fra mig hurtigst muligt.`;
  showPopup.value = true;

  // Nulstil felterne
  name.value = '';
  email.value = '';
  message.value = '';
};

// Funktion til at lukke pop-up
const closePopup = () => {
  showPopup.value = false;
};
</script>

<template>
  <div class="background-box">
    <h3 class="title-contakt">Har du nogle spørgsmål, så kontakt mig her</h3>
    <form @submit.prevent="handleSubmit">
      <input 
        type="text" 
        v-model="name" 
        class="input-name-email" 
        placeholder="Dit navn" 
      />

      <input 
        type="email" 
        v-model="email" 
        class="input-name-email" 
        placeholder="Din e-mail" 
      />

      <textarea 
        v-model="message" 
        class="input-message" 
        placeholder="Din Besked"
      ></textarea>

      <button type="submit" class="send-btn">Send besked</button>
    </form>

    <!-- Pop-up besked -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-content">
        <p>{{ feedbackMessage }}</p>
        <button @click="closePopup" class="close-btn">Luk</button>
      </div>
    </div>
  </div>
</template>

<style>
/* Styling for formular */
@media (max-width: 768px) {
  .background-box {
    margin-top: 30px;
    background-color: #194011;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    padding: 5px;
    height: auto;
    margin-left: 0;
  }
  .title-contakt {
    font-size: medium;
    display: flex;
    justify-self: start;
    margin-left: -15px;
    font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  }
  .input-name-email {
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 18px;
    border-radius: 6px;
    background-color: #EDEAD0;
    margin-bottom: 10px;
  }
  .input-message {
    width: 320px;
    height: 100px;
    border-radius: 6px;
    background-color: #EDEAD0;
    margin-bottom: 10px;
  }
  .send-btn {
    margin-top: 10px;
    margin-left: 100px;
    background-color: #FCDB7E;
    border-radius: 6px;
    width: 101px;
    height: 22px;
    padding: 7px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
}

/* Styling for pop-up */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
}

.close-btn {
  margin-top: 10px;
  background-color: #FCDB7E;
  border: none;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
}
@media (min-width: 769px) {
  .background-box {
    margin-top: 30px;
    background-color: #194011;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 5px;
    height: auto;
    margin-left: 0;
  }
  .title-contakt {
    font-size: 25px;
    display: flex;
    justify-self: start;
    margin-left: -15px;
    font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  }
  .input-name-email {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 30px;
    border-radius: 6px;
    background-color: #EDEAD0;
    margin-bottom: 10px;
  }
  .input-message {
    width: 800px;
    height: 100px;
    border-radius: 6px;
    background-color: #EDEAD0;
    margin-bottom: 10px;
  }
  .send-btn {
    margin-top: 10px;
    margin-left: 350px;
    margin-bottom: 10px;
    background-color: #FCDB7E;
    border-radius: 6px;
    width: 160px;
    height: 30px;
    padding: 7px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
}

/* Styling for pop-up */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
}

.close-btn {
  margin-top: 10px;
  background-color: #FCDB7E;
  border: none;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
}

</style>
