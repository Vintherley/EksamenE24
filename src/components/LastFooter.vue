<template>
  <footer class="last-footer">
    <div class="footer-top">
      <span>Charlotte Lund</span>
      <span>CEO & Founder</span>
      <span>Tlf. 51502404</span>
    </div>
    <div class="footer-info">
      <button class="info-button">Information omkring camelina</button>
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
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
}

.footer-info {
  background-color: #f5f5d8; /* Lys beige baggrund */
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
}

.info-button {
  background: none;
  border: none;
  font-size: 14px;
  color: #2e4820;
  cursor: pointer;
  font-weight: bold;
}

.info-button:hover {
  text-decoration: underline;
}

.footer-text {
  margin-top: 10px; /* Adds spacing below the beige box */
}

.footer-text p {
  margin: 5px 0;
  font-size: 14px;
}

hr {
  border: none;
  border-top: 1px solid #f0e5cd;
  margin: 15px 0;
}

.footer-bottom p {
  font-size: 12px;
  margin: 5px 0;
}
</style>
