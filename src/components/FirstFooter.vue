<script setup>

</script>

<template>
    <footer class="first-footer">
      <div class="social-container">
        <p>Følg os her</p>
        <div class="social-icons">
          <img src="@/assets/img/facebook.png" alt="Facebook" />
          <img src="@/assets/img/instagram.png" alt="Instagram" />
        </div>
      </div>
      <div class="decoration">
        <img src="@/assets/img/froeillustration.png" alt="Fro" />
      </div>
    </footer>
  </template>
  
  <style scoped>
  .first-footer {
    background-color: #a2c8d0; /* Farve matcher din baggrund */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  
  .social-container {
  display: flex;
  flex-direction: row; /* Placerer teksten over ikonerne */
  align-items: center;    /* Centrerer elementerne vandret */
  gap: 40px;              /* Skaber afstand mellem teksten og ikonerne */
}
  
  .social-container p {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    font-size: 18px;
    color: #000;
    margin: 0 0 5px;
  }
  
  .social-icons {
  display: flex;
  flex-direction: row;    /* Sørger for at ikonerne er på samme linje */
  gap: 25px;              /* Skaber afstand mellem ikonerne */
}
  
  .social-icons img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  
  .decoration img {
    height: 100px;
    margin-top:-50px ;
  }
  </style>
  