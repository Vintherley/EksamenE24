<template>
  <footer class="last-footer">
    <div class="footer-top">
      <span>Charlotte Lund</span>
      <span>CEO & Founder</span>
      <span>Tlf. 51502404</span>
    </div>
    <div class="footer-info">
      <button class="info-button" @click="toggleDropdown">
        Information omkring camelina
        <span :class="{'arrow-up': isDropdownVisible, 'arrow-down': !isDropdownVisible}">▲</span>
      </button>
      <div v-if="isDropdownVisible" class="dropdown-menu">
        <p>Handelsbetingelser</p>
        <p>Privatlivspolitik</p>
        <p>Cookiepolitik (EU)</p>
      </div>
    </div>
    <div class="footer-text">
      <p>Åbent i butikken hver torsdag ml. <strong>11 - 17</strong></p>
      <p>Eller efter aftale</p>
    </div>
    <hr />
    <div class="footer-bottom">
      <p>Dansk Camelina – CVR 37955078</p>
      <p>Tjørntvedvej 16 – 4295 Stenlille – Sorø – Vestsjælland – Danmark</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false, // Styrer om dropdown er synlig
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
  },
};
</script>

<style scoped>
.last-footer {
  background-color: #194011; /* Grøn baggrund */
  color: #f0e5cd; /* Lys tekst */
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
}

.footer-top {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
}


.footer-text {
  margin-top: 10px; /* Adds spacing below the beige box */
}

.footer-text.footer-info {
  background-color: transparent; /* Gør baggrunden gennemsigtig */
  padding: 0;
}

.info-button {
  background-color: #f5f5d8; /* Lys beige baggrund */
  color: #2e4820; /* Mørkegrøn tekstfarve */
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px; /* Runde kanter */
  padding: 10px 20px; /* Indre margin */
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Let skygge */
  width: 100%;
  max-width: 400px; /* Begrænsning af bredden */
  margin: 0 auto; /* Centrer knappen */
  text-align: left; /* Venstrejusteret tekst */
}

.info-button:hover {
  background-color: #ebe7c0; /* Lysere beige på hover */
}

.info-button span {
  margin-left: auto; /* Flyt pilen til højre */
  font-size: 12px; /* Mindre pil */
}

.dropdown-menu {
  margin-top: 10px;
  background-color: #f5f5d8; /* Samme beige farve som knappen */
  padding: 10px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Let skygge */
}

.dropdown-menu p {
  margin: 5px 0;
  font-size: 14px;
  cursor: pointer;
  color: #2e4820; /* Mørkegrøn tekst */
}

.arrow-up::before,
.arrow-down::before {
  font-size: 14px; /* Justér pilens størrelse */
}
 p {
  margin: 5px 0;
  font-size: 14px;
}

hr {
  border: none;
  border-top: 1px solid #f0e5cd;
  margin: 15px 0;
  width: 100%;
}

.footer-bottom p {
  font-size: 12px;
  margin: 5px 0;
}
</style>
